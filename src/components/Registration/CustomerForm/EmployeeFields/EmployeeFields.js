import React from 'react'
import {Form, Input} from 'formik-antd'

/**
 * Set of fields for every employee
 * @param employeeIndex Index of every employee
 * @returns {JSX.Element}
 * @constructor
 */
const EmployeeFields = ({employeeIndex}) => {
    return (
        <div>
            <Form.Item name={`employees.${employeeIndex}.firstName`} label="Имя">
                <Input name={`employees.${employeeIndex}.firstName`}/>
            </Form.Item>
            <Form.Item name={`employees.${employeeIndex}.lastName`} label="Фамилия">
                <Input name={`employees.${employeeIndex}.lastName`}/>
            </Form.Item>
            <Form.Item
                name={`employees.${employeeIndex}.email`}
                label="Email"
                tooltip="На этот адрес придет письмо с данными для входа в систему."
            >
                <Input name={`employees.${employeeIndex}.email`}/>
            </Form.Item>
            <Form.Item name={`employees.${employeeIndex}.phoneNumber`} label="Номер телефона">
                <Input name={`employees.${employeeIndex}.phoneNumber`}/>
            </Form.Item>
        </div>
    )
}

export default EmployeeFields
