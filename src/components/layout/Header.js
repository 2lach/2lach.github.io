import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="nav header">
                    <ul className="nav-bar">
                        <li className="nav-bar_item"><a href="#">About</a></li>
                        <li className="nav-bar_item"><a href="#">Experience</a></li>
                        <li className="nav-bar_item"><a href="#">Project</a></li>
                        <li className="nav-bar_item"><a href="#">Skills</a></li>
                        <li className="nav-bar_item nav-bar_item--last"><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        );
    }

}
export default Header;