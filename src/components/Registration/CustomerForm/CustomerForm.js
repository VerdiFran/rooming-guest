import React from 'react'
import {Form, Input, AutoComplete} from 'formik-antd'
import {FieldArray, Formik} from 'formik'
import {Button, Card, List, message, Space, Typography} from 'antd'
import {CloseOutlined, PlusSquareOutlined} from '@ant-design/icons'
import EmployeeFields from './EmployeeFields/EmployeeFields'
import styles from './CustomerForm.module.scss'
import * as Yup from 'yup'
import InfoText from '../../common/InfoText/InfoText'

/**
 * Registration form for some customer
 * @returns {JSX.Element}
 * @constructor
 */
const CustomerForm = ({loading, cityOptions, setSearchTerm, registerCompany}) => {
    const {Title, Text} = Typography

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Слишком короткое название компании.')
            .max(80, 'Слишком длинное название компании.')
            .required('Это поле обязательно для заполнения.'),
        email: Yup.string().email('Некорректный email.').required('Это поле обязательно для заполнения.'),
        contactPhone: Yup.string()
            .min(3, 'Контактный номер не может иметь менее 3-х цифр.')
            .max(12, 'Контактный номер не может иметь более 12-ти цифр.')
            .matches(/\+?\d{3,12}/, 'Контактный номер может содержать только цифра и знак "+".')
            .required('Это поле обязательно для заполнения.'),
        employees: Yup.array()
            .of(Yup.object().shape({
                firstName: Yup.string()
                    .min(2, 'Слишком короткое имя.')
                    .max(50, 'Слишком длинное имя.')
                    .required('Это поле обязательно для заполнения.'),
                lastName: Yup.string()
                    .min(2, 'Слишком короткая фамилия.')
                    .max(50, 'Слишком длинная фамилия.')
                    .required('Это поле обязательно для заполнения.'),
                email: Yup.string().email('Некорректный email.').required('Это поле обязательно для заполнения.'),
                phoneNumber: Yup.string()
                    .min(3, 'Контактный номер не может иметь менее 3-х цифр.')
                    .max(12, 'Контактный номер не может иметь более 12-ти цифр.')
                    .matches(/\+?\d{3,12}/, 'Контактный номер может содержать только цифра и знак "+".')
            })),
        offices: Yup.array()
            .of(Yup.object().shape({
                city: Yup.string()
                    .min(2, 'Слишком короткое название города.')
                    .required('Это поле обязательно для заполнения.'),
                street: Yup.string()
                    .min(2, 'Слишком короткое название улицы.')
                    .required('Это поле обязательно для заполнения.'),
                house: Yup.string()
                    .min(1, 'Слишком короткий номер дома.')
                    .required('Это поле обязательно для заполнения.')
            }))
    })

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
                }],
                offices: [{
                    city: '',
                    street: '',
                    house: ''
                }]
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => registerCompany(values)}
        >
            {({
                  values,
                  handleSubmit,
                  handleChange,
                  setFieldValue,
                  validateForm
              }) => (
                <Form
                    layout="horizontal"
                    labelCol={{span: 6}}
                    wrapperCol={{span: 16}}
                >
                    <Form.Item
                        name="name"
                        label="Название компании"
                        required
                        hasFeedback
                    >
                        <Input
                            name="name"
                            onChange={handleChange}
                        />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email компании"
                        required
                        hasFeedback
                    >
                        <Input
                            name="email"
                            onChange={handleChange}
                        />
                    </Form.Item>
                    <Form.Item
                        name="contactPhone"
                        label="Контактный номер"
                        required
                        hasFeedback
                    >
                        <Input
                            name="contactPhone"
                            onChange={handleChange}
                        />
                    </Form.Item>
                    <FieldArray name="offices">

                        {
                            ({push, remove}) => <div>
                                <List
                                    className={styles.employeeList}
                                    grid={{gutter: 16, column: 4}}
                                    footer={<Button
                                        type="dashed"
                                        icon={<PlusSquareOutlined/>}
                                        onClick={() => push({
                                            city: '',
                                            street: '',
                                            house: ''
                                        })}
                                    >Добавить офис</Button>}>
                                    {
                                        values.offices.length > 0 && values.offices.map((office, index) => (
                                            <List.Item>
                                                <Card
                                                    hoverable
                                                    size="small"
                                                    title={`Офис ${index + 1}`}
                                                    extra={<Button
                                                        type="text"
                                                        icon={<CloseOutlined/>}
                                                        onClick={() => {
                                                            if (values.offices.length > 1) {
                                                                remove(index)
                                                            } else {
                                                                message
                                                                    .error('Чтобы зарегистрироваться в нашей системе, вашей компании необходимо иметь хотя бы один офис.')
                                                                    .then()
                                                            }
                                                        }}
                                                    />}
                                                >
                                                    <Space direction="horizontal" size="small">
                                                        <Form.Item
                                                            name={`offices.${index}.city`}
                                                            label="Город"
                                                            style={{width: '210px'}}
                                                            required
                                                            hasFeedback
                                                        >
                                                            <AutoComplete
                                                                name={`offices.${index}.city`}
                                                                options={cityOptions}
                                                                onChange={(value) => {
                                                                    setFieldValue(`offices.${index}.city`, value)
                                                                    setSearchTerm(value)
                                                                }}
                                                            />
                                                        </Form.Item>
                                                        <Form.Item
                                                            name={`offices.${index}.street`}
                                                            label="Улица"
                                                            required
                                                            hasFeedback
                                                        >
                                                            <Input name={`offices.${index}.street`}/>
                                                        </Form.Item>
                                                        <Form.Item
                                                            name={`offices.${index}.house`}
                                                            label="Дом"
                                                            required
                                                            hasFeedback
                                                        >
                                                            <Input name={`offices.${index}.house`}/>
                                                        </Form.Item>
                                                    </Space>
                                                </Card>
                                            </List.Item>
                                        ))
                                    }
                                </List>
                            </div>
                        }
                    </FieldArray>
                    <Space size="middle" direction="vertical">
                        <Title level={5} className={styles.centred}>Информация о сотрудниках</Title>
                        <InfoText>
                            <Text>
                                Укажите информацию о сотрудниках, которые будут
                                иметь доступ к системе. Вы должны указать хотя бы одного.
                            </Text>
                        </InfoText>
                        <FieldArray name="employees">
                            {({push, remove}) => (
                                <div>
                                    <List
                                        className={styles.employeeList}
                                        grid={{gutter: 16, column: 4}}
                                        footer={<Button
                                            type="dashed"
                                            icon={<PlusSquareOutlined/>}
                                            onClick={() => push({
                                                firstName: '',
                                                lastName: '',
                                                email: '',
                                                phoneNumber: ''
                                            })}
                                        >Добавить сотрудника</Button>}
                                    >
                                        {
                                            values.employees.length > 0 && values.employees.map((employee, index) =>
                                                <List.Item>
                                                    <Card
                                                        hoverable
                                                        size="small"
                                                        title={`Сотрудник ${index + 1}`}
                                                        extra={<Button
                                                            type="text"
                                                            icon={<CloseOutlined/>}
                                                            onClick={() => {
                                                                if (values.employees.length > 1) {
                                                                    remove(index)
                                                                } else {
                                                                    message
                                                                        .error('В вашей компании должен быть хотя бы один сотрудник.')
                                                                        .then()
                                                                }
                                                            }}
                                                        />}
                                                    >
                                                        <EmployeeFields employeeIndex={index}/>
                                                    </Card>
                                                </List.Item>
                                            )
                                        }
                                    </List>
                                </div>
                            )}
                        </FieldArray>
                        <div className={styles.registerButtonContainer}>
                            <Button
                                type="primary"
                                loading={loading}
                                onClick={() => {
                                    validateForm().then(errors => {
                                        console.log(errors)
                                    })
                                    handleSubmit()
                                }}
                            >Зарегистрировать компанию</Button>
                        </div>
                    </Space>
                </Form>
            )}
        </Formik>
    )
}

export default CustomerForm
