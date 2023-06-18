import React, { Component } from "react";

import { HiCheckCircle } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";

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

  hideConsent = (saveCookies) => {
    this.setState({
      Consent: false,
    });

    if (saveCookies) {
      if (checkConsent() === null) {
        setCookie("cookieConsentClicked", 1, 365);
      } else {
        console.info("Cookies already set");
      }
    } else {
      // Split cookies by semicolon to get individual cookies
      const cookies = document.cookie.split(";");

      // Loop through each cookie and remove it
      cookies.forEach((cookie) => {
        const cookieName = cookie.split("=")[0].trim();
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      });
      console.info("now all cookies should be gone");
    }
  };

  render() {
    let hideOrShow = this.state.Consent ? "CookieConsentStyle" : "hideConsent";

    return (
      <footer className={hideOrShow} style={{ zIndex: 10 }}>
        <div>
          <div className="consentContent">
            <p>
              This site uses{" "}
              <a
                id="cookieLink"
                className="consentContent"
                href="https://en.wikipedia.org/wiki/HTTP_cookie"
                rel="noopener noreferrer"
                target="_blank"
              >
                cookies
              </a>{" "}
              to make your visit easier
            </p>
          </div>
          <div className="consentContentMini">
            <a
              style={{ textAlign: "center", fontSize: "13px" }}
              href="https://en.wikipedia.org/wiki/HTTP_cookie"
              rel="noopener noreferrer"
              target="_blank"
            >
              Would you like some cookies?
            </a>
          </div>
          <div className="cookieBtns">
            <HiCheckCircle
              className="cookieBtn rightCheck"
              title="accept"
              onClick={() => this.hideConsent(true)}
            />
            <IoIosCloseCircle
              className="cookieBtn"
              onClick={() => this.hideConsent(false)}
              title="deny"
            />
          </div>
          <div></div>
        </div>
      </footer>
    );
  }
}

export { CookieConsent, checkConsent };
