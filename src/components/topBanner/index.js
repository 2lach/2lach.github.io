import React, { Component } from 'react';
import './style.css';

function Banner(props) {
    if (!props.warn) {
        return null;
    }
    return (
        <div className="cookieInfo">
            I'm not collecting any cookie or user info so enjoy it!
    </div>
    );
}

class Topbanner extends Component {
    constructor(props) {
        super(props);
        this.state = { showWarning: true };
        this.handleToogleClick = this.handleToogleClick.bind(this);
    }
    handleToogleClick(){
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }

    render() {
        return (
            <div>
            <Banner warn={this.state.showWarning} />
            <div className="hideButton f4 fw6 db black link dim" onClick={this.handleToogleClick}>
                {this.state.showWarning ? 'X': ''}
            </div>
            </div>
        )
    }
}
export default Topbanner;


/*
Preventing Component from Rendering
In rare cases you might want a component to hide itself 
even though it was rendered by another component.
 To do this return null instead of its render output.

In the example, the <WarningBanner /> 
is rendered depending on the value of the prop called warn. 
If the value of the prop is false, then the component does not render


Returning null from a component’s render method does not affect the firing 
of the component’s lifecycle methods. For instance, componentWillUpdate 
and componentDidUpdate will still be called.


*/