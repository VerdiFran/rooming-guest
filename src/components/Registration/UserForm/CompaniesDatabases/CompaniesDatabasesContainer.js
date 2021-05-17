import React, {useEffect, useState} from 'react'
import CompaniesDatabases from './CompaniesDatabases'
import {registrationAPI} from '../../../../api/registrationAPI'
import {message} from 'antd'
import useDebounce from '../../../../hooks/useDebounce'

const CompaniesDatabasesContainer = ({formik}) => {
    const [companies, setCompanies] = useState([])
    const [loading, setLoading] = useState(false)

    const downloadCompanies = async (city, name) => {
        setLoading(true)

        try {
            const response = await registrationAPI.getCompanies(city, name)
            setCompanies(response.data.content.map(company => ({...company, createdAt: new Date(company.createdAt)})))
        } catch (e) {
            message.error(e.toString())
        }

        setLoading(false)
    }

    useEffect(() => {
        downloadCompanies(formik.values.city)
    },  [])

    const [searchTerm, setSearchTerm] = useState('')
    const debouncedSearchTerm = useDebounce(searchTerm, 500)

    useEffect(() => {
        if (debouncedSearchTerm) {
            downloadCompanies(formik.values.city, debouncedSearchTerm).then()
        }
    }, [debouncedSearchTerm])

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm)
    }

    return <CompaniesDatabases
        formik={formik}
        companies={companies}
        loading={loading}
        handleSearch={handleSearch}
    />
}

export default CompaniesDatabasesContainer
