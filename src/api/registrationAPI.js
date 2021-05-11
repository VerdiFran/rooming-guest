import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'http://176.119.158.143:8080/api'
})

export const registrationAPI = {
    /**
     * POST request for adding new company
     * @param {{name: string, email: string, contactPhone: string, employees: [{firstName: string, lastName: string, email: string, phoneNumber: string}]}} company Information about company
     * @returns {*}
     */
    addCompany(company) {
        return instance.post('add-requests/companies', company)
    },
    /**
     * POST request for adding new user
     * @param {{firstName: string, lastName: string, email: string, phoneNumber: string, city: string}} user Information about user
     * @returns {*}
     */
    addUser(user) {
        return instance.post('add-requests/users', user)
    }
}
