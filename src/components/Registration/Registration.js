import React from 'react'
import {Tabs} from 'antd'
import styles from './Registration.module.scss'
import CustomerFormContainer from './CustomerForm/CustomerFormContainer'

/**
 * Registration component contains two forms for registration a new user or company
 * @returns {JSX.Element}
 * @constructor
 */
const Registration = () => {
    const {TabPane} = Tabs

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
                    <CustomerFormContainer/>
                </TabPane>
                <TabPane tab="Пользователь" key="2">

                </TabPane>
            </Tabs>
        </div>
    )
}

export default Registration
