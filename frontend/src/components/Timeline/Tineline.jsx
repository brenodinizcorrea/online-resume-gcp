import React from "react";
import "./Timeline.css";

// import das imagens
import wineLogo from "../../assets/companies-logos/wine.png";
import thoughtworksLogo from "../../assets/companies-logos/thoughtworks.png";
import ufesLogo from "../../assets/education-logos/ufes.png";
import ifesLogo from "../../assets/education-logos/ifes.png";

export default function Timeline() {
  return (
    <section id="timeline" className="section-timeline py-5">
      <div className="container-lg">

        <div className="timeline-header text-center mb-4">
          <h2 className="h3 mb-1">Timeline</h2>
          <p className="text-secondary mb-2">
            Education and professional experience over time.
          </p>

          <div className="timeline-legend">
            <span className="legend-item legend-current">
              <span className="legend-dot"></span>
              Current
            </span>
          </div>
        </div>

        <div className="tl">
          <div className="tl-scroll">
            <div className="tl-area">

              {/* Companies top lane */}
              <div className="tl-lane tl-lane--top tl-lane--clickable">
                <a href="#experience" className="tl-lane-cta" aria-label="Go to Experience section"></a>
                <div className="tl-lane-label tl-lane-label--cta">
                  Companies <span className="tl-lane-arrow">→</span>
                </div>

                <a className="tl-item tl-item--job" href="https://www.wine.com.br" target="_blank" rel="noopener noreferrer" style={{left: "44.7%", width: "27.27%"}}>
                  <div className="tl-card tl-card--job">
                    <img className="tl-logo" src={wineLogo} alt="Wine" />
                    <div>
                      <div className="tl-title">Wine</div>
                      <div className="tl-subtitle">Analytics / DS</div>
                    </div>
                  </div>
                </a>

                <a className="tl-item tl-item--job is-current" href="https://www.thoughtworks.com/" target="_blank" rel="noopener noreferrer" style={{left: "71.21%", width: "19.70%"}}>
                  <div className="tl-card tl-card--job">
                    <img className="tl-logo" src={thoughtworksLogo} alt="Thoughtworks" />
                    <div>
                      <div className="tl-title">Thoughtworks</div>
                      <div className="tl-subtitle">Analytics / DS</div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Axis */}
              <div className="tl-axis" aria-hidden="true">
                {Array.from({length: 12}, (_, i) => (
                  <div className="tl-tick" style={{left: `${i*9.09}%`}} key={i}>
                    <span>{2016+i}</span>
                  </div>
                ))}
              </div>

              {/* Education bottom lane */}
              <div className="tl-lane tl-lane--bottom tl-lane--clickable">
                <a href="#education" className="tl-lane-cta" aria-label="Go to Education section"></a>

                <div className="tl-item tl-item--edu" style={{left: "5.3%", width: "47.73%"}}>
                  <div className="tl-card tl-card--edu tl-card--edu-row">
                    <img className="tl-logo" src={ufesLogo} alt="UFES" />
                    <div>
                      <div className="tl-title">BSc in Electrical Engineering</div>
                    </div>
                  </div>
                </div>

                <div className="tl-item tl-item--edu" style={{left: "77%", width: "14%"}}>
                  <div className="tl-card tl-card--edu tl-card--edu-row">
                    <img className="tl-logo" src={ufesLogo} alt="UFES" />
                    <div>
                      <div className="tl-title">PG in AI</div>
                    </div>
                  </div>
                </div>

                <div className="tl-item tl-item--edu tl-item--offset is-current" style={{left: "82.58%", width: "22.73%"}}>
                  <div className="tl-card tl-card--edu tl-card--edu-row">
                    <img className="tl-logo" src={ifesLogo} alt="IFES" />
                    <div>
                      <div className="tl-title">MSc in AI</div>
                    </div>
                  </div>
                </div>

                <div className="tl-lane-label tl-lane-label--bottom tl-lane-label--cta">
                  Education <span className="tl-lane-arrow">→</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
