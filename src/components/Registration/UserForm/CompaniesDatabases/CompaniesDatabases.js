import React from 'react'
import {List, Space} from 'antd'
import CompanyHeader from './CompanyHeader/CompanyHeader'
import CompanyDescriptions from './CompantDescriptions/CompanyDescriptions'

/**
 * List of companies that have layouts databases
 * @returns {JSX.Element}
 * @constructor
 */
const CompaniesDatabases = () => {
    const companies = [
        {
            id: 0,
            name: 'ДомСтрой',
            email: 'domstroy@ya.ru',
            contactPhone: '+7 (391) 577-57-59',
            city: 'Красноярск',
            layoutsCount: 10,
            createdAt: new Date()
        },
        {
            id: 1,
            name: 'Красноярская Строительная Компания',
            email: 'petrova_anna@ksk.ru',
            contactPhone: '+7 (391) 803-63-21',
            city: 'Красноярск',
            layoutsCount: 59,
            createdAt: new Date()
        },
        {
            id: 2,
            name: 'ДомСтрой',
            email: 'domstroy@ya.ru',
            contactPhone: '+7 (391) 577-57-59',
            city: 'Красноярск',
            layoutsCount: 10,
            createdAt: new Date()
        },
        {
            id: 3,
            name: 'Красноярская Строительная Компания',
            email: 'petrova_anna@ksk.ru',
            contactPhone: '+7 (391) 803-63-21',
            city: 'Красноярск',
            layoutsCount: 59,
            createdAt: new Date()
        },
    ]

    return (
        <Space direction="vertical" size="small" style={{width: '100%'}}>
            <List>
                {
                    companies.map(company => <List.Item>
                        <Space direction="vertical" size="large" style={{width: '100%', padding: '20px'}}>
                            <CompanyHeader company={company}/>
                            <CompanyDescriptions company={company}/>
                        </Space>
                    </List.Item>)
                }
            </List>
        </Space>
    )
}

export default CompaniesDatabases
