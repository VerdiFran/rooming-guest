import React from 'react'
import {Input, List, Space, Typography} from 'antd'
import CompanyHeader from './CompanyHeader/CompanyHeader'
import CompanyDescription from './CompanyDescription/CompanyDescription'
import InfoText from '../../../common/InfoText/InfoText'

/**
 * List of companies that have layouts databases
 * @returns {JSX.Element}
 * @constructor
 */
const CompaniesDatabases = ({formik, companies, loading, handleSearch}) => {
    const {Paragraph} = Typography

    return (
        <Space direction="vertical" size="small" style={{width: '100%', marginTop: '20px'}}>
            <InfoText>
                <div>
                    <Paragraph>Здесь вы можете выбрать и добавить компании, которым вы бы хотели послать
                               запрос на получение их баз планировок.</Paragraph>
                    <Paragraph>Этот шаг можно пропустить и позже выполнить его в Административной
                               панели.</Paragraph>
                </div>
            </InfoText>
            <Input.Search
                allowClear
                enterButton
                loading={loading}
                style={{marginTop: '20px'}}
                onSearch={(value) => handleSearch(value)}
            />
            <List>
                {
                    companies.map(company => <List.Item>
                        <Space direction="vertical" size="large" style={{width: '100%', padding: '20px'}}>
                            <CompanyHeader company={company} formik={formik}/>
                            <CompanyDescription company={company}/>
                        </Space>
                    </List.Item>)
                }
            </List>
        </Space>
    )
}

export default CompaniesDatabases
