import React, {useEffect, useState} from 'react'
import PersonalInformation from './PersonalInformation/PersonalInformation'
import useDebounce from '../../../hooks/useDebounce'
import {citiesDbAPI} from '../../../api/citiesDbAPI'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import UserForm from './UserForm'
import CompaniesDatabasesContainer from './CompaniesDatabases/CompaniesDatabasesContainer'

/**
 * Container component for user registration form
 * @returns {JSX.Element}
 * @constructor
 */
const UserFormContainer = () => {
    const [loading, setLoading] = useState(false)

    const [searchTerm, setSearchTerm] = useState('')
    const [isSearching, setIsSearching] = useState(false)
    const [cityOptions, setCityOptions] = useState([])

    const [currentStep, setCurrentStep] = useState(0)

    const debouncedSearchTerm = useDebounce(searchTerm, 1000)

    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Слишком короткое имя.')
            .max(50, 'Слишком длинное имя.')
            .required('Это поле обязательно для заполнения.'),
        lastName: Yup.string()
            .min(2, 'Слишком короткая фамилия.')
            .max(50, 'Слишком длинная фамилия.')
            .required('Это поле обязательно для заполнения.'),
        email: Yup.string()
            .email('Некорректный email.')
            .required('Это поле обязательно для заполнения.'),
        phoneNumber: Yup.string()
            .min(3, 'Контактный номер должен содержать не менее 3 цифр.')
            .max(12, 'Контактный номер ндолжен содержат не более 12 цифр.')
            .matches(/\+?\d{3,12}/, 'Контактный номер может содержать только цифры и знак "+".')
            .required('Это поле обязательно для заполнения.'),
        city: Yup.string()
            .required('Это поле обязательно для заполнения.'),
        password: Yup.string()
            .matches(/[A-Za-z\d@$!%*#?&]/,
                'Пароль может содержать только латинские буквы, цифры и следующие символы: @, $, !, %, *, #, ?, &.')
            .min(8, 'Пароль должен содержать не менее 8 символов.')
            .max(30, 'Пароль должен содержать не более 30 символов.')
            .matches(
                /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*#?&]/,
                'Пароль должен содержать хотя бы одну строчную латинскую букву, хотя бы одну заглавную латинскую букву и хотя бы одну цифру.'
            )
            .required('Это поле обязательно для заполнения.'),
        passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать.')
    })

    const formik = useFormik({
        initialValues: {
            firstName: 'ee',
            lastName: 'ee',
            email: 'e@2.ru',
            phoneNumber: '89563323236',
            city: 'Казань',
            password: '123mmTTT',
            passwordConfirmation: '123mmTTT',
            companyIds: []
        },
        validationSchema: SignupSchema,
        onSubmit: values => handleSubmit(values)
    })

    const getCities = (searchTerm) => {
        return citiesDbAPI.getCitiesByNamePrefix(searchTerm)
    }

    useEffect(() => {
        if (debouncedSearchTerm) {
            setIsSearching(true)
            getCities(debouncedSearchTerm).then(response => {
                setCityOptions(response.data.data.map(city => ({
                    value: city.city,
                    label: city.city
                })))
                setIsSearching(false)
            })
        }
    }, [debouncedSearchTerm])

    const fakeAddUser = async (data) => {
        return await new Promise(resolve => {
            setTimeout(() => {
                alert(JSON.stringify(data, null, 2))
                resolve('done')
            }, 1500)
        })
    }

    const handleSubmit = async (values) => {
        setLoading(true)
        // await registrationAPI.addUser(values)
        await fakeAddUser(values)

        setLoading(false)
        setCurrentStep(currentStep + 1)
    }

    const steps = [
        {
            title: 'Личные данные',
            content: <PersonalInformation
                formik={formik}
                loading={loading}
                isSearching={isSearching}
                cityOptions={cityOptions}
                setSearchTerm={setSearchTerm}
            />
        },
        {
            title: 'Базы компаний',
            content: <CompaniesDatabasesContainer
                formik={formik}
            />
        }
    ]

    return (
        <UserForm
            steps={steps}
            currentStep={currentStep}
            loading={loading}
            formik={formik}
            setCurrentStep={setCurrentStep}
        />
    )
}

export default UserFormContainer
