import React from "react";
import "./styles/About.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container-fluid">
      <div className="about-container">
        {/* Hero Section */}
        <section className="main-container">
          <div className="hero-content">
            <h1 className="m-0">About Me</h1>
            <p>
              Passionate{" "}
              <span className="highlight">Frontend & MERN Stack Developer</span>{" "}
              crafting intuitive, high-performing web applications.
            </p>
          </div>
        </section>
        <hr />
        <div className="bg-black">
          {/* My Journey Section */}
          <section className="journey">
            <div className="journey-content">
              <h2 className="color-orange">My Journey</h2>
              <p>
                Hey, I'm <span className="highlight">Mithil Suthar</span>. My
                journey into web development started with a deep curiosity about
                how websites work. Over time, I mastered technologies like{" "}
                <strong className="color-orange">
                  React, Node.js, Express, and MongoDB
                </strong>{" "}
                to build scalable, full-stack applications.
              </p>
              <p>
                I thrive on creating <strong>seamless user experiences</strong>{" "}
                and solving complex challenges with clean, efficient code. Every
                project I work on is driven by a commitment to performance,
                accessibility, and aesthetic design.
              </p>
            </div>
          </section>

          {/* Skills & Technologies Section */}
          <section className="skills">
            <h2>Tech Stack & Skills</h2>
            <div className="skills-list">
              {/* Programming Languages */}
              <div className="skill-group">
                <h3>Programming Languages</h3>
                <div className="skill-items">
                  <span className="btn-skill">JavaScript (ES6+)</span>
                  <span className="btn-skill">PHP</span>
                  <span className="btn-skill">C & C++</span>
                  <span className="btn-skill">Core Java</span>
                  <span className="btn-skill">ASP.Net</span>
                </div>
              </div>

              {/* Frameworks & Libraries */}
              <div className="skill-group">
                <h3>Frameworks & Libraries</h3>
                <div className="skill-items">
                  <span className="btn-skill">React.js</span>
                  <span className="btn-skill">Node.js</span>
                  <span className="btn-skill">Express.js</span>
                  <span className="btn-skill">Tailwind CSS</span>
                  <span className="btn-skill">Bootstrap</span>
                </div>
              </div>

              {/* Databases */}
              <div className="skill-group">
                <h3>Databases</h3>
                <div className="skill-items">
                  <span className="btn-skill">MongoDB</span>
                  <span className="btn-skill">SQL</span>
                  <span className="btn-skill">MySQL</span>
                </div>
              </div>

              {/* Tools & Platforms */}
              <div className="skill-group">
                <h3>Tools & Platforms</h3>
                <div className="skill-items">
                  <span className="btn-skill">Git & GitHub</span>
                  <span className="btn-skill">VS Code</span>
                  <span className="btn-skill">Postman</span>
                </div>
              </div>
            </div>
          </section>

          {/* Why Work With Me */}
          <section className="why-me">
            <h2 className="color-orange">Why Work With Me?</h2>
            <ul>
              <li className="pb-2">🔥 Passionate about modern web technologies</li>
              <li className="pb-2">
                🚀 Focused on building high-performance, scalable applications
              </li>
              <li className="pb-2">🎨 Strong eye for UI/UX design and user experience</li>
              <li className="pb-2">💡 Always learning and keeping up with the latest trends</li>
            </ul>
          </section>

          {/* Fun Facts */}
          <section className="faqs-section w-100">
            <h2>FAQs</h2>
            <p className="faqs-subtitle">
              Find answers to your most common questions about my work and
              services:
            </p>

            <div className="faqs-container w-100">
              {/* FAQ 1: Pricing */}
              <div className="faq-item">
                <h3>What is your pricing?</h3>
                <p>
                  I follow a structured approach that begins with understanding
                  your needs. After gathering insight, I create tailored
                  solutions to meet your goals. Collaboration is key throughout
                  the project.
                </p>
                <p>
                  My pricing is based on the scope and complexity of each
                  project. I provide transparent quotes after our initial
                  discussion. This ensures you know exactly what to expect.
                </p>
              </div>

              {/* FAQ 2: Availability */}
              <div className="faq-item">
                <h3>What is your availability?</h3>
                <p>
                  I strive to accommodate my clients’ timelines. Availability
                  can vary based on current projects, so I recommend reaching
                  out for the latest updates. I prioritize clear communication
                  regarding deadlines.
                </p>
              </div>

              {/* FAQ 3: Samples */}
              <div className="faq-item">
                <h3>Can I see samples?</h3>
                <p>
                  Absolutely! I have a portfolio showcasing various projects.
                  Feel free to explore my website for detailed examples.
                </p>
              </div>

              {/* FAQ 4: Getting Started */}
              <div className="faq-item">
                <h3>How do I start?</h3>
                <p>
                  Getting started is easy! Simply reach out via the contact form
                  or email. We can schedule a consultation to discuss your needs
                  and how I can help.
                </p>
              </div>

              {/* FAQ 5: Still Have Questions? */}
              <div className="faq-item">
                <h3>Still have questions?</h3>
                <p>
                  I'm here to help! Feel free to contact me anytime, and I'll be
                  happy to assist you.
                </p>
              </div>
            </div>
          </section>

          {/* Call-to-Action */}
          <section className="cta">
            <h2>Let's Connect!</h2>
            <p>
              Interested in working together or just want to say hi? Feel free
              to reach out.
            </p>
            <div className="d-flex gap-1">
              <Link to="/contact" className="btn text-decoration-none">
                Get in Touch
              </Link>
              <a
                href="https://drive.google.com/file/d/1DLgZqOPqHLSHnhfC7yKI4LWtOywRIA6n/view"
                target="_blank"
                rel="noopener noreferrer"
                className="btn text-decoration-none"
              >
                View Resume
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
