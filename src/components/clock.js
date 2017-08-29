import React, { Component } from 'react';


class Clock extends Component {
    constructor (props) {
        super(props);

        this.state = {date: new Date().toLocaleTimeString()};
    }

    componentDidMount () {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    }

    componentWillUnmount () {
        clearInterval(this.timerID);
    }

    tick () {
        this.setState({
            date: new Date().toLocaleTimeString()
        });
    }

    render () {
        return <span>{ this.state.date }</span>
    }
}

export default Clock;
