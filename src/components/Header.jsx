import React from "react";

import Typed from "react-typed";

function Header() {
  return (
    <div id="home" className="header-wrapper">
      <div className="layover"></div>
      <div className="main-info">
        <h1>Welcome 😎</h1>
        <Typed
          className="typed-text"
          strings={["Software Engineer", "Full-Stack Engineer", "SEO"]}
          typeSpeed={40}
          backSpeed={50}
          // attr="placeholder"
          loop
        ></Typed>
        <a href="https://resume.creddle.io/resume/cj7dillzuu9" className="btn-main-offer" target="_blank">
          My Resume
        </a>
      </div>
    </div>
  );
}

export default Header;
