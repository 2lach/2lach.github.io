import React, { Component } from 'react';
import {Link, BrowserRouter} from 'react-router-dom';


// TODO switch componentent onclick with react-router and delete contentCard component
class Header extends Component {
    render() {
        return (
            <div>
                <nav className="nav header">
                    <ul className="nav-bar">
                        <li className="nav-bar_item f4 lh-copy"><a href="/">About</a></li>
                        <li className="nav-bar_item f4 lh-copy"><a>Experience</a></li>
                        <li className="nav-bar_item f4 lh-copy"><a href="/">Project</a></li>
                        <li className="nav-bar_item f4 lh-copy"><a href="/">Skills</a></li>
                        <li className="nav-bar_item f4 lh-copy nav-bar_item--last"><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        );
    }

}
export default Header;