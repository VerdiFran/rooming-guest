import React from 'react'
import {Form, Input, AutoComplete} from 'formik-antd'

/**
 * Form for user's personal information
 * @returns {JSX.Element}
 * @constructor
 */
const PersonalInformation = ({formik, cityOptions, setSearchTerm}) => {
    const {handleChange, setFieldValue} = formik

    return (
        <Form
            layout="horizontal"
            labelCol={{span: 7}}
            wrapperCol={{span: 15}}
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
                tooltip="Этот адрес будет использоваться для входа в систему."
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
            <Form.Item
                name="password"
                label="Пароль"
                required
                hasFeedback
            >
                <Input
                    name="password"
                    onChange={handleChange}
                />
            </Form.Item>
            <Form.Item
                name="passwordConfirmation"
                label="Подтверждение пароля"
                tooltip="Введите пароль еще раз."
                required
                hasFeedback
            >
                <Input
                    name="passwordConfirmation"
                    onChange={handleChange}
                />
            </Form.Item>
        </Form>
    )
}

export default PersonalInformation
