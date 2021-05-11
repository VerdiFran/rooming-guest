import React from 'react'
import {Form, Input, AutoComplete} from 'formik-antd'
import {Formik} from 'formik'
import {Button, Space} from 'antd'
import * as Yup from 'yup'

/**
 * Registration form for user
 * @returns {JSX.Element}
 * @constructor
 */
const UserForm = ({loading, cityOptions, setSearchTerm, handleSubmit}) => {
    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Слишком короткое имя.')
            .max(50, 'Слишком длинное имя.')
            .required('Это поле обязательно для заполнения.'),
        lastName: Yup.string()
            .min(2, 'Слишком короткая фамилия.')
            .max(50, 'Слишком длинная фамилия.')
            .required('Это поле обязательно для заполнения.'),
        email: Yup.string()
            .email('Некорректный email.')
            .required('Это поле обязательно для заполнения.'),
        phoneNumber: Yup.string()
            .min(3, 'Контактный номер не может иметь менее 3-х цифр.')
            .max(12, 'Контактный номер не может иметь более 12-ти цифр.')
            .matches(/\+?\d{3,12}/, 'Контактный номер может содержать только цифра и знак "+".')
            .required('Это поле обязательно для заполнения.'),
        city: Yup.string()
            .required('Это поле обязательно для заполнения.')
    })

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                city: ''
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => handleSubmit(values)}
        >
            {({
                  setFieldValue,
                  handleSubmit,
                  handleChange,
                  validateForm
              }) => (
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
                    <Space size="middle" direction="vertical">
                        <div>
                            <Button
                                type="primary"
                                loading={loading}
                                onClick={() => {
                                    validateForm()
                                    handleSubmit()
                                }}
                            >Зарегестрироваться</Button>
                        </div>
                    </Space>
                </Form>
            )}
        </Formik>
    )
}

export default UserForm
