import React, { Component } from 'react';

class Intro extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: props.message
        }
    }

    render() {
        const { message } = this.state

        return (
            // <p className="App-intro" dangerouslySetInnerHTML={{ __html: message }} />
            <p className="App-intro">
                {message}
            </p>
        );
    }
}

export default Intro;