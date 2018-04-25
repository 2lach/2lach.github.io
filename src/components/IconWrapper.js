/* eslint-disable */

import React, { Component } from 'react';

class IconWrapper extends Component {
  render() {
    const date = new Date();
    const year = date.getFullYear();
    return (
      <div>
        <div className="footer-first">
          <ul className="footer-bar" />

          <footer className="pv4 ph2 tc-l">
            <li className="avenir mt4 mb4" style={{ listStyle: 'none' }}>
              &copy; Stefan Lachmann <span>{year}</span><br />
              <a className="mt3 p4 f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black" href="mailto:stefan.lachmann@hotmail.com">Contact me</a>
            </li>
            <a
              rel="noopener noreferrer"
              className="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2"
              target="_blank"
              href="https://github.com/2lach"
              title="GitHub"
            >
              <svg
                className="dib h2 w2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fillRule="evenodd"
                clipRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="1.414"
              >
                <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8" />
              </svg>
              <span className="f6 ml3 pr2">GitHub</span>
            </a>
            <a
              rel="noopener noreferrer"
              className="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2"
              target="_blank"
              href="https://soundcloud.com/stefan-lachmann-873970444"
              title="SoundCloud"
            >
              <svg
                className="dib h2 w2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fillRule="evenodd"
                clipRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="1.414"
              >
                <g fillRule="nonzero">
                  <path d="M.773 8.13c-.034 0-.062.03-.067.066L.55 9.633l.156 1.405c.005.038.033.065.067.065.033 0 .06-.027.066-.065l.178-1.405-.18-1.437C.835 8.158.807 8.13.774 8.13M.18 8.682c-.032 0-.06.025-.063.062L0 9.634l.117.872c.004.037.03.063.064.063s.06-.027.065-.063l.14-.874-.14-.89c-.005-.036-.03-.06-.064-.06M1.4 7.85c-.04 0-.075.033-.08.078l-.148 1.705.15 1.643c.003.045.037.078.08.078.04 0 .074-.033.08-.078l.17-1.643-.17-1.705c-.006-.045-.04-.078-.08-.078M2.035 7.79c-.05 0-.09.04-.094.092l-.14 1.75.14 1.696c.005.052.045.092.095.092s.09-.04.094-.092l.16-1.695-.16-1.752c-.006-.05-.046-.09-.095-.09M2.78 11.342zM2.78 8.008c-.003-.06-.05-.106-.106-.106-.058 0-.104.046-.108.107l-.133 1.623.133 1.71c.004.06.05.105.108.105.057 0 .103-.046.107-.106l.152-1.71-.15-1.624zM3.318 6.87c-.065 0-.118.053-.12.12L3.07 9.634l.125 1.71c.003.065.056.118.12.118.065 0 .118-.053.122-.12l.14-1.708-.14-2.644c-.005-.067-.058-.12-.122-.12M3.957 6.262c-.072 0-.132.058-.135.133l-.117 3.248.117 1.698c.003.076.063.134.135.134.072 0 .13-.058.135-.133v.002l.132-1.7-.132-3.247c-.004-.075-.063-.133-.135-.133M4.62 5.968c-.08 0-.144.065-.147.148l-.11 3.52.11 1.68c.003.08.068.146.148.146.08 0 .146-.065.15-.147l.123-1.68-.123-3.52c-.004-.082-.07-.147-.15-.147M5.443 5.997c-.003-.09-.074-.16-.162-.16-.088 0-.16.07-.16.16l-.102 3.638.1 1.67c.003.09.074.16.163.16.09 0 .16-.07.163-.16l.113-1.67-.113-3.638zM5.443 11.304zM5.945 5.915c-.096 0-.173.077-.175.175l-.093 3.545.093 1.654c.002.096.08.173.175.173.096 0 .174-.077.176-.175v.002l.105-1.655L6.12 6.09c0-.098-.08-.175-.175-.175M6.615 6.03c-.104 0-.187.084-.19.19l-.084 3.416.086 1.643c.002.104.085.186.19.186.103 0 .186-.082.19-.188l.093-1.642-.095-3.416c-.003-.106-.086-.19-.19-.19M7.402 5.403c-.032-.02-.07-.034-.112-.034-.04 0-.078.01-.11.032-.054.036-.092.098-.093.17v.038L7.01 9.635l.077 1.634v.006c.003.045.02.087.048.12.037.045.093.074.155.074.055 0 .106-.023.142-.06.037-.036.06-.087.06-.142l.01-.162.077-1.47-.087-4.065c0-.07-.037-.13-.09-.167M7.493 11.27v-.002zM8.072 5.018c-.032-.02-.07-.03-.11-.03-.05 0-.1.017-.137.048-.048.04-.08.1-.08.167v.022l-.09 4.41.047.817.043.793c.002.118.1.215.217.215.118 0 .215-.097.217-.216v.002l.095-1.61-.096-4.433c-.002-.08-.045-.147-.108-.185M14.032 7.538c-.27 0-.527.055-.76.153-.158-1.773-1.645-3.164-3.46-3.164-.443 0-.876.087-1.258.235-.15.06-.188.117-.19.232v6.246c.002.12.095.215.213.226h5.455c1.087 0 1.968-.87 1.968-1.958 0-1.087-.88-1.968-1.968-1.968" />
                </g>
              </svg>
              <span className="f6 ml3 pr2">SoundCloud</span>
            </a>
            <a
              rel="noopener noreferrer"
              className="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2"
              target="_blank"
              href="https://www.linkedin.com/in/slachmann/"
              title="Linkedin"
            >
              <svg
                className="dib h2 w2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fillRule="evenodd"
                clipRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="1.414"
              >
                <path
                  d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z"
                  fillRule="nonzero"
                />
              </svg>
              <span className="f6 ml3 pr2">Linkedin</span>
            </a>
            <a
              rel="noopener noreferrer"
              className="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2"
              target="_blank"
              href="https://codepen.io/2lach"
              title="CodePen"
            >
              <svg
                className="dib h2 w2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fillRule="evenodd"
                clipRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="1.414"
              >
                <path
                  d="M15.988 5.443c-.004-.02-.007-.04-.012-.058l-.01-.033c-.006-.017-.012-.034-.02-.05-.003-.012-.01-.023-.014-.034l-.023-.045-.02-.032-.03-.04-.024-.03c-.01-.013-.022-.026-.034-.038l-.027-.027-.04-.032-.03-.024-.012-.01L8.38.117c-.23-.155-.53-.155-.76 0L.305 4.99.296 5c-.012.007-.022.015-.032.023-.014.01-.027.02-.04.032l-.027.027-.034.037-.024.03-.03.04c-.006.012-.013.022-.02.033l-.023.045-.015.034c-.007.016-.012.033-.018.05l-.01.032c-.005.02-.01.038-.012.058l-.006.03C.002 5.5 0 5.53 0 5.56v4.875c0 .03.002.06.006.09l.007.03c.003.02.006.04.013.058l.01.033c.006.018.01.035.018.05l.015.033c.006.016.014.03.023.047l.02.03c.008.016.018.03.03.042.007.01.014.02.023.03.01.012.02.025.034.036.01.01.018.02.028.026l.04.033.03.023.01.01 7.31 4.876c.116.078.248.117.382.116.134 0 .266-.04.38-.116l7.314-4.875.01-.01c.012-.007.022-.015.032-.023.014-.01.027-.02.04-.032l.027-.027.034-.037.024-.03.03-.04.02-.032.023-.046.015-.033.018-.052.01-.033c.005-.02.01-.038.013-.058 0-.01.003-.02.004-.03.004-.03.006-.06.006-.09V5.564c0-.03-.002-.06-.006-.09l-.007-.03zM8 9.626L5.568 8 8 6.374 10.432 8 8 9.626zM7.312 5.18l-2.98 1.993-2.406-1.61 5.386-3.59v3.206zM3.095 8l-1.72 1.15v-2.3L3.095 8zm1.237.828l2.98 1.993v3.208l-5.386-3.59 2.406-1.61zm4.355 1.993l2.98-1.993 2.407 1.61-5.387 3.59v-3.206zM12.905 8l1.72-1.15v2.3L12.905 8zm-1.237-.827L8.688 5.18V1.97l5.386 3.59-2.406 1.61z"
                  fillRule="nonzero"
                />
              </svg>
              <span className="f6 ml3 pr2">Code Pen</span>
            </a>
            {/*<a
              rel="noopener noreferrer"
              className="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2"
              style={{height:"2rem", width:"5rem"}}
              target="_blank"
              href="mailto@s.w.lachmann@gmail.com"
              title="Contact"
            >
            <span className="f6 ml3 pr2">Contact</span>
            
            </a>*/}
          </footer>
        </div>
      </div>
    );
  }
}
export default IconWrapper;
