import React from "react";
import "../styles/sidebar.css";
import GitHubLogo from "../svgs/github-logo.svg";
import LinkedInLogo from "../svgs/linkedin-logo.svg";
import MailLogo from "../svgs/mail-logo.svg";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="logos">
        <a
          href="mailto:chris.roddy11@icloud.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={MailLogo} alt="Send An Email" />
        </a>
        <a
          href="https://github.com/chrxtopher"
          target="_blank"
          rel="noreferrer"
        >
          <img src={GitHubLogo} alt="Visit GitHub Profile" />
        </a>
        <a
          href="https://www.linkedin.com/in/christopher-roddy/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LinkedInLogo} alt="Visit LinkedIn Profile" />
        </a>
      </div>

      <hr />
    </div>
  );
};

export default SideBar;
