import React from "react";

import Typed from "react-typed";

function Header() {
  return (
    <div id="home" className="header-wrapper">
      <div className="layover"></div>
      <div className="main-info">
        <h1>Web development</h1>
        <Typed
          className="typed-text"
          strings={["Web Design", "Web Development", "SEO"]}
          typeSpeed={40}
          backSpeed={50}
          // attr="placeholder"
          loop
        ></Typed>
        <a href="#" className="btn-main-offer">
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Header;
