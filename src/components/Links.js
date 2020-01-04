import React, { Component } from "react";
import Modal from "react-modal";
import DevTo from "../images/dev-to.js";
import Email from "./email";
// logos/icons
import {
  IoMdClose,
  IoLogoGithub,
  AiOutlineMail,
  FaMediumM,
  FaLinkedin,
  FaCodepen,
} from "react-icons/all";

Modal.setAppElement("#root");

class Links extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      imgsrc:
        "https://avatars.mds.yandex.net/get-pdb/936467/d6e8f55f-22db-42cf-894d-4e1b29782040/orig",
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
        "http://gifimage.net/wp-content/uploads/2017/07/happy-dog-gif-5.gif",
    });
  }
  render() {
    return (
      <div className="flexRow">
        <ul style={{ listStyleType: "none", display: "contents" }}>
          <li className="item">
            <a href="https://github.com/2lach" rel="noopener">
              <IoLogoGithub className="svg" />
              <br />
              <span className="linkSpan">Github</span>
            </a>
          </li>

          <li className="item">
            <a href="https://www.linkedin.com/in/slachmann/" rel="noopener">
              <FaLinkedin />
              <br /> <span className="linkSpan">Linkedin</span>
            </a>
          </li>

          <li className="item">
            <a href="https://dev.to/2lach" rel="noopener" className="devTo">
              <DevTo className="devToSvg" />
              <br /> <span className="linkSpan">Dev.to</span>
            </a>
          </li>

          <li className="item">
            <a href="https://medium.com/@2lach" rel="noopener">
              <FaMediumM />
              <br /> <span className="linkSpan">Medium</span>
            </a>
          </li>

          <li className="item">
            <a href="https://codepen.io/2lach/" rel="noopener">
              <FaCodepen />
              <br /> <span className="linkSpan">Codepen</span>
            </a>
          </li>

          <li className="item contactItem">
            <a>
              <AiOutlineMail
                className="contactIcon"
                onClick={this.handleOpenModal}
              />
              <br />
              <span className="linkSpan">Contact</span>
              <Modal
                isOpen={this.state.showModal}
                style={{
                  overlay: { backgroundColor: "rgba(32, 31, 31, 0.6)" },
                }}
              >
                <IoMdClose
                  onClick={this.handleCloseModal}
                  style={{ float: "right" }}
                />
                <div>
                  <Email />
                </div>
              </Modal>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Links;
