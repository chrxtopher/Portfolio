import React from "react";
import Header from "./components/Header";
import ArrowDown from "./svgs/arrow-down.svg";
import "./styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <header>
        <Header />
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
        <button type="button">
          <img src={ArrowDown} alt="scroll down" />
        </button>
      </div>
    </div>
  );
};

export default Home;
