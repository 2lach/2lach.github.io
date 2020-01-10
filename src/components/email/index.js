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
    if (location) {
      location.href = mailto;
    } else if (window) {
      window.open(mailto, "_self");
      window.location = mailto;
      window.location.assign(mailto);
    } else {
      console.error("oh snap you dont have a window or a location");
      console.log(
        "Here is a cat image: https://cdn.sheknows.com/articles/2013/06/25-random-cat-behaviors-finally-explained-01.jpg",
      );
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
        <div className="letter" onClick={() => sendMail()}>
          {message}
        </div>
      </div>
    </div>
  );
};

export default Email;
