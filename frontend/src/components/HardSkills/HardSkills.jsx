import React from "react";
import "./HardSkills.css";

const skillsData = [
  {
    sector: "Languages & Libs & Frameworks",
    skills: [
      { name: "SQL", type: "exp" },
      { name: "Python", type: "exp" },
      { name: "JavaScript", type: "study" },
      { name: "HTML", type: "study" }
    ]
  },
  {
    sector: "Tools & Platforms",
    skills: [
      { name: "BigQuery", type: "exp" },
      { name: "GitHub", type: "exp" },
      { name: "GitLab", type: "exp" },
      { name: "Airflow", type: "exp" },
      { name: "Terraform", type: "exp" },
      { name: "Power BI", type: "exp" },
      { name: "Looker Studio", type: "exp" },
      { name: "Apache Superset", type: "exp" },
      { name: "Cloud Storage", type: "exp" },
      { name: "DataForm", type: "exp" }
    ]
  },
  {
    sector: "Methods & Theory",
    skills: [
      { name: "A/B Testing", type: "exp" },
      { name: "Statistical Inference", type: "exp" },
      { name: "Sampling", type: "study" }
    ]
  },
  {
    sector: "ML & AI",
    skills: [
      { name: "Classification", type: "exp" },
      { name: "Time Series", type: "exp" },
      { name: "Clustering", type: "exp" },
      { name: "NLP", type: "learn" }
    ]
  }
];

export default function HardSkills() {
  return (
    <section id="hard-skills" className="section-skills py-5">
      <div className="container-lg text-center">

        {/* HEADER */}
        <div className="mb-2">
          <h2 className="h3 mb-1">Hard Skills</h2>
          <p className="text-secondary mb-2">
            Technical skills grouped by domain and level of experience.
          </p>
        </div>

        {/* LEGEND */}
        <div className="skills-legend">
          <span className="legend-item">
            <span className="legend-dot exp"></span>
            Hands-on experience
          </span>
          <span className="legend-item">
            <span className="legend-dot study"></span>
            Studied / Applied
          </span>
          <span className="legend-item">
            <span className="legend-dot learn"></span>
            Learning roadmap
          </span>
        </div>

        {/* SKILLS CLOUD MAP */}
        <div className="skills-cloud-map">
          {skillsData.map((sector, idx) => (
            <div className={`cloud-sector sector-${idx}`} key={idx}>
              <span className="sector-kicker">{sector.sector}</span>
              <div className="sector-cloud">
                {sector.skills.map((skill, i) => (
                  <span className={`skill-pill skill-${skill.type}`} key={i}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}