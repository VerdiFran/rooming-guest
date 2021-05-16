import React from 'react'
import {Alert} from 'antd'

/**
 * Container for some information
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const InfoText = ({children}) => {
    return (
        <Alert
            type="info"
            message={children}
            style={{padding: '16px', backgroundColor: '#eeeeee'}}
        />
    )
}

export default InfoText
