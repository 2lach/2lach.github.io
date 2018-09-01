import React, { Component } from 'react';
import { IoLogoGithub, IoLogoLinkedin, IoLogoCodepen, IoMdContact, IoMdClose } from 'react-icons/io';
import { FaMedium, FaTwitter } from 'react-icons/fa';
import Modal from 'react-modal';

Modal.setAppElement('#root');

class Links extends Component{
    constructor(){
        super()
        this.state = {
          showModal: false,
          imgsrc: 'https://avatars.mds.yandex.net/get-pdb/936467/d6e8f55f-22db-42cf-894d-4e1b29782040/orig',
        }
        this.handleOpenModal = this.handleOpenModal.bind(this)
        this.handleCloseModal = this.handleCloseModal.bind(this)
        this.changeSource = this.changeSource.bind(this)
    }


    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }
    changeSource(){
      this.setState({ imgsrc: 'http://gifimage.net/wp-content/uploads/2017/07/happy-dog-gif-5.gif' })
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
                    <li className="item">
                      <a>
                        <IoMdContact onClick={this.handleOpenModal} style={{width:40,height:50}}/><br /><span>Contact</span>
                        <Modal 
                           isOpen={this.state.showModal}
                           style={{
                              overlay: {
                                backgroundColor: 'rgba(32, 31, 31, 0.6)'
                              },
                              content: {
                                position: 'absolute',
                                color: '#990099',
                                textAlign: 'center',
                                top:' 20%',
                                left: 'calc(50% - 25vw)',
                                height: 'auto',
                                width: '50vw'
                              }
                            }}
                        >
                          <IoMdClose onClick={this.handleCloseModal} style={{ float:'right'}}/>
                          <h2><a href="mailto:stefanlachmann@hotmail.com?subject=Heyo">Click here to contact me</a></h2>
                          <div><p onClick={this.changeSource} style={{textAlign:'center'}}><img src={this.state.imgsrc} style={{width:'auto', height: 'auto'}} /></p></div>
                        </Modal>
                      </a>
                    </li>
                </ul>
            </div>
)
}
}
export default Links;

// 
