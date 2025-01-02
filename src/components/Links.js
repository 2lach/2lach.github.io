import { AiFillBook, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import React, { Component } from "react";

import Cv from "./Cv";
import { IoMdClose } from "react-icons/io";
import Modal from "react-modal";
import { TiDocumentText } from "react-icons/ti";

Modal.setAppElement("#root");

class Links extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      imgsrc:
        "https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?w=1200&ssl=1",
    };
  }

  // Open the modal
  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  // Close the modal
  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  // Unused method, can be removed
  changeSource = () => {
    this.setState({
      imgsrc:
        "https://gifimage.net/wp-content/uploads/2017/07/happy-dog-gif-5.gif",
    });
  };

  // Open the default email client with a pre-filled email
  openMail = () => {
    const emailAddress = "mailto:stefanlachmann@hotmail.com";
    const subject = "subject=Hey Stefan, My name is: ";
    const mailto = `${emailAddress}?${subject}`;
    try {
      if (window) {
        window.location.assign(mailto);
      } else {
        console.error("Oh snap, you don't have a window");
      }
    } catch (error) {
      console.error(
        `Well, that didn't work, but I swear it's not me, it's you ;)`
      );
    }
  };

  render() {
    return (
      <ul className='flexRow linkList'>
        <li className='item'>
          <a
            href='https://github.com/2lach'
            rel='noopener noreferrer'
            target='_blank'
          >
            <FaGithub className='svg' />
            <div className='linkSpan'>Github</div>
          </a>
        </li>
        <li className='item'>
          <a
            href='https://www.linkedin.com/in/slachmann/'
            rel='noopener noreferrer'
            target='_blank'
          >
            <FaLinkedin />
            <div className='linkSpan'>Linkedin</div>
          </a>
        </li>
        <li className='item'>
          <a
            href='https://books.2lach.com'
            rel='noopener noreferrer'
            target='_blank'
          >
            <AiFillBook/>
            <div className='linkSpan'>Books</div>
          </a>
        </li>
        {/* <li className='item'>
          <a
            href='https://codepen.io/2lach/'
            rel='noopener noreferrer'
            target='_blank'
          >
            <FaCodepen />
            <div className='linkSpan'>Codepen</div>
          </a>
        </li> */}
        <li className='item contactItem' onClick={this.openMail}>
          <a href='/'>
            <AiOutlineMail className='contactIcon' />
            <div className='linkSpan'>Contact</div>
          </a>
        </li>
        <li className='item contactItem'>
          <a href='/'>
            <TiDocumentText
              className='contactIcon'
              onClick={this.handleOpenModal}
            />
            <div className='linkSpan'>Cv</div>
          </a>
          <Modal
            isOpen={this.state.showModal}
            style={{ overlay: { backgroundColor: '#004d80' } }}
          >
            <IoMdClose
              onClick={this.handleCloseModal}
              style={{ float: 'right', cursor: 'pointer' }}
            />
            <div>
              <Cv />
            </div>
          </Modal>
        </li>
      </ul>
    );
  }
}

export default Links;
