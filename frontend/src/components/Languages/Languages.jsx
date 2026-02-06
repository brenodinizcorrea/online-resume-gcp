import React from "react";
import "./Languages.css";

const languagesData = [
  { greeting: "Olá", name: "Portuguese", level: "Native" },
  { greeting: "Hello", name: "English", level: "Professional working proficiency" },
  { greeting: "Hola", name: "Spanish", level: "Professional working proficiency" },
];

export default function Languages() {
  return (
    <section id="languages" className="section-languages py-5">
      <div className="container-lg text-center">

        {/* SECTION HEADER */}
        <div className="mb-4">
          <h2 className="h3 mb-1">Languages</h2>
          <p className="text-secondary mb-0">
            Languages used in professional and academic contexts.
          </p>
        </div>

        {/* GRID */}
        <div className="languages-grid mx-auto">
          {languagesData.map((lang, idx) => (
            <div className="language-item" key={idx}>
              <div className="language-circle"><span>{lang.greeting}</span></div>
              <div className="language-name">{lang.name}</div>
              <div className="language-level">{lang.level}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
