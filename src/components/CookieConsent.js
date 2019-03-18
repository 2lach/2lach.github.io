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
  constructor() {
    super();
    this.state = {
      Consent: true
    };
  }

  hideConsent() {
    this.setState({
      Consent: false
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
          <span className="consentSpan">
            This site uses Cookies to make your visit easier
            <IoIosCloseCircle
              className="cookieBtn"
              onClick={() => this.hideConsent()}
            >
              X
            </IoIosCloseCircle>
          </span>
        </div>
      </footer>
    );
  }
}
export { CookieConsent, checkConsent };
