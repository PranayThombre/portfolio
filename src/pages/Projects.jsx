import React from "react";
import projects from "../data/projectData";
import './Projects.css';

const Projects = () => {
  return (
    <section className="px-4 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="rounded-xl border p-6 shadow-md flex flex-col items-center transition-all project-fade-in"
            style={{
              animationDelay: `${(index + 1) * 1}s` // 1st at 2s, 2nd at 4s, etc.
            }}
          >
            <img
              src={project.logo}
              alt={`${project.title} logo`}
              className="object-contain mb-4 h-full rounded"
            />

            <h3 className="title text-2xl font-bold mb-2">{project.title}</h3>

            <div className="flex gap-6 text-sm mb-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Github
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                See live
              </a>
            </div>

            <p className="font-semibold mb-2">{project.tech}</p>
            <p className="desc text-sm mb-4 text-center">{project.description}</p>

            <ul className="text-sm list-disc list-inside space-y-1 text-left">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
