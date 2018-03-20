import React, { Component } from 'react';
import './style.css';

class ContentCard extends Component {
    render() {
        return (
            <div>
                <article className="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 top10rem">
                        <div className="tc">
                            <img src="http://res.cloudinary.com/teamtailor/image/upload/c_limit,f_auto,q_80,w_3000/v1498636361/m40lde1kblane8fjxur9.jpg" className="br-100 h3 w3 dib" title="Photo of a kitty staring at you" />
                            <h1 className="f4">Stefan Lachmann</h1>
                            <hr className="mw3 bb bw1 b--black-10" />
                        </div>
                        <p className="lh-copy measure center f6 black-70">
​                           Stefan är en frontend-utvecklare och webb-designer med bred bakgrund; 
                            från finansvärlden till show business. Elegant utförd responsiv design, 
                            välplanerad UX & UI och JavaScript i alla dess former är saker som 
                            Stefan går igång på.
                            När han inte arbetar så lyssnar han på och spelar musik, ser en bra film
                            med gott sällskap, är ute i naturen eller umgås med sin familj.
                        </p>
                </article>
            </div>
        )
    }
}
export default ContentCard;