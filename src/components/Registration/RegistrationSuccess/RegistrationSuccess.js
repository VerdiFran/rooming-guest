import React from 'react'
import {Button, Result} from 'antd'

/**
 * Result with successful status after registration a company
 * @returns {JSX.Element}
 * @constructor
 */
const RegistrationSuccess = () => {
    return (
        <Result
            status="success"
            title="Вы успешно зарегистрировали компанию!"
            subTitle="Вы можете перейти в Административную панель, но дождитесь письма с данными для входа на вашу электронную почту."
            extra={[
                <Button type="primary" onClick={() => window.open('http://176.119.158.143:3030/')}>
                    В Административную панель
                </Button>,
            ]}
        />
    )
}

export default RegistrationSuccess
