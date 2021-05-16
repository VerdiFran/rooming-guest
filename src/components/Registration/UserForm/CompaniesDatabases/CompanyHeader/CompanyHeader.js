import React from 'react'
import {Button, Typography} from 'antd'
import {PlusSquareOutlined} from '@ant-design/icons'
import noLogo from './../../../../../assets/images/no_logo.png'
import styles from './CompanyHeader.module.scss'

/**
 * Header of company description
 * @returns {JSX.Element}
 * @constructor
 */
const CompanyHeader = ({company}) => {
    const {Text} = Typography

    return (
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
    )
}

export default CompanyHeader
