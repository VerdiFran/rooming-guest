import React from 'react'
import {Form, Input, AutoComplete} from 'formik-antd'
import {FormikProvider} from 'formik'

/**
 * Registration form for user
 * @returns {JSX.Element}
 * @constructor
 */
const UserForm = ({formik, cityOptions, setSearchTerm}) => {
    const {handleChange, setFieldValue} = formik

    return (
        <FormikProvider value={formik}>
            <Form
                layout="horizontal"
                labelCol={{span: 6}}
                wrapperCol={{span: 16}}
            >
                <Form.Item
                    name="firstName"
                    label="Имя"
                    required
                    hasFeedback
                >
                    <Input
                        name="firstName"
                        onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item
                    name="lastName"
                    label="Фамилия"
                    required
                    hasFeedback
                >
                    <Input
                        name="lastName"
                        onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    tooltip="На этот адрес придет письмо с данными для входа в систему."
                    required
                    hasFeedback
                >
                    <Input
                        name="email"
                        onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item
                    name="phoneNumber"
                    label="Контактный номер"
                    required
                    hasFeedback
                >
                    <Input
                        name="phoneNumber"
                        onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item
                    name="city"
                    label="Город"
                    tooltip="Мы будем предлагать вам планировки в вашем городе."
                    required
                    hasFeedback
                >
                    <AutoComplete
                        name="city"
                        options={cityOptions}
                        onChange={(value) => {
                            setFieldValue('city', value)
                            setSearchTerm(value)
                        }}
                    />
                </Form.Item>
            </Form>
        </FormikProvider>
    )
}

export default UserForm
