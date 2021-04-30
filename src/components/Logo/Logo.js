import React from 'react'
import logo from '../../assets/images/building.png'
import styles from './Logo.module.scss'

/**
 * Logo component
 * @returns {JSX.Element}
 * @constructor
 */
const Logo = () => {
    return (
        <div className={styles.logoContainer}>
            <img alt="logo" src={logo} width="48px" height="48px"/>
            <span>Rooming</span>
        </div>
    )
}

export default Logo
