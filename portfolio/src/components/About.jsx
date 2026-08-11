import { FaJava, FaPython, FaReact, FaGithub } from "react-icons/fa";
import { SiSpringboot, SiPostgresql } from "react-icons/si";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-950 text-white px-8 py-20"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-blue-400 mb-10">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <h3 className="text-3xl font-semibold mb-4">
              Computer Science Undergraduate
            </h3>

            <p className="text-gray-300 leading-8">
              I am <span className="text-blue-400 font-semibold">Vallimayil</span>,
              a Computer Science Engineering undergraduate at
              Dr. N.G.P Institute of Technology with a CGPA of
              <span className="text-blue-400 font-semibold"> 8.46</span>.
            </p>

            <p className="text-gray-300 leading-8 mt-5">
              I enjoy building scalable web applications using
              Java, Spring Boot, React, and PostgreSQL. I also
              have a strong interest in Data Structures &
              Algorithms and have solved over
              <span className="text-blue-400 font-semibold">
                {" "}200+ LeetCode problems.
              </span>
            </p>

            <p className="text-gray-300 leading-8 mt-5">
              My goal is to become a skilled Software Engineer and
              contribute to impactful real-world projects.
            </p>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-3 gap-6 text-center">

            <div className="bg-gray-900 rounded-xl p-6 hover:scale-105 transition">
              <FaJava className="text-5xl mx-auto text-orange-500" />
              <p className="mt-3">Java</p>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 hover:scale-105 transition">
              <FaReact className="text-5xl mx-auto text-cyan-400" />
              <p className="mt-3">React</p>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 hover:scale-105 transition">
              <SiSpringboot className="text-5xl mx-auto text-green-500" />
              <p className="mt-3">Spring Boot</p>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 hover:scale-105 transition">
              <FaPython className="text-5xl mx-auto text-yellow-400" />
              <p className="mt-3">Python</p>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 hover:scale-105 transition">
              <SiPostgresql className="text-5xl mx-auto text-blue-500" />
              <p className="mt-3">PostgreSQL</p>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 hover:scale-105 transition">
              <FaGithub className="text-5xl mx-auto" />
              <p className="mt-3">GitHub</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;