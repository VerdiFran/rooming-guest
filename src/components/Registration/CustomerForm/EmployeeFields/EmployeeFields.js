import React from 'react'
import {Form, Input} from 'formik-antd'
import {Button, message} from 'antd'

/**
 * Set of fields for every employee
 * @param employeeIndex Index of every employee
 * @param employeesCount Count of all employees
 * @param remove Remove employee
 * @returns {JSX.Element}
 * @constructor
 */
const EmployeeFields = ({employeeIndex, employeesCount, remove}) => {
    return (
        <div>
            <div>{employeeIndex + 1}</div>
            <Form.Item name={`employees.${employeeIndex}.firstName`} label="Имя">
                <Input name={`employees.${employeeIndex}.firstName`}/>
            </Form.Item>
            <Form.Item name={`employees.${employeeIndex}.lastName`} label="Фамилия">
                <Input name={`employees.${employeeIndex}.lastName`}/>
            </Form.Item>
            <Form.Item name={`employees.${employeeIndex}.email`} label="Email">
                <Input name={`employees.${employeeIndex}.email`}/>
            </Form.Item>
            <Form.Item name={`employees.${employeeIndex}.phoneNumber`} label="Номер телефона">
                <Input name={`employees.${employeeIndex}.phoneNumber`}/>
            </Form.Item>
            <Button onClick={() => {
                if (employeesCount > 1) {
                    remove()
                } else {
                    message.error('В вашей компании должен быть хотя бы один сотрудник.')
                }
            }}>Удалить</Button>
        </div>
    )
}

export default EmployeeFields
