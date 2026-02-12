import React from "react";
import "./Timeline.css";

// import das imagens
import wineLogo from "../../assets/companies-logos/wine.png";
import thoughtworksLogo from "../../assets/companies-logos/thoughtworks.png";
import ufesLogo from "../../assets/education-logos/ufes.png";
import ifesLogo from "../../assets/education-logos/ifes.png";

export default function Timeline() {
  /* ======================================================
     CONFIGURAÇÃO DA LINHA DO TEMPO
  ====================================================== */

  const timelineStart = { year: 2016, month: 1 };
  
  const now = new Date();
  
  const timelineEnd = {
    year: now.getFullYear(),
    month: now.getMonth() + 1, // +1 porque getMonth() começa em 0
  };


  const toMonths = ({ year, month }) => year * 12 + month;

  const totalMonths =
    toMonths(timelineEnd) - toMonths(timelineStart);

  function getPosition(start, end) {
    const startMonth = toMonths(start);
    const endMonth = end ? toMonths(end) : toMonths(timelineEnd);

    const left =
      ((startMonth - toMonths(timelineStart)) / totalMonths) * 100;

    const width =
      ((endMonth - startMonth) / totalMonths) * 100;

    return {
      left: `${left}%`,
      width: `${width}%`,
    };
  }

  /* ======================================================
     DADOS - EMPRESAS
  ====================================================== */

  const jobs = [
    {
      title: "Wine",
      subtitle: "Analytics / DS",
      logo: wineLogo,
      link: "https://www.wine.com.br",
      start: { year: 2020, month: 6 },
      end: { year: 2023, month: 11 },
    },
    {
      title: "Thoughtworks",
      subtitle: "Analytics / DS",
      logo: thoughtworksLogo,
      link: "https://www.thoughtworks.com/",
      start: { year: 2023, month: 11 },
      end: null,
      current: true,
    },
  ];

  /* ======================================================
     DADOS - EDUCAÇÃO
  ====================================================== */

  const education = [
    {
      title: "BSc in Electrical Engineering",
      logo: ufesLogo,
      link: "https://www.ufes.br/",
      start: { year: 2016, month: 2 },
      end: { year: 2021, month: 12 },
    },
    {
      title: "PG in AI",
      logo: ufesLogo,
      link: "https://www.ufes.br/",
      start: { year: 2024, month: 1 },
      end: { year: 2024, month: 12 },
    },
    {
      title: "MSc in AI",
      logo: ifesLogo,
      link: "https://www.ifes.edu.br/",
      start: { year: 2024, month: 6 },
      end: null,
      current: true,
      offset: true,
    },
  ];

  /* ======================================================
     GERAR EIXO AUTOMÁTICO
  ====================================================== */

  const years = [];
  for (let y = timelineStart.year; y <= timelineEnd.year; y++) {
    years.push(y);
  }

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

              {/* ===================== COMPANIES ===================== */}

              <div className="tl-lane tl-lane--top tl-lane--clickable">
                <a href="#experience" className="tl-lane-cta" />

                <div className="tl-lane-label tl-lane-label--cta">
                  Companies <span className="tl-lane-arrow">→</span>
                </div>

                {jobs.map((job, index) => {
                  const position = getPosition(job.start, job.end);

                  return (
                    <a
                      key={index}
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`tl-item tl-item--job ${
                        job.current ? "is-current" : ""
                      }`}
                      style={position}
                    >
                      <div className="tl-card tl-card--job">
                        <img
                          className="tl-logo"
                          src={job.logo}
                          alt={job.title}
                        />
                        <div>
                          <div className="tl-title">{job.title}</div>
                          <div className="tl-subtitle">
                            {job.subtitle}
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* ===================== AXIS ===================== */}

              <div className="tl-axis" aria-hidden="true">
                {years.map((year) => {
                  const left =
                    ((year - timelineStart.year) /
                      (timelineEnd.year - timelineStart.year)) *
                    100;

                  return (
                    <div
                      key={year}
                      className="tl-tick"
                      style={{ left: `${left}%` }}
                    >
                      <span>{year}</span>
                    </div>
                  );
                })}
              </div>

              {/* ===================== EDUCATION ===================== */}

              <div className="tl-lane tl-lane--bottom tl-lane--clickable">
                <a href="#education" className="tl-lane-cta" />

                {education.map((edu, index) => {
                  const position = getPosition(edu.start, edu.end);
                  
                  const Wrapper = edu.link ? "a" : "div";

                  return (
                    <Wrapper
                      key={index}
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`tl-item tl-item--edu ${
                        edu.offset ? "tl-item--offset" : ""
                      } ${edu.current ? "is-current" : ""}`}
                      style={position}
                    >
                      <div className="tl-card tl-card--edu tl-card--edu-row">
                        <img
                          className="tl-logo"
                          src={edu.logo}
                          alt={edu.title}
                        />
                        <div>
                          <div className="tl-title">{edu.title}</div>
                        </div>
                      </div>
                    </Wrapper>
                  );
                })}

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
