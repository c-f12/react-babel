import React from 'react'

class Radio extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            values: props.values,
            activeValue: props.defaultValue
        }
    }

    onValueChange = e => {
        const value = e.target.value
        this.setState({
            activeValue: value
        })
        this.props.onInputChange(this.props.name, value)
    }

    render(){
        const { values, activeValue } = this.state
        const { name } = this.props

        return(
            <div>
                {values.map((value, i) => {
                    return (
                        <span key = {i}>
                            <label htmlFor= "">{value}</label>
                            <input
                                name = {name}
                                type = "radio"
                                value = {value}
                                checked = {value === activeValue}
                                onChange = {this.onValueChange}
                            />
                        </span>
                    )
                })}
            </div>
        )
    }
}   

export default Radio;