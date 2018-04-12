import React from 'react'

class Input extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: ''
        }
    }

    onValueChange = e => {
        let value = e.target.value
        const { onChange, type, name } = this.props
        
        if(type === 'number') {
            onChange('age', value)
        }
        else {
            onChange(name, value)
        }
        this.setState({inputValue: value})
    }

    render() {
        const { inputValue } = this.state

        return (
            <input 
            type={this.props.type} 
            onChange={this.onValueChange}
            name={this.props.name} 
            value={inputValue} />
        )
    }
}

export default Input;