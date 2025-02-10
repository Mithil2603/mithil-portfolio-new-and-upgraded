import React from "react";
import "./styles/Main.css";
import bgVideo from "./img/bgvideo.mp4";
// import pic from "./img/Picsart_25-01-25_21-14-17-386.png"

export default function Main() {
  return (
    <>
      <div className="container">
        <video className="background-video" autoPlay loop muted playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="content">
          <div className="right">
            <h1 className="color-orange">
              <span className="fs-5 color-white">I'm &nbsp;</span>Mithil{" "}
              <span className="color-white">Suthar</span>
            </h1>
            <div>
              <h2 className="">
                <span className="color-orange">Frontend</span> and{" "}
                <span className="color-orange">MERN Stack</span> Developer
              </h2>
            </div>
            <p className="fs-3">
              "Crafting seamless, interactive web experiences with the power of
              React and the <span className="color-orange">MERN stack</span>
              —building the future, one line of code at a time."
            </p>
          </div>
        </div>
      </div>
      <section className="hero">
        <div className="start">
          <p className="color-orange mb-0">Innovation</p>
          <h1 className="mt-0">
            Crafting Digital Experiences with Precision and Passion
          </h1>
          <p className="color-gray fs-3">
            Mithil Suthar specializes in web design and development, blending
            creativity with technical expertise. His work reflects a commitment
            to quality and user-centric solutions.
          </p>
          <div className="box-container">
            <div className="first flex-shrink-1">
              <h2>Design</h2>
              <p className="color-gray fs-5">
                Creating visually stunning and functional websites.
              </p>
            </div>
            <div className="second flex-shrink-1">
              <h2>Development</h2>
              <p className="color-gray fs-5">
                Building robust applications with seamless user experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="end">
          <img
            src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg"
            alt="laptop"
          />
        </div>
      </section>
      <hr />
      <section className="hero-1">
        <div className="uppersection text-center">
          <p className="color-orange m-0 mb-1">Services</p>
          <h1 className="mt-0">Explore Our Creative Service Offerings</h1>
          <div className="blocks">
            <div className="block1">
              <img
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg"
                alt="web design"
                className="img"
              />
              <h2>Visually Stunning & User-Friendly Web Design</h2>
              <p className="color-gray">
                I craft modern, responsive, and visually appealing websites that
                not only look great but also drive engagement. With a strong
                focus on usability and aesthetics, I ensure that every design
                enhances user experience and meets business goals.
              </p>
            </div>
            <div className="block1">
              <img
                src="https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg"
                alt="web development"
                className="img"
              />
              <h2>Robust & Scalable Web Development</h2>
              <p className="color-gray">
                From interactive front-end designs to powerful back-end systems,
                I develop full-stack applications that are secure, scalable, and
                high-performing. Leveraging the MERN stack, I build dynamic and
                efficient web solutions tailored to your needs.
              </p>
            </div>
            <div className="block1">
              <img
                src="https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg"
                alt="UI/UX design"
                className="img"
              />
              <h2>Intuitive UI/UX for Better User Engagement</h2>
              <p className="color-gray">
                I specialize in designing seamless and intuitive user
                experiences that improve usability and engagement. Through
                research-driven design and best practices, I ensure that your
                web application delivers smooth interactions and keeps users
                coming back.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
