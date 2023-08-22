import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <img
          src="https://is1-ssl.mzstatic.com/image/thumb/Purple128/v4/9d/98/d2/9d98d2a6-070a-5b2d-ff1d-7c828422467e/source/512x512bb.jpg"
          width="32"
          height="32"
          alt="Notes"
        />{" "}
        Notes
      </Link>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}

export default Header;
