import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import WonderForm from './components/WonderForm'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: 'Rafa'
        }
    }

    onUsernameChange = username => {
        this.setState({username})
    }

    onInputChange = (key, value) => {
        this.setState({[key]: value})
    }

    render() {
        const { username } = this.state
        const message = `Hi ${username}! To get started, edit <code>src/App.js</code> and save to reload.`

        return (
            <div className="App">
                <Header logo={logo} />
                <Intro message={message} />
                <WonderForm
                    onUsernameChange={this.onUsernameChange}
                    //onInputChange={this.onInputChange}
                />
            </div>
        );
    }
}

export default App;
