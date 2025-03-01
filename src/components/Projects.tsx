import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import port from "/images/profile.png";
import port1 from "/images/portfolio.png";
import flutter from "/images/flutter.jpg";
import port2 from "/images/react-portfolio.png";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Portfolio",
      description: "A portfolio to display my skills using HTML5 and CSS3",
      image: port,
      category: "web",
      technologies: ["HTML5", "css3"],
      status: "completed",
      liveLink: "https://wizardvijay123.github.io/my-profile/",
      githubLink: "https://github.com/Wizardvijay123/my-profile",
    },
    {
      id: 2,
      title: "Portfolio",
      description:
        "A portfolio to display my skills using Javascript, HTML5 and CSS3",
      image: port1,
      category: "web",
      technologies: ["HTML5", "CSS3", "Javascript"],
      status: "completed",
      liveLink: "https://wizardvijay123.github.io/portfolio/",
      githubLink: "https://github.com/Wizardvijay123/portfolio",
    },
    {
      id: 3,
      title: "E-commerce Mobile App",
      description: "A mobile for E-commerce for a small scale business.",
      image: flutter,
      category: "mobile",
      technologies: ["React Native", "Redux", "Node.js", "MongoDB"],
      status: "Under-development",
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      id: 4,
      title: "porsenal-Portfolio",
      description: "A personal portfolio for showcase my tech expertise.",
      image: port2,
      category: "web",
      technologies: ["Reactjs", "HTML5", "CSS3", "JavaScript"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    // {
    //   id: 5,
    //   title: "Real Estate Listing Platform",
    //   description: "A platform for real estate listings with advanced search, filtering, and virtual tour capabilities.",
    //   image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
    //   category: "web",
    //   technologies: ["Angular", "Express", "PostgreSQL", "Google Maps API"],
    //   liveLink: "https://example.com",
    //   githubLink: "https://github.com"
    // },
    // {
    //   id: 6,
    //   title: "Healthcare Mobile Application",
    //   description: "A mobile app for healthcare providers to manage patient records, appointments, and medical history.",
    //   image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    //   category: "mobile",
    //   technologies: ["Flutter", "Firebase", "RESTful APIs"],
    //   liveLink: "https://example.com",
    //   githubLink: "https://github.com"
    // }
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project reflects my
            passion for creating intuitive, efficient, and visually appealing
            digital solutions.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            {["all", "web", "mobile", "design"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  filter === category
                    ? "bg-indigo-600 text-white"
                    : "text-gray-600 hover:text-indigo-600"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
                  >
                    Live Demo
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-700 hover:text-gray-900"
                  >
                    Source Code
                    <Github size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Wizardvijay123?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors"
          >
            View More Projects
            <Github size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
