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
// TODO build a checker to see if i clicked it away before  
function cookieCheck() {
    let checker = document.cookie.indexOf('Acookie=');
    let hasCookie;
    console.log(checker)

    var cookie = 'Acookie=';
    var cookies = cookie.split('; ');
    cookies.forEach(function(c){
        if(c.match(/Acookie=.+/)){
         console.log(true);
        }else{ 
            console.log(false);
        }

      });

    if (checker === -1) {
        hasCookie = true;
    }else{
        hasCookie =  false;
        }
    return hasCookie;
    }

    class Topbanner extends Component {
        constructor(props) {
            super(props);
            console.log(cookieCheck())
            // (cookieCheck)
            this.state = { showWarning: true };
            this.handleToogleClick = this.handleToogleClick.bind(this);
        }
        handleToogleClick() {
            this.setState(prevState => ({
                showWarning: !prevState.showWarning
            }));


            document.cookie = [
                'you', 1,
                'have', 2,
                'been', 3,
                'before', 4
            ]

          /*  function setCookie(exdays) {
                var d = new Date();
                d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                var expires = "expires=" + d.toUTCString();
                document.cookie = 'CookieN1ame' + "=" + 'Cookie-value' + ";" + `expires: ${expires}` + ";path=/";

                const aCookie = ['you', 1, 'have', 2, 'been', 3, 'before', 4, [1, 'says', 2, 'I']];
                document.cookie = 'Acookie' + '=' + aCookie;
            }
            setCookie(); */

        }

        render() {
            return (
                <div>
                    <Banner warn={this.state.showWarning} />
                    <div className="hideButton f4 fw6 db black link dim" onClick={this.handleToogleClick}>
                        {this.state.showWarning ? 'X' : ''}
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