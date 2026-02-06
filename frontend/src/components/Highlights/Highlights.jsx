import React from "react";
import "./Highlights.css";

const highlightsData = [
  {
    kicker: "Applied AI",
    title: "Machine Learning Delivery",
    text: "From data extraction to validation and stakeholder-ready results.",
    badges: ["Classification", "Time Series", "Clustering"]
  },
  {
    kicker: "Data Platform",
    title: "GCP Data Platforms",
    text: "Building reliable pipelines and curated layers (silver/gold) for analytics.",
    badges: ["BigQuery", "Airflow", "Terraform"]
  },
  {
    kicker: "Analytics",
    title: "Insights & Visualization",
    text: "Dashboards and reporting that enable better decisions across business areas.",
    badges: ["Looker Studio", "Power BI", "Superset"]
  },
  {
    kicker: "Leadership",
    title: "People & Communication",
    text: "Leading cultural fit interviews and fostering human-centered, inclusive team environments.",
    badges: ["Active Listening", "Empathy", "Team Dynamics"]
  }
];

export default function Highlights({ bgColor = "var(--bg-alt)" }) {
  return (
    <section className="highlights-section py-5" style={{ backgroundColor: bgColor }}>
      <div className="container-lg">
        <div className="section-header mb-4">
          <h2 className="section-title">Highlights</h2>
          <p className="section-subtitle">
            Where I create value across data, AI, and applied research.
          </p>
        </div>

        <div className="highlights-grid">
          {highlightsData.map((h, idx) => (
            <div className="highlight-card" key={idx}>
              <div className="card-body">
                <div className="highlight-kicker">{h.kicker}</div>
                <h3 className="h5">{h.title}</h3>
                <p>{h.text}</p>
                <div className="highlight-badges">
                  {h.badges.map((b, i) => (
                    <span className="badge" key={i}>{b}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
