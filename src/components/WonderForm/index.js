import React from 'react'
import PropTypes from 'prop-types'

import Input from './components/Input'

const WonderForm = props => {
    return (
        <div className="wonder-form">
            <Input onChange={props.onUsernameChange} />
        </div>
    )
}

export default WonderForm

WonderForm.propTypes = {
    onUsernameChange: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
}