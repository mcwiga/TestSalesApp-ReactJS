import React, { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <nav className="tutubanner">
        <a className="navbar-brand tutu-brand" href="#">
          <img
            src="tutuLogo.png"
            width="30"
            height="30"
            alt=""
            loading="lazy"
          ></img>
        </a>
      </nav>
    );
  }
}

export default Navbar;
