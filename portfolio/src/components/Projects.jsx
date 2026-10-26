import { FaGithub } from "react-icons/fa";

function Projects() {

  const projects = [
    {
      title: "AI Crime Hotspot Predictor",
      tech: "Spring Boot • React • Python • Scikit-learn",
      github: "https://github.com/Vallimayil123/AI-Crimespot-Predictor",
      description:
        "Predicts crime-prone locations using Machine Learning and interactive dashboards.",
    },

    {
      title: "Production Planning System",
      tech: "Spring Boot • React • PostgreSQL",
      github:
        "https://github.com/Vallimayil123/Blueprint-ProductionPlanningSystem",
      description:
        "Role-based production planning application with inventory and employee management.",
    },

    {
      title: "Lost and Found Portal",
      tech: "Python • Django",
      github:
        "https://github.com/Vallimayil123/Project-lost-and-found-portal",
      description:
        "Web application for reporting and finding lost items.",
    },

    {
      title: "Offline AI Vehicle Assistant",
      tech: "Python • RAG • Streamlit • LLM ",
      github:
        "https://github.com/Vallimayil123/offline-vehicle-assistant",
      description:
        "An intelligent assistant that can answer vehicle-related questions, explain dashboard warning lights, and help troubleshoot common problems — even without an internet connection.",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gray-900 text-white py-20 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-blue-300">
                {project.title}
              </h3>

              <p className="mt-4 text-gray-300">
                {project.description}
              </p>

              <p className="mt-4 text-sm text-gray-400">
                {project.tech}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-blue-400 hover:text-blue-300"
              >
                <FaGithub />
                View on GitHub
              </a>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;