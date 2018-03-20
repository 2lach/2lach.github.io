import React from 'react';
import './style.css'

function FormattedDate(props) {
    return <div className="time">{props.date.toLocaleTimeString()}</div>;
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.mount = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.unmount)
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <FormattedDate date={this.state.date} />
            </div>
        );
    }
}
export default Clock;