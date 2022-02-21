import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import videoSrc from "../assets/videos/video-2.mp4";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={videoSrc} autoPlay loop muted />
      <h1>You have dreams?</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          OFFER JOB
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          ANALYZE PROJECTS <i className="far fa-file" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
