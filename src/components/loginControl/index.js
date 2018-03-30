import React, { Component } from 'react';

class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }


    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div className="tc">
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
                <div className="f4 fw6 db light-purple link dim lh-copy">The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.</div>
            </div>
        )
    }
}


function UserGreeting(props) {
    return <h3>Welcome Back</h3>
}
function GuestGreeting(props) {
    return <h3>Please sign up</h3>
}

function Greeting(props) {
    const isLoggedin = props.isLoggedIn;
    if (isLoggedin) {
        return <UserGreeting />
    }
    return <GuestGreeting />
}
function LoginButton(props) {
    return (<button onClick={props.onClick}> Login </button>)
}
function LogoutButton(props) {
    return (<button onClick={props.onClick}> Logout </button>)
}

export default LoginControl;