import React, { Component } from 'react';
import { IoLogoGithub, IoLogoLinkedin, IoLogoCodepen, IoLogoTwitter, IoMdContact } from 'react-icons/io';
import { FaMedium } from 'react-icons/fa';

class Links extends Component{
    constructor(){
        super()
        this.openAlert = this.openAlert.bind(this);
    }
    openAlert(){
        alert('StefanLachmann at hotmail . com')
    }
    render(){
    return(
            <div className="flexRow">
                <ul style={{listStyleType: 'none', display: 'contents'}}>
                    <li className="item"><a href="https://github.com/2lach" rel="noopener"><IoLogoGithub style={{width:40,height:50}} /><br /> Github</a></li>
                    <li className="item"><a href="https://www.linkedin.com/in/slachmann/" rel="noopener"><IoLogoLinkedin style={{width:40,height:50}}/><br /> Linkedin</a></li>
                    <li className="item"><a href="https://codepen.io/2lach/" rel="noopener"><IoLogoCodepen style={{width:40,height:50}}/><br /> Codepen</a></li>
                    <li className="item"><a href="https://twitter.com/2lach__" rel="noopener"><IoLogoTwitter style={{width:40,height:50}}/><br /> Twitter</a></li>
                    <li className="item"><a href="https://medium.com/@2lach" rel="noopener"><FaMedium style={{width:40,height:50}}/><br /> Medium</a></li>
                    <li className="item" onClick={this.openAlert}><a rel="noopener"><IoMdContact style={{width:40,height:50}}/><br /> Contact</a></li>
                </ul>
            </div>
)
}
}
export default Links;
