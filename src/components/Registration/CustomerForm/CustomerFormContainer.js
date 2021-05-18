import CustomerForm from './CustomerForm'
import {useEffect, useState} from 'react'
import {citiesDbAPI} from '../../../api/citiesDbAPI'
import useDebounce from '../../../hooks/useDebounce'
import {registrationAPI} from '../../../api/registrationAPI'

const CustomerFormContainer = ({completeRegistration}) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [isSearching, setIsSearching] = useState(false)
    const [cityOptions, setCityOptions] = useState([])

    const debouncedSearchTerm = useDebounce(searchTerm, 1000)

    const getCities = (searchTerm) => {
        return citiesDbAPI.getCitiesByNamePrefix(searchTerm)
    }

    const [loading, setLoading] = useState(false)

    const handleSubmit = async (company) => {
        setLoading(true)

        const companyCopy = Object.fromEntries(Object.entries(company))

        const offices = companyCopy.offices

        delete companyCopy.offices
        delete companyCopy.currOfficeId

        companyCopy.employees.forEach(employee => {
            employee.office = offices.find(ofc => ofc.id === employee.officeId)
            delete employee.officeId
            delete employee.office.id
        })

        const response = await registrationAPI.addCompany(companyCopy)

        setLoading(false)

        if (response.status === 200) {
            completeRegistration()
        }
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

    return <CustomerForm
        loading={loading}
        cityOptions={cityOptions}
        setSearchTerm={setSearchTerm}
        handleSubmit={handleSubmit}
    />
}

export default CustomerFormContainer