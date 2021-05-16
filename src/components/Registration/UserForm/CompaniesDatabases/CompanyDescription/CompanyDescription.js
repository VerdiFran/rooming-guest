import React from 'react'
import {Card, Col, Descriptions, Row, Statistic} from 'antd'
import modelImg from './../../../../../assets/images/model.png'

/**
 * Description of company
 * @returns {JSX.Element}
 * @constructor
 */
const CompanyDescription = ({company}) => {
    return (
        <Row>
            <Col span={16}>
                <Descriptions size="small" column={1} bordered>
                    <Descriptions.Item label="Город">{company.city}</Descriptions.Item>
                    <Descriptions.Item label="Email компании">{company.email}</Descriptions.Item>
                    <Descriptions.Item label="Контактный номер">{company.contactPhone}</Descriptions.Item>
                </Descriptions>
            </Col>
            <Col span={7} offset={1}>
                <Card style={{height: '100%'}}>
                    <Statistic
                        title="Планировок в базе"
                        value={company.layoutsCount}
                        valueStyle={{fontSize: '26px'}}
                        prefix={<img
                            src={modelImg}
                            alt=""
                            width="20px"
                            height="20px"
                            style={{verticalAlign: 'baseline'}}/>}
                    />
                </Card>
            </Col>
        </Row>
    )
}

export default CompanyDescription
