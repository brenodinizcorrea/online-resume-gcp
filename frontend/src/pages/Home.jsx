// src/pages/Home.jsx
import React from "react";

export default function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
        <div className="container-lg">
          <a className="navbar-brand fw-semibold" href="/" aria-label="Home"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav"
                  aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item dropdown">
                <button className="nav-link btn btn-link nav-menu-toggle"
                        id="siteMenu" type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        aria-label="Open menu">
                  <svg xmlns="http://www.w3.org/2000/svg"
                       width="22" height="22"
                       viewBox="0 0 24 24"
                       fill="none"
                       stroke="currentColor"
                       strokeWidth="2"
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       aria-hidden="true">
                    <line x1="4" y1="7" x2="20" y2="7"></line>
                    <line x1="4" y1="12" x2="20" y2="12"></line>
                    <line x1="4" y1="17" x2="20" y2="17"></line>
                  </svg>
                </button>
                <ul className="dropdown-menu dropdown-menu-end nav-menu" aria-labelledby="siteMenu">
                  <li>
                    <a className="dropdown-item nav-menu-item" href="/experience" aria-label="Go to Experience">
                      <span className="nav-menu-item__title">Experience</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header id="home" className="hero-split section-hero py-5">
        <div className="container-lg">
          <div className="row align-items-center g-4">
            <div className="col-lg-8 order-2 order-lg-1 hero-text">
              <h1 className="display-5 fw-semibold mb-2">Breno Correa</h1>
              <p className="lead mb-3 hero-headline">
                Data & AI Professional • Applied Researcher
              </p>
              <p className="hero-subtext mb-0">
                I build practical data and AI solutions that connect research, technology, and real-world decisions.
              </p>
              <div className="hero-meta mt-3">Vila Velha, ES • Brazil</div>
            </div>
            <div className="col-lg-4 text-center order-1 order-lg-2 hero-photo">
              <img src="assets/profile.jpg"
                   alt="Foto de Breno Correa"
                   className="img-fluid profile-photo shadow-sm" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
