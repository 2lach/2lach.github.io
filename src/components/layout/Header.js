import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';


// TODO switch componentent onclick with react-router and delete contentCard component

const about = () => <span>ABOUT</span>;
const experience = () => <span>ex</span>;
const project = () => <span>Project</span>;
const skills = () => <div className="tabContent"></div>;
const contact = () => <div className="tabContent">Contact</div>;


class Header extends Component {
    
    render() {

        const { path } = this.props.match;

        return (

          <div>
                <nav className="nav header">
                    <ul className="nav-bar">
                        <li className="nav-bar_item f4 lh-copy"><Link to={`${path}`} className="link">About</Link></li>
                        <Link to={`${path}`} className="link"><li className="nav-bar_item f4 lh-copy"><a>Experience</a></li></Link>
                        <li className="nav-bar_item f4 lh-copy"><a href="/">Project</a></li>
                        <li className="nav-bar_item f4 lh-copy"><a href="/">Skills</a></li>
                        <Link to={`${path}/contact`} className="link">Contact</Link>
                    </ul>
                </nav>
                <div className="tabs">
                    <Switch>
                        <Route path={"/about"} exact component={about} />
                        <Route path={"/experience"} exact component={experience} />
                        <Route path={'/contact'} component={contact} />
                    </Switch>
                </div>
            </div>
        );
    }

}
export default Header;

