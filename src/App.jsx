import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import WonderForm from './components/WonderForm'

// El estado se define en el constructor:
class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            lastname: '',
            username: '',
            age: '',
            gender: '',
            color:''
        }
    }

    onInputChange = (key, value) => {
        this.setState({[key]: value})
    }

    isOld = () => {
        const {age} = this.state
        return age > 28
    }

    render() {
        const { name, lastname, username, age, gender, color } = this.state
        const message = `Hi ${name} ${lastname}!
        Your username is ${username}, you're ${age}.
        Eres ${gender}
        Tu color ${color}`

        return (
            <div className="App">
                <Header logo={logo} />
                <Intro message={message} />
                {this.isOld() && <p>Eres viejo</p>}
                <WonderForm
                    //onUsernameChange={this.onUsernameChange}
                    onInputChange={this.onInputChange}
                />
            </div>
        );
    }
}

export default App;
