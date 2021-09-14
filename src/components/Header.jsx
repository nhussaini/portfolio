import React from "react";

import Typed from "react-typed";

function Header() {
  return (
    <div className="header-wrapper">
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
      </div>
    </div>
  );
}

export default Header;
