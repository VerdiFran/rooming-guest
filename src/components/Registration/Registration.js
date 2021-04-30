import React from 'react'
import {Tabs} from 'antd'
import CustomerForm from './CustomerForm/CustomerForm'

/**
 * Registration component contains two forms for registration a new user or company
 * @returns {JSX.Element}
 * @constructor
 */
const Registration = () => {
    const {TabPane} = Tabs

    return (
        <div>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Заказчик" key="1">
                    <CustomerForm/>
                </TabPane>
                <TabPane tab="Пользователь" key="2">

                </TabPane>
            </Tabs>
        </div>
    )
}

export default Registration
