import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="nav header">
                    <ul className="nav-bar">
                        <li className="nav-bar_item f4 lh-copy"><a rel="noopener noreferrer" href="/">About</a></li>
                        <li className="nav-bar_item f4 lh-copy"><a>Experience</a></li>
                        <li className="nav-bar_item f4 lh-copy"><a href="/">Project</a></li>
                        <li className="nav-bar_item f4 lh-copy"><a href="/">Skills</a></li>
                        <li className="nav-bar_item f4 lh-copy nav-bar_item--last"><a>Contact</a></li>
                    </ul>
                </nav>
            </div>
        );
    }

}
export default Header;