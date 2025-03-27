import React from "react";
import { Link } from "react-router-dom";

const projects = [
  { title: "Project One", description: "This is project one." },
  { title: "Project Two", description: "This is project two." },
];

const Projects: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <div className="grid gap-4">
        {projects.map((project, index) => (
          <Link
            key={index}
            to={`/projects/${project.title.replace(/\s+/g, "-").toLowerCase()}`}
            className="block p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p>{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
