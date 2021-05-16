import React from 'react'
import {Descriptions} from 'antd'

/**
 * Descriptions of company
 * @returns {JSX.Element}
 * @constructor
 */
const CompanyDescriptions = ({company}) => {
    return (
        <Descriptions size="small" column={2} bordered>
            <Descriptions.Item label="Город">{company.city}</Descriptions.Item>
            <Descriptions.Item label="Email компании">{company.email}</Descriptions.Item>
            <Descriptions.Item label="Контактный номер">{company.contactPhone}</Descriptions.Item>
            <Descriptions.Item label="Планировок в базе">{company.layoutsCount}</Descriptions.Item>
        </Descriptions>
    )
}

export default CompanyDescriptions
