import React, { Component } from "react";
import Modal from "react-modal";
import Cv from "./Cv";
// logos/icons
import {
  IoMdClose,
  IoLogoGithub,
  AiOutlineMail,
  FaLinkedin,
  FaCodepen,
  TiDocumentText
} from "react-icons/all";

Modal.setAppElement("#root");

class Links extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      imgsrc:
        "https://avatars.mds.yandex.net/get-pdb/936467/d6e8f55f-22db-42cf-894d-4e1b29782040/orig"
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.changeSource = this.changeSource.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  changeSource() {
    this.setState({
      imgsrc:
        "https://gifimage.net/wp-content/uploads/2017/07/happy-dog-gif-5.gif"
    });
  }

  openMail = () => {
    const emailAdress = "mailto:stefanlachmann@hotmail.com";
    const subject = "subject=Hey Stefan, My name is: ";
    const mailto = `${emailAdress}?${subject}`;
    if (window) {
      //* open users email client
      //* window.open(mailto, "_self"); ->
      //* other ways to open mailto
      window.location.assign(mailto);
      // window.location = mailto;
    } else {
      // eslint-disable-next-line no-console
      console.error("oh snap you dont have a window");
      alert(`well that didn't work but i swear it's not me, it's you ;)`);
    }
  };

  render() {
    return (
      <div className="flexRow">
        <ul style={{ listStyleType: "none", display: "contents" }}>
          <li className="item">
            <a
              href="https://github.com/2lach"
              rel="noopener noreferrer"
              target="_blank"
            >
              <IoLogoGithub className="svg" />
              <br />
              <span className="linkSpan">Github</span>
            </a>
          </li>

          <li className="item">
            <a
              href="https://www.linkedin.com/in/slachmann/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin />
              <br /> <span className="linkSpan">Linkedin</span>
            </a>
          </li>
          <li className="item">
            <a
              href="https://codepen.io/2lach/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaCodepen />
              <br /> <span className="linkSpan">Codepen</span>
            </a>
          </li>

          <li className="item contactItem" onClick={this.openMail}>
            <b>
              <AiOutlineMail className="contactIcon" />
              <br />
              <span className="linkSpan">Contact</span>
            </b>
          </li>
          <li className="item contactItem">
            <b>
              <TiDocumentText
                className="contactIcon"
                onClick={this.handleOpenModal}
              />
              <br />
              <span className="linkSpan">Cv</span>
              <Modal
                isOpen={this.state.showModal}
                style={{
                  overlay: { backgroundColor: "rgba(32, 31, 31, 0.6)" }
                }}
              >
                <IoMdClose
                  onClick={this.handleCloseModal}
                  style={{ float: "right", cursor: "pointer" }}
                />
                <div>
                  <Cv />
                </div>
              </Modal>
            </b>
          </li>
        </ul>
      </div>
    );
  }
}
export default Links;
