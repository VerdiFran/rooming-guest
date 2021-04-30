import React from 'react'
import {Form, Input} from 'formik-antd'
import {FieldArray, Formik} from 'formik'
import {Button} from 'antd'
import EmployeeFields from './EmployeeFields/EmployeeFields'

/**
 * Registration form for some customer
 * @returns {JSX.Element}
 * @constructor
 */
const CustomerForm = () => {
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                contactPhone: '',
                employees: [{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: ''
                }]
            }}
            onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2))
            }}
        >
            {({values, handleSubmit, handleChange}) => (
                <Form>
                    <Form.Item name="name" label="Название компании">
                        <Input
                            name="name"
                            onChange={handleChange}
                        />
                    </Form.Item>
                    <Form.Item name="email" label="Email компании">
                        <Input
                            name="email"
                            onChange={handleChange}
                        />
                    </Form.Item>
                    <Form.Item name="contactPhone" label="Контактный номер">
                        <Input
                            name="contactPhone"
                            onChange={handleChange}
                        />
                    </Form.Item>
                    <FieldArray name="employees">
                        {({push, remove}) => (
                            <div>
                                {
                                    values.employees.length && values.employees.map((employee, index) =>
                                       <EmployeeFields
                                           employeeIndex={index}
                                           employeesCount={values.employees.length}
                                           remove={() => remove(index)}
                                       />
                                    )
                                }
                                <Button onClick={() => push({
                                    firstName: '',
                                    lastName: '',
                                    email: '',
                                    phoneNumber: ''
                                })}>Добавить сотрудника</Button>
                            </div>
                        )}
                    </FieldArray>
                    <Button onClick={handleSubmit}>Зарегестрировать компанию</Button>
                </Form>
            )}
        </Formik>
    )
}

export default CustomerForm
