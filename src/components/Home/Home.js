import React from 'react'
import {NavLink} from 'react-router-dom'
import {TO_REGISTRATION} from '../../routes'

/**
 * Home component with information about our project
 * @returns {JSX.Element}
 * @constructor
 */
const Home = () => {
    return (
        <div>
            <NavLink to={TO_REGISTRATION}>
                регистрация
            </NavLink>
        </div>
    )
}

export default Home
