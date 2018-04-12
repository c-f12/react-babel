import React from 'react'
import PropTypes from 'prop-types'

import Input from './components/Input'
import Radio from './components/Radio'

const WonderForm = props => {
    return (
        <div className="wonder-form">
            <Input type="text" name="name" onChange={props.onInputChange} />
            <Input type="text" name="lastname" onChange={props.onInputChange} />
            <Input type="text" name="username" onChange={props.onInputChange} />
            <Input type="number" name="age" onChange={props.onInputChange} />
            <div>
            <Radio
                name="gender" 
                values={['man', 'woman', 'other']} 
                defaultValue='other' 
                onInputChange={props.onInputChange}/>
            <Radio
                name="color"
                values={['red', 'blue', 'yellow']} 
                defaultValue='other' 
                onInputChange={props.onInputChange}/>
            </div>
        </div>
    )
}

export default WonderForm

WonderForm.propTypes = {
    // onUsernameChange: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
}