import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SiLeetcode, SiCodechef } from "react-icons/si";

const Home = () => {
  return (
    <section className="home-section flex items-center justify-center min-h-screen px-10">
      <div className="hero-content max-w-3xl  text-center">
        <p className="name text-5xl font-medium mb-1 leading-relaxed font-black">
          Hi ! I'm <span className="text-gradient">Pranay </span>
          <span className="wave-hand">🤚</span>
        </p>

        <h1 className="title text-3xl sm:text-5xl font-semibold  my-4">
          <p className="highlight inline-block border-b-4 pb-1 ">
            <span className="word word1">Full </span>{" "}
            <span className="word word2">Stack </span>{" "}
            <span className="word word3">Developer </span>
          </p>
        </h1>

        <p className="bio text-base sm:text-lg leading-relaxed mt-4">
          I'm a 4th-year Computer Engineering student passionate about building
          intuitive and responsive web applications. Currently focusing on{" "}
          <strong>DSA ,React, Tailwind CSS, Node </strong>, and{" "}
          <strong>full-stack projects</strong>.
        </p>

        {/* Buttons */}
        <div className="button-group flex flex-wrap justify-center gap-4 mt-6">
          <a href="/Pranay_Thombre_Resume.pdf" target="_blank" rel="noreferrer">
            <button className="theme-btn">📄 Download Resume</button>
          </a>
          <Link to="/projects">
            <button className="theme-btn">💼 View Projects</button>
          </Link>
          <Link to="/contact">
            <button className="theme-btn">📬 Contact Me</button>
          </Link>
        </div>

        {/* Social Icons */}
        <div className="social-icons flex justify-center gap-6 text-2xl mt-10">
          <a
            href="https://www.linkedin.com/in/pranay-thombre-4a2595243/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/PranayThombre"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://leetcode.com/u/pranay_05/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLeetcode />
          </a>

          <a
            href="https://www.codechef.com/users/pranay_2705"
            target="_blank"
            rel="noreferrer"
          >
            <SiCodechef />
          </a>

          <a
            href="https://www.instagram.com/pranay_thombre05?igsh=Zml1NzJpcGcwMGN6"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

          <a href="mailto:pranaythombre05@gmail.com">
            <IoIosMail />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
