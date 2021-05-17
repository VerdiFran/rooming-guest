import {connect} from 'react-redux'
import CustomerForm from './CustomerForm'
import {registerCompany} from '../../../redux/reducers/registrationReducer'
import {getLoading} from '../../../utils/selectors/registrationSelectors'
import {useEffect, useState} from 'react'
import {citiesDbAPI} from '../../../api/citiesDbAPI'
import useDebounce from '../../../hooks/useDebounce'

const mapStateToProps = (state) => ({
    loading: getLoading(state)
})

const CustomerFormContainer = ({loading, registerCompany}) => {
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

    return <CustomerForm
        loading={loading}
        cityOptions={cityOptions}
        setSearchTerm={setSearchTerm}
        registerCompany={registerCompany}
    />
}

export default connect(mapStateToProps, {registerCompany})(CustomerFormContainer)