import React from 'react'
import {Button, Descriptions, List, Space, Typography} from 'antd'
import {PlusSquareOutlined} from '@ant-design/icons'
import noLogo from './../../../../assets/images/no_logo.png'
import styles from './CompaniesDatabases.module.scss'

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

    const {Text} = Typography

    return (
        <Space direction="vertical" size="small" style={{width: '100%'}}>
            <List>
                {
                    companies.map(company => <List.Item>
                        <Space direction="vertical" size="large" style={{width: '100%', padding: '20px'}}>
                            <div className={styles.header}>
                                <div className={styles.company}>
                                    <div className={styles.logoContainer}>
                                        <img src={noLogo} alt="no logo" width="44px" height="44px"/>
                                    </div>
                                    <div className={styles.companyInfo}>
                                        <Text strong>{company.name}</Text>
                                        <Text
                                            type="secondary">{'Работает с нами с ' + company.createdAt.toLocaleDateString()}</Text>
                                    </div>
                                </div>
                                <Button type="primary" icon={<PlusSquareOutlined/>}>Добавить</Button>
                            </div>
                            <Descriptions size="small" column={2} bordered>
                                <Descriptions.Item label="Город">{company.city}</Descriptions.Item>
                                <Descriptions.Item label="Email компании">{company.email}</Descriptions.Item>
                                <Descriptions.Item label="Контактный номер">{company.contactPhone}</Descriptions.Item>
                                <Descriptions.Item label="Планировок в базе">{company.layoutsCount}</Descriptions.Item>
                            </Descriptions>
                        </Space>
                    </List.Item>)
                }
            </List>
        </Space>
    )
}

export default CompaniesDatabases
