import React, { Component } from "react";

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
    let hideOrShow = this.state.Consent ? "CookieStyle" : "hideConsent";
    return (
      <footer className={hideOrShow}>
        <div>
          This site uses Cookies to make your visit easier
          <span className="cookieBtn" onClick={() => this.hideConsent()}>
            X
          </span>
        </div>
      </footer>
    );
  }
}
export { CookieConsent, checkConsent };
