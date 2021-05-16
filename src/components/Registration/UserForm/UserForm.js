import React from 'react'
import {Button, Space, Steps} from 'antd'

/**
 * User registration form
 * @returns {JSX.Element}
 * @constructor
 */
const UserForm = ({steps, currentStep, formik, loading, setCurrentStep}) => {
    const {Step} = Steps

    return (
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
                    && <Button onClick={() => setCurrentStep(currentStep + 1)}>Далее</Button>
                }
                {
                    currentStep === steps.length - 1
                    && <Button
                        type="primary"
                        loading={loading}
                        onClick={() => {
                            formik.validateForm().then()
                            formik.handleSubmit()
                        }}
                    >Зарегестрироваться</Button>
                }
            </Space>
        </Space>
    )
}

export default UserForm
