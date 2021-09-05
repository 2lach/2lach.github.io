import React, { Component } from "react";

import { IoIosCloseCircle } from "react-icons/all";

function setCookie(name, value, days) {
  days = 365;
  var d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
  document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}
function checkConsent(name) {
  var v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return v ? v[2] : null;
}
class CookieConsent extends Component {
  state = {
    Consent: true,
  };
  hideConsent() {
    this.setState({
      Consent: false,
    });
    if (checkConsent() === null) {
      setCookie("cookieConsentClicked", 1, 365);
    }
  }

  render() {
    let hideOrShow = this.state.Consent ? "CookieConsentStyle" : "hideConsent";
    return (
      <footer className={hideOrShow}>
        <div>
          <div className="consentContent">
            This site uses{" "}
            <a
              className="consentContentA"
              href="https://en.wikipedia.org/wiki/HTTP_cookie"
              rel="noopener noreferrer"
              target="_blank"
            >
              Cookies
            </a>{" "}
            to make your visit easier
          </div>
          <IoIosCloseCircle
            className="cookieBtn"
            onClick={() => this.hideConsent()}
          >
            X
          </IoIosCloseCircle>
        </div>
      </footer>
    );
  }
}
export { CookieConsent, checkConsent };
