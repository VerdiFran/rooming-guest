import registrationReducer from './reducers/registrationReducer'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    registration: registrationReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store