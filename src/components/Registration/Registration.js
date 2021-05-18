import React, {useState} from 'react'
import {Tabs} from 'antd'
import styles from './Registration.module.scss'
import CustomerFormContainer from './CustomerForm/CustomerFormContainer'
import RegistrationSuccess from './RegistrationSuccess/RegistrationSuccess'
import UserFormContainer from './UserForm/UserFormContainer'

/**
 * Registration component contains two forms for registration a new user or company
 * @returns {JSX.Element}
 * @constructor
 */
const Registration = () => {
    const {TabPane} = Tabs

    const [didRegistered, setDidRegistered] = useState(false)

    if (didRegistered) {
        return <RegistrationSuccess/>
    }

    const completeRegistration = () => setDidRegistered(true)

    return (
        <div className={styles.formsContainer}>
            <Tabs
                type="card"
                size="large"
                defaultActiveKey="1"
                className={styles.tabsContainer}
                centered
            >
                <TabPane tab="Заказчик" key="1">
                    <CustomerFormContainer completeRegistration={completeRegistration}/>
                </TabPane>
                <TabPane tab="Пользователь" key="2">
                    <UserFormContainer/>
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Registration
