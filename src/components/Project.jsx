import React from "react";
import GitHubLogo from "../svgs/github-logo.svg";
import LiveLinkLogo from "../svgs/live-link.svg";
import CaretRight from "../svgs/caret-right.svg";
import "../styles/project.css";

const Project = ({
  title,
  description,
  tech = [],
  tech2 = [],
  active,
  gitHubUrl,
  liveUrl,
}) => {
  return (
    <div className="project">
      <div className="project-description">
        <div className="project-title">
          <h3>{title}</h3>
          <div className="project-links">
            <a href={gitHubUrl} target="_blank" rel="noreferrer">
              <img src={GitHubLogo} alt="github link" />
            </a>
            <a href={liveUrl} target="_blank" rel="noreferrer">
              <img src={LiveLinkLogo} alt="live link" />
            </a>
          </div>
        </div>
        <p>{description}</p>
        <div className="tech-used">
          <ul>
            {tech.map((item) => {
              return (
                <li>
                  <img src={CaretRight} alt="caret right" />
                  {item}
                </li>
              );
            })}
          </ul>
          <ul>
            {tech2.map((item) => {
              return (
                <li>
                  <img src={CaretRight} alt="caret right" />
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="project-img-border">
        <div className={`project-img ${active}`}></div>
      </div>
    </div>
  );
};

export default Project;
