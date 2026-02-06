import React from "react";
import "./Hero.css";
import profilePhoto from "../../assets/profile.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <p className="hero-title">Data & AI Professional • Applied Researcher</p>
          <p className="hero-description">
            I build practical data and AI solutions that connect research, technology, and real-world decisions.
          </p>
          <div className="hero-location">Vila Velha, ES • Brazil</div>
        </div>
        <div className="hero-photo">
          <img src={profilePhoto} alt="Breno Diniz Correa" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
