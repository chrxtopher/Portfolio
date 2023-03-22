import React, { useRef } from "react";
import Header from "./components/Header";
import ArrowDown from "./svgs/arrow-down.svg";
import CaretRight from "./svgs/caret-right.svg";
import ProjectsPanel from "./components/ProjectsPanel";
import "./styles/home.css";

const Home = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="home">
      <header>
        <Header clickAbout={scrollToAbout} clickProjects={scrollToProjects} />
      </header>
      <div className="intro">
        <p>Hi, my name is</p>
        <h1>Christopher Roddy.</h1>
        <h2>Your next leading problem solver.</h2>
        <p className="bio-short">
          I'm a junior software engineer specializing in web development. With
          extensive full-stack training, I have become proficient in front-end
          and back-end technologies. I'm here to bring your business's online
          experience to the next level.
        </p>
        <button type="button" onClick={scrollToAbout}>
          <img src={ArrowDown} alt="scroll down" />
        </button>
      </div>
      <div className="about" ref={aboutRef}>
        <div className="bio">
          <h3>
            <span>1.</span> About Me <hr />
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi sit
            explicabo debitis temporibus dolorum quaerat eum, aut odit molestias
            tempora dolores autem. Magni dolor perferendis iste qui odit
            provident accusamus! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Fugit tenetur, minima nihil hic quae numquam autem
            itaque nesciunt? Accusantium laborum alias modi ipsa facere
            consectetur enim officia dolore perspiciatis sed! Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Modi sit explicabo debitis
            temporibus dolorum quaerat eum, aut odit molestias tempora dolores
            autem. Magni dolor perferendis iste qui odit provident accusamus!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
            tenetur, minima nihil hic quae numquam autem itaque nesciunt?
            Accusantium laborum alias modi ipsa facere consectetur enim officia
            dolore perspiciatis sed!
          </p>
          <p>Here are some technologies I've been working with:</p>
          <div className="technologies">
            <ul>
              <li>
                <img src={CaretRight} alt="caret right" />
                React
              </li>
              <li>
                <img src={CaretRight} alt="caret right" />
                JavaScript
              </li>
              <li>
                <img src={CaretRight} alt="caret right" />
                CSS3
              </li>
            </ul>
            <ul>
              <li>
                <img src={CaretRight} alt="caret right" />
                Express
              </li>
              <li>
                <img src={CaretRight} alt="caret right" />
                PostgreSQL
              </li>
              <li>
                <img src={CaretRight} alt="caret right" />
                Node
              </li>
            </ul>
            <ul>
              <li>
                <img src={CaretRight} alt="caret right" />
                Knex
              </li>
              <li>
                <img src={CaretRight} alt="caret right" />
                GitHub
              </li>
              <li>
                <img src={CaretRight} alt="caret right" />
                Postman
              </li>
            </ul>
          </div>
        </div>
        <div className="bio-img-border">
          <div className="bio-img"></div>
        </div>
      </div>
      <div className="projects" ref={projectsRef}>
        <h3>
          <span>2.</span> Projects <hr />
        </h3>
        <ProjectsPanel />
      </div>
    </div>
  );
};

export default Home;
