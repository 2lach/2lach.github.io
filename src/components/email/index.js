// file not used...
import React from "react";
import "./style.css";

/* Envelop design by @Oksana_ -> https://codepen.io/Oksana_/*/

const openMail = () => {
  const emailAdress = "mailto:stefanlachmann@hotmail.com";
  const subject = "subject=Hey Stefan, My name is: ";
  const mailto = `${emailAdress}?${subject}`;
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (width > 500) {
    if (window) {
      // window.open(mailto, "_self");
      // window.location = mailto;
      window.location.assign(mailto);
    } else {
      // eslint-disable-next-line no-console
      console.error("oh snap you dont have a window");
    }
  } else {
    // const H1_elem = document.querySelector("h1");
  }
};

const Email = () => {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  let message;

  if (width > 500) {
    message = (
      <h1>
        Click here <br /> or write to <br /> stefanlachmann at hotmail.com
      </h1>
    );
  } else {
    message = (
      <h1>
        <a href="mailto:stefanlachmann@hotmail.com">
          stefanlachmann at hotmail.com
        </a>
      </h1>
    );
  }

  return (
    <div className="wrapper" onClick={() => openMail()}>
      <div className="mail">
        <div className="cover" />
        <div className="letter" onClick={() => openMail()}>
          {message}
        </div>
      </div>
    </div>
  );
};

export default Email;
