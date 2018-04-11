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
        const { onChange } = this.props
        onChange(value)
        this.setState({inputValue: value})
    }

    render() {
        const { inputValue } = this.state

        return (
            <input type="text" onChange={this.onValueChange} value={inputValue} />
        )
    }
}

export default Input;