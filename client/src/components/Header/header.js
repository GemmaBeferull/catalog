import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="header_text">
          MOB
          <span>!</span>
          LE CATALOG
        </h1>
      </div>
    );
  }
}

export default Header;
