import {registrationAPI} from '../../api/registrationAPI'
import {message} from 'antd'

const TOGGLE_LOADING = 'TOGGLE-LOADING'

const initialState = {
    loading: false
}

const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        default: {
            return state
        }
    }
}

const toggleLoading = (loading) => ({type: TOGGLE_LOADING, loading})

/**
 * Register a company
 * @param company Information about company
 * @returns {function(*): Promise<void>}
 */
export const registerCompany = (company) => async (dispatch) => {
    dispatch(toggleLoading(true))

    const response = await registrationAPI.addCompany(company)

    dispatch(toggleLoading(false))

    if (response.status === 200) {
        message.success('Вы успешно зарегестрировали компанию.')
    }
}

export default registrationReducer
