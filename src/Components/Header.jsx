/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <>
      <div className="header-div"
        style={{
          position: "fixed",
          background: "rgba(0,0,0)",  
          color: 'white',
          top: 0,
          width: "100%",
          zIndex: 10,
        }}
      >
        <div className="nav-lg">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#footer">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Header;
