import React, { Component } from 'react';
import './style.css';

class ContentCard extends Component {
    render() {
        return (
            <div>
                <article>
                    <div>
                        <div className="tc">
                            <img src="http://res.cloudinary.com/teamtailor/image/upload/c_limit,f_auto,q_80,w_3000/v1498636361/m40lde1kblane8fjxur9.jpg" className="br-100 h3 w3 dib" alt="" title="Photo of a kitty staring at you" />
                            <h1 className="f4">Stefan Lachmann</h1>
                            <hr className="mw3 bb bw1 b--black-10" />
                        </div>
                        <p className="lh-copy measure center f6 black-9">
                            Stefan is a front end developer and web designer with a broad background.
                            He have worked with from the financial world to showbusiness.
                        <br />
                            When he is not working, he is listening and playing music, watching a good movie
                            with good company, is out in nature or hang out with his family.
                        </p>
                    </div>
                </article>
            </div>
        )
    }
}
export default ContentCard;