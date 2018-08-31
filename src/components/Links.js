import React, { Component } from 'react';
import { IoLogoGithub, IoLogoLinkedin, IoLogoCodepen, IoMdContact } from 'react-icons/io';
import { FaMedium, FaTwitter } from 'react-icons/fa';

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
                    <li className="item"><a href="https://github.com/2lach" rel="noopener"><IoLogoGithub style={{width:40,height:50}} /><br /><span>Github</span> </a></li>
                    <li className="item"><a href="https://www.linkedin.com/in/slachmann/" rel="noopener"><IoLogoLinkedin style={{width:40,height:50}}/><br /> <span>Linkedin</span></a></li>
                    <li className="item"><a href="https://codepen.io/2lach/" rel="noopener"><IoLogoCodepen style={{width:40,height:50}}/><br /> <span>Codepen</span></a></li>
                    <li className="item"><a href="https://twitter.com/2lach__" rel="noopener"><FaTwitter style={{width:40,height:50}}/><br /> <span>Twitter</span></a></li>
                    <li className="item"><a href="https://medium.com/@2lach" rel="noopener"><FaMedium style={{width:40,height:50}}/><br /> <span>Medium</span></a></li>
                    <li className="item" onClick={this.openAlert}><a rel="noopener"><IoMdContact style={{width:40,height:50}}/><br /><span>Contact</span> </a></li>
                </ul>
            </div>
)
}
}
export default Links;
