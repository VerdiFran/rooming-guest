import React from 'react'
import {Form, Input} from 'formik-antd'
import {FieldArray, Formik} from 'formik'
import {Button, Card, List, message, Space, Typography} from 'antd'
import {CloseOutlined, PlusSquareOutlined} from '@ant-design/icons'
import EmployeeFields from './EmployeeFields/EmployeeFields'
import styles from './CustomerForm.module.scss'

/**
 * Registration form for some customer
 * @returns {JSX.Element}
 * @constructor
 */
const CustomerForm = () => {
    const {Title, Text} = Typography

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
                <Form
                    layout="horizontal"
                    labelCol={{span: 6}}
                    wrapperCol={{span: 16}}
                >
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
                    <Space size="middle" direction="vertical">
                        <Title level={5} className={styles.centred}>Информация о сотрудниках</Title>
                        <div className={styles.simpleText}>
                            <Text>
                                Укажите информацию о сотрудниках, которые будут
                                иметь доступ к системе. Вы должны указать хотя бы одного.
                            </Text>
                        </div>
                        <FieldArray name="employees">
                            {({push, remove}) => (
                                <div>
                                    <List
                                        className={styles.employeeList}
                                        grid={{gutter: 16, column: 4}}
                                        footer={<Button
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
                                            values.employees.length && values.employees.map((employee, index) =>
                                                <List.Item>
                                                    <Card
                                                        hoverable
                                                        size="small"
                                                        className={styles.employeeCard}
                                                        title={`Сотрудник ${index + 1}`}
                                                        extra={<Button
                                                            type="text"
                                                            icon={<CloseOutlined/>}
                                                            onClick={() => {
                                                                if (values.employees.length > 1) {
                                                                    remove()
                                                                } else {
                                                                    message.error('В вашей компании должен быть хотя бы один сотрудник.')
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
                            <Button type="primary" onClick={handleSubmit}>Зарегестрировать компанию</Button>
                        </div>
                    </Space>
                </Form>
            )}
        </Formik>
    )
}

export default CustomerForm
