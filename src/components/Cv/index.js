import React from "react";
import "./style.css";

/* Envelop design by @Oksana_ -> https://codepen.io/Oksana_/*/

const cvSwePdf = "";
const cvEnPdf = "";

const Cv = () => {
  return (
    <div className="wrapper">
      <div className="">
        <a href={cvSwePdf}>Get the Swedish version</a>
      </div>
      <div className="">
        <a href={cvEnPdf}>Get the English version</a>
      </div>
    </div>
  );
};

export default Cv;
