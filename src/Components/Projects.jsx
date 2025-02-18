import React from "react";
import "./styles/Projects.css";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <>
      <section className="container-fluid blue-bg">
        <div className="w-100">
          <h1 className="text-center m-0 pt-5 pb-5">Projects</h1>
          <hr />
          <div className="bg-black w-100 border-box">
            <p className="color-orange mb-0">Showcase</p>
            <h1 className="mt-0">
              Explore My Notable Projects and Achievements
            </h1>
            <p className="color-gray fs-3">
              Discover a curated selection of my work that highlights my
              creativity and expertise. Each project is a testament to my
              dedication to delivering high-quality results. Drive into details
              to see how I can bring you vision to life.
            </p>
          </div>
          <div className="blocks bg-black w-100 border-box">
            <div className="projects">
              <div className="p-img">
                <img
                  src="https://mithil2603.github.io/inotes/static/media/Book.6ecf25c246ccf9c06cc8af4eab4792fd.svg"
                  alt="web design"
                  className="project-img"
                />
              </div>
              <div className="desc">
                <h2 className="color-black text-decoration-none">iNotes</h2>
                <p className="color-gray">
                  iNotes is a web application designed specifically for BCA and
                  BSc CS students. It serves as a comprehensive platform for
                  accessing academic notes, including a collection of Linux
                  commands. Students can explore these resources to enhance
                  their understanding, and the convenient copy-paste feature
                  allows for practical application during their learning
                  process. With iNotes, students can efficiently manage their
                  study materials and stay organized throughout their academic
                  journey, also added Sem 6 notes.
                </p>
                <Link to="https://mithil2603.github.io/inotes/" className="btn">
                  View Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
