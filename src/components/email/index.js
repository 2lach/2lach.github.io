import React from "react";
import "./style.css";

/* Envelop design by @Oksana_ -> https://codepen.io/Oksana_/*/

const openMail = () => {
  const emailAdress = "mailto:stefanlachmann@hotmail.com";
  const subject = "subject=Hey Stefan, My name is: ";
  const mailto = `${emailAdress}?${subject}`;

  if (!location) {
    console.log("location");
    location.href = mailto;
  } else if (window) {
    console.log("window");
    window.open(mailto, "_self");
    window.location = mailto;
    window.location.assign(mailto);
  } else {
    console.error("oh snap you dont have a window or a location");
    console.log(
      "Here is a cat image: http://cdn.sheknows.com/articles/2013/06/25-random-cat-behaviors-finally-explained-01.jpg",
    );
  }
};

const Email = () => {
  return (
    <div className="wrapper" onClick={() => openMail()}>
      <div className="mail">
        <div className="cover" />
        <div className="letter">
          <h1>
            Click here <br /> or write to <br /> stefanlachmann at hotmail.com
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Email;
