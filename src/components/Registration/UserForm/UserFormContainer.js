import React, {useEffect, useState} from 'react'
import UserForm from './UserForm'
import {message} from 'antd'
import useDebounce from '../../../hooks/useDebounce'
import {citiesDbAPI} from '../../../api/citiesDbAPI'

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

    const handleSubmit = async (values) => {
        setLoading(true)

        new Promise(resolve => {
            setTimeout(() => {
                resolve(JSON.stringify(values, null, 2))
            }, 2000)
        }).then(result => {
            message.success(result.toString())
            setLoading(false)
        })
    }

    return <UserForm
        loading={loading}
        isSearching={isSearching}
        cityOptions={cityOptions}
        setSearchTerm={setSearchTerm}
        handleSubmit={handleSubmit}
    />
}

export default UserFormContainer
