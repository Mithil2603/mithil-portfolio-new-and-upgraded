import React from "react";
import "./styles/Projects.css";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <>
      <section className="container-fluid blue-bg projects">
        <div className="w-100 bg-orange">
          <div className="p-fixed w-100">
            <h1 className="text-center m-0">Projects</h1>
          </div>
          <div className="p-relative mb-16vh">
            <hr />
            <div className="bg-black w-100 border-box">
              <p className="color-orange mb-0">Showcase</p>
              <h1 className="mt-0 media">
                Explore My Notable Projects and Achievements
              </h1>
              <p className="color-gray fs-3">
                Discover a curated selection of my work that highlights my
                creativity and expertise. Each project is a testament to my
                dedication to delivering high-quality results. Drive into
                details to see how I can bring you vision to life.
              </p>
            </div>
            <div className="blocks bg-black w-100 border-box">
              <div className="desc blocks-1">
                <div className="block1">
                  <div className="p-img">
                    <img
                      src="https://mithil2603.github.io/inotes/static/media/Book.6ecf25c246ccf9c06cc8af4eab4792fd.svg"
                      alt="web design"
                      className="project-img"
                    />
                  </div>
                  <h2 className="color-black text-decoration-none">iNotes</h2>
                  <p className="color-gray h-50">
                    <b>iNotes</b> is a web application designed specifically for BCA
                    and BSc CS students. It serves as a comprehensive platform
                    for accessing academic notes, including a collection of
                    Linux commands. Students can explore these resources to
                    enhance their understanding, and the convenient copy-paste
                    feature allows for practical application during their
                    learning process. With iNotes, students can efficiently
                    manage their study materials and stay organized throughout
                    their academic journey, also added Sem 6 notes.
                  </p>
                  <Link
                    to="https://mithil2603.github.io/inotes/"
                    className="btn text-decoration-none"
                  >
                    View Project
                  </Link>
                </div>
                <div className="block1">
                  <div className="p-img">
                    <img
                      src="https://mithilsuthar-portfolio.netlify.app/static/media/iNotes.d69d056c8f4b146c349f5f45c92806e4.svg"
                      alt="web design"
                      className="project-img"
                    />
                  </div>
                  <h2 className="color-black text-decoration-none">
                    iNotes{" "}
                    <span className="fs-small color-gray">(Older Version)</span>
                  </h2>
                  <p className="color-gray h-50">
                    <b>iNotes</b> is a web application designed specifically for BCA
                    and BSc CS students. It serves as a comprehensive platform
                    for accessing academic notes, including a collection of
                    Linux commands. Students can explore these resources to
                    enhance their understanding, and the convenient copy-paste
                    feature allows for practical application during their
                    learning process. With iNotes, students can efficiently
                    manage their study materials and stay organized throughout
                    their academic journey. The Older Version.
                  </p>
                  <Link
                    to="https://mithil2603.github.io/misblog/"
                    className="btn text-decoration-none"
                  >
                    View Project
                  </Link>
                </div>
                <div className="block1">
                  <div className="p-img">
                    <img
                      src="https://radheenterprise.netlify.app/static/media/RadheEnterprise.c5bd388e583d1f3448fd59c6d582f19d.svg"
                      alt="web design"
                      className="project-img-1"
                    />
                  </div>
                  <h2 className="color-black text-decoration-none">
                    Machinery Management System
                  </h2>
                  <p className="color-gray h-50">
                    The <b>Machinery Business Management System</b> is a
                    comprehensive web-based platform designed to streamline the
                    operations of machinery businesses by providing a seamless
                    experience for both owners and customers. It allows business
                    owners to showcase their machinery products online, manage
                    categories, and efficiently handle customer orders. The
                    system features a secure payment integration where customers
                    can place orders and complete transactions via NEFT or other
                    methods. Additionally, it includes a delivery and service
                    management module to track order fulfillment and post-sale
                    services. An intuitive <b>admin dashboard</b> enables
                    businesses to manage users, orders, payments, and customer
                    feedback with ease. To enhance decision-making, the platform
                    also provides <b>dynamic reports</b>, allowing admins to
                    generate and export essential business data in formats like
                    <b>PDF and CSV</b>. Built using <b>React.js</b> for the frontend,
                    <b>Node.js and Express.js</b> for the backend, and <b>MySQL</b>
                    for data management, the system is designed for scalability
                    and efficiency. With secure user authentication, including
                    email verification and password reset functionality, this
                    solution ensures a reliable and user-friendly experience for
                    businesses looking to enhance their online presence and
                    operational workflow. 🚀 (But I have not hosted the backend, so it won't show products, and you cannot perform any operations in the site.)
                  </p>
                  <Link
                    to="https://radheenterprise.netlify.app/"
                    className="btn text-decoration-none"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
