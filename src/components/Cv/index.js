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
const cvEn = "cv-stefan_lachmann_en.pdf";

class Cv extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoadingEn: true,
      English: "Download"
    };
  }

  async componentDidMount() {
    this.getSize(cvEn);
  }

  async getSize(fileUrl) {
    try {
      const response = await axios.get(corsProxy + baseUrl + fileUrl);
      const { headers } = response;

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
    return (
      <div className="wrapper">
        <a className="face-button" href={baseUrl + cvEn}>
          <div className="face-primary">
            <span className="icon fa fa-download"></span>
            Get a copy
          </div>
          <div className="face-secondary">
            <span className="icon fa fa-hdd-o"></span>
            Download PDF
          </div>
        </a>
      </div>
    );
  }
}

export default Cv;
