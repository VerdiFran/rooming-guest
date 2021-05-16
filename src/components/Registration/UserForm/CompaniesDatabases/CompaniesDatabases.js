import React from 'react'
import {List, Space, Typography} from 'antd'
import CompanyHeader from './CompanyHeader/CompanyHeader'
import CompanyDescriptions from './CompantDescriptions/CompanyDescriptions'
import InfoText from '../../../common/InfoText/InfoText'

/**
 * List of companies that have layouts databases
 * @returns {JSX.Element}
 * @constructor
 */
const CompaniesDatabases = ({formik}) => {
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

    const {Paragraph} = Typography

    return (
        <Space direction="vertical" size="small" style={{width: '100%', marginTop: '30px'}}>
            <InfoText>
                <div>
                    <Paragraph>Здесь вы можете выбрать и добавить компании, которым вы бы хотели послать
                               запрос на получение их баз планировок.</Paragraph>
                    <Paragraph>Этот шаг можно пропустить и позже выполнить его в Административной
                               панели.</Paragraph>
                </div>
            </InfoText>
            <List>
                {
                    companies.map(company => <List.Item>
                        <Space direction="vertical" size="large" style={{width: '100%', padding: '20px'}}>
                            <CompanyHeader company={company} formik={formik}/>
                            <CompanyDescriptions company={company}/>
                        </Space>
                    </List.Item>)
                }
            </List>
        </Space>
    )
}

export default CompaniesDatabases
