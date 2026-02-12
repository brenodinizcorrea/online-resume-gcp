import React from "react";
import "./HardSkills.css";

const skillsData = [

  {
    sector: "Programming",
    skills: [
      { name: "Python", type: "exp" },
      { name: "SQL", type: "exp" },
      { name: "JavaScript (ES6+)", type: "study" },
      { name: "React", type: "study" },
      { name: "HTML5", type: "study" },
      { name: "CSS3", type: "study" }
    ]
  },
  {
    sector: "Data Engineering & Platforms",
    skills: [
      { name: "BigQuery", type: "exp" },
      { name: "DataForm", type: "exp" },
      { name: "Airflow", type: "exp" },
      { name: "Cloud Storage", type: "exp" }
    ]
  },
  {
    sector: "Statistics & Experimentation",
    skills: [
      { name: "A/B Testing", type: "exp" },
      { name: "Statistical Inference", type: "exp" },
      { name: "Sampling", type: "study" }
    ]
  },
  {
    sector: "Machine Learning & AI",
    skills: [
      { name: "Classification", type: "exp" },
      { name: "Clustering", type: "exp" },
      { name: "Time Series", type: "exp" },
      { name: "NLP", type: "learn" }
    ]
  },


  {
    sector: "Cloud & DevOps",
    skills: [
      { name: "Terraform", type: "exp" },
      { name: "GitHub", type: "exp" },
      { name: "GitLab", type: "exp" },
      { name: "Docker", type: "study" },
      { name: "Cloud Run", type: "study" },
      { name: "Artifact Registry", type: "study" },
      { name: "CI/CD (GitHub Actions)", type: "study" },
      { name: "DNS & Domain Configuration", type: "study" }
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