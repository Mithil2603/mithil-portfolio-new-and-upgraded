import React, { useEffect, useState } from "react";
import "./styles/Navbar.css";
import { NavLink, Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility
  const [isScrolled, setIsScrolled] = useState(false); // State to manage scroll
  const location = useLocation(); // Get the current route

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // Set scrolled state when scrolling beyond 20px
    };

    window.addEventListener("scroll", handleScroll); // Attach the scroll listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up listener
    };
  }, []);

  // Dynamic background: on scroll or specific routes
  const navbarClass = `nav position-fixed top-0 z-99 ${
    isScrolled || location.pathname !== "/" ? "scrolled" : ""
  }`;

  return (
    <>
      {/* Navbar */}
      <nav className={navbarClass}>
        <div className="px-1 d-flex justify-between align-items-center h-inherit">
          {/* Logo */}
          <Link to="/" className="text-white text-decoration-none">
            <span className="logo font-xl">my</span>
            <span className="logo font-xl color-orange">Goal</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleSidebar}
            className={`menu-button text-white bg-transparent hideOnPC ${
              isOpen ? "open" : ""
            }`}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#FFF"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#FFF"
              >
                <path d="M240-240v-80h720v80H120Zm200-200v-80h720v80H120Zm200-200v-80h720v80H120Z" />
              </svg>
            )}
          </button>

          {/* Desktop Navigation */}
          <ul className="d-flex gap-2 font-l hideOnMobile list-style-none justify-center align-center">
            <NavLink to="/" className="text-decoration-none text-white d-flex align-items-center nav-link">
              <li>Home</li>
            </NavLink>
            <NavLink to="/about" className="text-decoration-none text-white d-flex align-items-center nav-link">
              <li>About Me</li>
            </NavLink>
            <NavLink to="#" className="text-decoration-none text-white d-flex align-items-center nav-link">
              <li>Contact Me</li>
            </NavLink>
            <NavLink to="#" className="text-decoration-none text-white d-flex align-items-center nav-link">
              <li>Projects</li>
            </NavLink>
            <Link to="#" className="text-decoration-none text-white d-flex align-items-center nav-link">
              <button className="btn nav-link">Hire Me</button>
            </Link>
          </ul>
        </div>
      </nav>

      {/* Sidebar */}
      {isOpen && <div className="backdrop" onClick={closeSidebar}></div>}
      <section
        className={`SideBar position-fixed right-0 top-0 height-full z-98 ${
          isOpen ? "open" : "closed"
        }`}
      >
        <div className="d-flex flex-direction-col gap-2 w-100 p-3 mt-3">
          <NavLink
            to="/"
            className="text-decoration-none text-white list-style-none nav-link"
            onClick={closeSidebar}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-decoration-none text-white list-style-none nav-link"
            onClick={closeSidebar}
          >
            About Me
          </NavLink>
          <NavLink
            to="#"
            className="text-decoration-none text-white list-style-none nav-link"
            onClick={closeSidebar}
          >
            Contact Me
          </NavLink>
          <NavLink
            to="#"
            className="text-decoration-none text-white list-style-none nav-link"
            onClick={closeSidebar}
          >
            Projects
          </NavLink>
          <Link
            to="#"
            className="text-decoration-none text-white list-style-none nav-link"
            onClick={closeSidebar}
          >
            <button className="btn">Hire Me</button>
          </Link>
        </div>
      </section>
    </>
  );
}
