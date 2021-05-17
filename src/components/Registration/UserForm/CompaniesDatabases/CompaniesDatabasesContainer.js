import React, {useEffect, useState} from 'react'
import CompaniesDatabases from './CompaniesDatabases'
import {registrationAPI} from '../../../../api/registrationAPI'
import {message} from 'antd'

const CompaniesDatabasesContainer = ({formik}) => {
    const [companies, setCompanies] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        registrationAPI.getCompanies(formik.values.city).then(response => {
            setCompanies(response.data.content.map(company =>
                ({...company, createdAt: new Date(company.createdAt)})))
            setLoading(false)
        }).catch(error => message.error(error.toString()))
    },  [])

    const handleSearch = () => {

    }

    return <CompaniesDatabases
        formik={formik}
        companies={companies}
        loading={loading}
        handleSearch={handleSearch}
    />
}

export default CompaniesDatabasesContainer
