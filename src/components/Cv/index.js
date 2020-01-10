import React from "react";
import "./style.css";

/* Envelop design by @Oksana_ -> https://codepen.io/Oksana_/*/

// in branch backup
const cvSwePdf =
  "https://github.com/2lach/2lach.github.io/raw/backup/src/docs/cv_se_2020.pdf";
const cvEnPdf =
  "https://github.com/2lach/2lach.github.io/raw/backup/src/docs/cv_en_2020.pdf";

const Cv = () => {
  return (
    <div className="wrapper">
      <a className="face-button" href={cvSwePdf}>
        <div className="face-primary">
          <span className="icon fa fa-download"></span>
          Swedish
        </div>
        <div className="face-secondary">
          <span className="icon fa fa-hdd-o"></span>
          Size: 489 KB
        </div>
      </a>

      <a className="face-button" href={cvEnPdf}>
        <div className="face-primary">
          <span className="icon fa fa-download"></span>
          English
        </div>
        <div className="face-secondary">
          <span className="icon fa fa-hdd-o"></span>
          Size: 474 KB
        </div>
      </a>
    </div>
  );
};

export default Cv;
