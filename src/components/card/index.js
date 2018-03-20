import React, { Component } from 'react';
import './styles.css';

class Card extends Component {
    render() {

        return (
            <div>
                <div className="flip3D">
                    <div className="back">Box 1 - Back</div>
                    <div className="front">Box 1 - Front</div>
                </div>
            </div>
        )
    }

}
export default Card;