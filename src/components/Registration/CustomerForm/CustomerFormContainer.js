import {connect} from 'react-redux'
import CustomerForm from './CustomerForm'
import {registerCompany} from '../../../redux/reducers/registrationReducer'
import {getLoading} from '../../../utils/selectors/registrationSelectors'

const mapStateToProps = (state) => ({
    loading: getLoading(state)
})

export default connect(mapStateToProps, {registerCompany})(CustomerForm)