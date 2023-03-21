import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <button type="button" className="nav-btn">
              <span>01.</span> About
            </button>
          </li>
          <li>
            <button type="button" className="nav-btn">
              <span>02.</span> Projects
            </button>
          </li>
          <li>
            <button type="button" className="nav-btn">
              <span>03.</span> Contact
            </button>
          </li>
        </ul>
      </nav>

      <button type="button" className="primary-btn">
        Resume
      </button>
    </div>
  );
};

export default Header;
