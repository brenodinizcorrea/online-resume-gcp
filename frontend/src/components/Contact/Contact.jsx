import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section-contact py-5">
      <div className="container-lg">

        <div className="contact-wrapper text-center">
          <h2 className="h3 mb-2">Get in touch</h2>
          <p className="text-secondary mb-4">
            Open to conversations around data, AI, and applied research.
          </p>

          <div className="linkedin">
            <a
              href="https://www.linkedin.com/in/breno-correa/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              LinkedIn
            </a>
          </div>
          <div className="email">
            <span className="contact-email">
              brenodinizcorrea@gmail.com
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
