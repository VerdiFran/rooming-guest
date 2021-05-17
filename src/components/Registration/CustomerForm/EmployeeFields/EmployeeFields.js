import React from 'react'
import {Form, Input, Select} from 'formik-antd'

/**
 * Set of fields for every employee
 * @param employeeIndex Index of every employee
 * @param officeOptions
 * @returns {JSX.Element}
 * @constructor
 */
const EmployeeFields = ({employeeIndex, officeOptions}) => {
    const {Option} = Select
    console.log(officeOptions)
    return (
        <div>
            <Form.Item name={`employees.${employeeIndex}.officeId`} label="Офис" required hasFeedback>
                <Select name={`employees.${employeeIndex}.officeId`}>
                    {
                        officeOptions.map(office => <Option value={office.value}>{office.label}</Option>)
                    }
                </Select>
            </Form.Item>
            <Form.Item name={`employees.${employeeIndex}.firstName`} label="Имя" required hasFeedback>
                <Input name={`employees.${employeeIndex}.firstName`}/>
            </Form.Item>
            <Form.Item name={`employees.${employeeIndex}.lastName`} label="Фамилия" required hasFeedback>
                <Input name={`employees.${employeeIndex}.lastName`}/>
            </Form.Item>
            <Form.Item
                name={`employees.${employeeIndex}.email`}
                label="Email"
                tooltip="На этот адрес придет письмо с данными для входа в систему."
                required
                hasFeedback
            >
                <Input name={`employees.${employeeIndex}.email`}/>
            </Form.Item>
            <Form.Item name={`employees.${employeeIndex}.phoneNumber`} label="Номер телефона" hasFeedback>
                <Input name={`employees.${employeeIndex}.phoneNumber`}/>
            </Form.Item>
        </div>
    )
}

export default EmployeeFields
