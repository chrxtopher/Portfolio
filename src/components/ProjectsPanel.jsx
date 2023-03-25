import React, { useState } from "react";
import Project from "./Project";
import "../styles/projectsPanel.css";

const ProjectsPanel = () => {
  const [activeProject, setActiveProject] = useState("chefAtHome");

  const handleChefAtHomeClick = () => {
    setActiveProject("chefAtHome");
  };

  const handleFakeStoreClick = () => {
    setActiveProject("fakeStore");
  };

  const handleTullisLandingClick = () => {
    setActiveProject("tullisLanding");
  };

  return (
    <div className="projects-panel">
      <div className="project-names">
        <ul>
          <li>
            <button
              onClick={handleChefAtHomeClick}
              type="button"
              className={
                activeProject === "chefAtHome"
                  ? "project-btn-active"
                  : "project-btn"
              }
            >
              Chef at Home
            </button>
          </li>
          <li>
            <button
              onClick={handleFakeStoreClick}
              type="button"
              className={
                activeProject === "fakeStore"
                  ? "project-btn-active"
                  : "project-btn"
              }
            >
              Fake Store
            </button>
          </li>
          <li>
            <button
              onClick={handleTullisLandingClick}
              type="button"
              className={
                activeProject === "tullisLanding"
                  ? "project-btn-active"
                  : "project-btn"
              }
            >
              Tullis Landing
            </button>
          </li>
        </ul>
      </div>
      <div className="project-info">
        {activeProject === "chefAtHome" && (
          <Project
            title="Chef at Home"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit tenetur, minima nihil hic quae numquam autem itaque nesciunt? Accusantium laborum alias modi ipsa facere consectetur enim officia dolore perspiciatis sed!"
            tech={["React", "CSS3", "SpoonacularAPI"]}
            tech2={["Postman"]}
            active={activeProject}
            gitHubUrl="https://github.com/chrxtopher/Chef-At-Home"
          />
        )}
        {activeProject === "tullisLanding" && (
          <Project
            title="Tullis Landing"
            description="Landing page for Arizona native hip-hop artist, Tullis. I worked with him and his producer, Caleb Roddy (my brother), to put together a website that allows his fans and business partners to easily access his music, press articles, and socials."
            tech={["React", "CSS3", "Vercel"]}
            active={activeProject}
            gitHubUrl="https://github.com/chrxtopher/jt-landing"
            liveUrl="https://www.tullismusic.com/"
          />
        )}
      </div>
    </div>
  );
};

export default ProjectsPanel;
