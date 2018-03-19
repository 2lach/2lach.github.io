import React, { Component } from 'react';

class Footer extends Component {
    render() {
        const date = new Date();
        var year = date.getFullYear();
        return (
            <div>
                <footer>
                    <ul className="footer-bar">
                    <li className="footer_item"><a href="#">&copy; Stefan Lachmann <span>{year}</span></a></li>
                    <li className="footer_item"><a href="#">github</a></li>
                    <li className="footer_item"><a href="#">linkedin</a></li>
                    <li className="footer_item"><a href="#">mail</a></li>
                    </ul>
                </footer>
            </div>
        );
    }

}
export default Footer;