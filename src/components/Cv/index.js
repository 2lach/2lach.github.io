import "./style.css";

import React from "react";
import axios from "axios";

// TODOs
//* http-proxy istället för corsProxyn
//* skriv test
//* flytta fileSize calc function till hoc och låt den börja när pageload = completed
//? fix styles of buttons in 320px and
//? > 1440 font-size and button spacing

// in branch backup
const corsProxy = "https://cors-anywhere.herokuapp.com/";
const baseUrl = "https://github.com/2lach/2lach.github.io/raw/backup/src/docs/";
const cvSwe = "cv_se_2020.pdf";
const cvEn = "cv_en_2020.pdf";

class Cv extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoadingSwe: true,
      isLoadingEn: true,
      Swedish: "Ladda ner",
      English: "Download"
    };
  }

  async componentDidMount() {
    this.getSize(cvSwe);
    this.getSize(cvEn);
  }

  async getSize(fileUrl) {
    try {
      const response = await axios.get(corsProxy + baseUrl + fileUrl);
      const { headers } = await response;

      const file = headers["content-length"];
      const fileSizeKB = Math.ceil(file / 1024);

      if (fileUrl.includes("cv_se")) {
        this.setState({ Swedish: fileSizeKB, isLoadingSwe: false });
      } else {
        this.setState({ English: fileSizeKB, isLoadingEn: false });
      }
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { isLoadingSwe, isLoadingEn, Swedish, English } = this.state;
    return (
      <div className="wrapper">
        <a className="face-button" href={baseUrl + cvSwe}>
          <div className="face-primary">
            <span className="icon fa fa-download"></span>
            Swedish
          </div>
          <div className="face-secondary">
            <span className="icon fa fa-hdd-o"></span>
            Size: {isLoadingSwe ? "Laddar" : Swedish} KB
          </div>
        </a>

        <a className="face-button" href={baseUrl + cvEn}>
          <div className="face-primary">
            <span className="icon fa fa-download"></span>
            English
          </div>
          <div className="face-secondary">
            <span className="icon fa fa-hdd-o"></span>
            Size: {isLoadingEn ? "Loading" : English} KB
          </div>
        </a>
      </div>
    );
  }
}

export default Cv;
