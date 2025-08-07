import React from "react";
import "./About.css"; 
import { motion } from "framer-motion";
// Optional for styling

const About = () => {
  return (
    <div className="about-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
      <h1 className="text-5xl font-bold no-underline border-none">Personal introduction</h1>

      <section className="intro-section text-base">
        <p className="para">
          Welcome to my website! My name is <strong>Pranay Thombre</strong>, and I am <strong>Full Stack
          Web Developer</strong>. I created this website to share my passion and to
          connect with like-minded individuals.
          <span>
            A little bit about me: For over 2.5 years, I've been living in Pune,
            India and working in the web field where I've developed a strong
            foundation in web development, UI/UX design, and modern frontend
            tools. Over time, I've worked on various academic and personal
            projects that involved technologies like HTML, CSS, JavaScript,
            React, Firebase, and more. My goal is to keep learning and evolving
            as a developer, and this site reflects my dedication to that growth.
          </span>
        </p>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/pranay-thombre-4a2595243/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |
          <a
            href="https://github.com/PranayThombre"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GitHub
          </a>{" "}
          |<a href="mailto:pranaythombre05@gmail.com"> Email</a>
        </div>
      </section>
      </motion.div>

       <motion.section
        className="experience-section py-12 px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <h2 className="text-3xl font-bold text-center mb-10 text-[var(--text-primary)]">
          Experience
        </h2>

        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {/* Experience Card 1 */}
          <div className="flex flex-col md:flex-row items-start gap-6 p-6 rounded-xl bg-[var(--card-bg)] shadow-md transition hover:shadow-lg">
            {/* Icon or logo */}
            <div className="w-16 h-16 flex-shrink-0 bg-[var(--timeline-dot)] text-white flex items-center justify-center text-2xl font-bold rounded-full shadow-inner">
              🛠️
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex justify-between items-center flex-wrap">
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                  Web Developer Intern
                </h3>
                <span className="text-sm font-medium text-[var(--text-secondary)] bg-[var(--timeline-dot)]  px-2 py-1 rounded-full">
                  Jun 2022 – Aug 2022
                </span>
              </div>
              <p className="mt-1 text-[var(--text-secondary)] font-medium text-gray-500">
                E-Katta Innovators LLP
              </p>
              <ul className="list-disc list-inside mt-2 text-sm text-[var(--text-secondary)] space-y-1">
                <li>
                  Worked closely with the design team to revamp web UI with
                  modern aesthetics and usability in mind.
                </li>
                <li>
                  Created and maintained reusable React components using
                  functional architecture and hooks.
                </li>
                <li>
                  Implemented client-side form validation and feedback using
                  JavaScript and custom UI states.
                </li>
                <li>
                  Built responsive layouts that supported consistent experiences
                  across mobile and desktop.
                </li>
                <li>
                  Improved code reusability and readability by following
                  component-based architecture and modular SCSS/CSS.
                </li>
                <li>
                  Collaborated with backend developers to integrate RESTful APIs
                  and debug real-time data flow issues.
                </li>
                <li>
                  Used Git for version control and participated in regular team
                  reviews via GitHub pull requests.
                </li>
              </ul>
            </div>
          </div>

          {/* You can duplicate this for more experiences */}
        </div>
       </motion.section>
      <motion.section
        className="education-section py-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <h2 className=" text-3xl font-bold text-center mb-10 text-[var(--text-primary)] ">
          Education
        </h2>

        <div className="relative timeline-wrapper text-base sm:text-lg">
          {/* Degree */}
          <div className="timeline-item flex flex-col md:flex-row-reverse items-center md:items-start mb-10 relative">
            <div className="timeline-dot" />
            <div className="timeline-line" />
            <div className="w-full md:w-1/2 md:pl-8">
              <div className="bg-[var(--card-bg)] p-6 rounded-2xl shadow-md text-[var(--text-primary)]">
                <h3 className="text-xl font-bold mb-1">
                  {" "}
                  🎓 B.E. in Computer Engineering
                </h3>
                <p className="font-medium text-[var(--text-secondary)] text-gray-500">
                  {" "}
                  Ajeenkya DY Patil School of Engineering, Pune
                </p>
                <ul className="list-disc list-inside mt-2 text-sm">
                  <div>
                    {" "}
                    📅 <i>2023 – 2026</i>
                  </div>
                  <div>
                    <i>Coursework </i>: Computer Network ,DSA, Software Engineering,
                    Machine Learning, Web, DBMS, OS.
                  </div>
                  <div>
                    <i>CGPA: 8.76 / 10</i>
                  </div>
                </ul>
              </div>
            </div>
          </div>

          {/* Diploma */}
          <div className="timeline-item flex flex-col md:flex-row items-center md:items-start mb-10 relative">
            <div className="timeline-dot" />
            <div className="timeline-line" />
            <div className="w-full md:w-1/2 md:pr-8">
              <div className="bg-[var(--card-bg)] p-6 rounded-2xl shadow-md text-[var(--text-primary)]">
                <h3 className="text-xl font-bold mb-1">
                  {" "}
                  🎓 Diploma in Computer Engineering
                </h3>
                <p className="font-medium text-[var(--text-secondary)] text-gray-500">
                  Government Polytechnic College, Ambad
                </p>
                <ul className="list-disc list-inside mt-2 text-sm">
                  <div>
                    📅 <i>2020 – 2023</i>
                  </div>
                  <div>
                    <i>Coursework </i>: DSA, Web Development,Python,PHP,Android, DBMS,
                    OS.
                  </div>
                  <div>
                    <i>Percentage: 85.54% </i>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
       </motion.section>
    </div>
  );
};

export default About;
