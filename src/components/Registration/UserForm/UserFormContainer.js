import React, {useEffect, useState} from 'react'
import UserForm from './UserForm'
import useDebounce from '../../../hooks/useDebounce'
import {citiesDbAPI} from '../../../api/citiesDbAPI'
import {Button, Space, Steps} from 'antd'
import {useFormik} from 'formik'
import * as Yup from 'yup'

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

    const fakeAddUser = async () => {
        return await new Promise(resolve => {
            setTimeout(() => {
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
            .min(3, 'Контактный номер не может иметь менее 3-х цифр.')
            .max(12, 'Контактный номер не может иметь более 12-ти цифр.')
            .matches(/\+?\d{3,12}/, 'Контактный номер может содержать только цифра и знак "+".')
            .required('Это поле обязательно для заполнения.'),
        city: Yup.string()
            .required('Это поле обязательно для заполнения.')
    })

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            city: ''
        },
        validationSchema: SignupSchema,
        onSubmit: values => handleSubmit(values)
    })

    const {Step} = Steps

    const steps = [
        {
            title: 'Личные данные',
            content: <UserForm
                formik={formik}
                loading={loading}
                isSearching={isSearching}
                cityOptions={cityOptions}
                setSearchTerm={setSearchTerm}
            />
        },
        {
            title: 'Базы компаний',
            content: <div>Выбор компаний</div>
        }
    ]

    return <Space direction="vertical" size="middle" style={{width: '100%'}}>
        <Steps current={currentStep}>
            {steps.map(step => <Step title={step.title}/>)}
        </Steps>
        {
            steps[currentStep].content
        }
        <Space direction="horizontal" size="small">
            {
                currentStep > 0
                && <Button onClick={() => setCurrentStep(currentStep - 1)}>Назад</Button>
            }
            {
                currentStep < steps.length - 1
                && <Button onClick={() => setCurrentStep(currentStep + 1)}>Далее</Button>
            }
            {
                currentStep === steps.length - 1
                && <Button
                    type="primary"
                    loading={loading}
                    onClick={() => {
                        formik.validateForm().then()
                        formik.handleSubmit()
                    }}
                >Зарегестрироваться</Button>
            }
        </Space>
    </Space>
}

export default UserFormContainer
