import React from 'react'
import {Button, message, Space, Steps} from 'antd'
import {FormikProvider} from 'formik'

/**
 * User registration form
 * @returns {JSX.Element}
 * @constructor
 */
const UserForm = ({steps, currentStep, formik, loading, setCurrentStep}) => {
    const {Step} = Steps

    const {validateForm, handleSubmit} = formik

    return (
        <FormikProvider value={formik}>
            <Space direction="vertical" size="middle" style={{width: '100%'}}>
                <Steps current={currentStep}>
                    {steps.map(step => <Step title={step.title}/>)}
                </Steps>
                {
                    steps[currentStep].content
                }
                <Space direction="horizontal" size="small">
                    {
                        currentStep > 0
                        && <Button onClick={() => setCurrentStep(currentStep - 1)}>Назад</Button>
                    }
                    {
                        currentStep < steps.length - 1
                        && <Button onClick={() => {
                            validateForm().then(errors => {
                                const hasErrors = Object.entries(errors).length > 0

                                if (!hasErrors) {
                                    setCurrentStep(currentStep + 1)
                                } else {
                                    message.error('Заполните все обязательные поля формы.').then()
                                }
                            })
                        }}>Далее</Button>
                    }
                    {
                        currentStep === steps.length - 1
                        && <Button
                            type="primary"
                            loading={loading}
                            onClick={() => {
                                validateForm().then()
                                handleSubmit()
                            }}
                        >Зарегестрироваться</Button>
                    }
                </Space>
            </Space>
        </FormikProvider>
    )
}

export default UserForm
