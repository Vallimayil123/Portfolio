import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-10 items-center">

        {/* Left */}

        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-xl text-blue-400">Hello 👋 I'm</p>

          <h1 className="text-6xl font-extrabold mt-3">
            Vallimayil
          </h1>

          <TypeAnimation
            sequence={[
              "Java Full Stack Developer",
              2000,
              "Spring Boot Developer",
              2000,
              "React Developer",
              2000,
              "DSA Enthusiast",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-3xl text-gray-300 mt-4"
          />

          <p className="mt-6 text-gray-400 leading-8">
            Passionate Computer Science undergraduate
            building scalable full-stack applications
            using Java, Spring Boot, React and Machine Learning.
          </p>

          <div className="flex gap-5 mt-8">

            <a
              href="https://github.com/Vallimayil123"
              target="_blank"
            >
              <FaGithub className="text-3xl hover:text-blue-400 transition" />
            </a>

            <a
              href="https://www.linkedin.com/in/vallimayil-arunachalam-66791b378/"
              target="_blank"
            >
              <FaLinkedin className="text-3xl hover:text-blue-400 transition" />
            </a>

            <a
              href="https://leetcode.com/u/Vallimayil123/"
              target="_blank"
            >
              <FaCode className="text-3xl hover:text-yellow-400 transition" />
            </a>

          </div>

          <a
            href="/resume.pdf"
            download
          >
            <button className="mt-8 bg-blue-500 px-8 py-3 rounded-xl hover:bg-blue-600 transition">
              Download Resume
            </button>
          </a>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <img
            src={profile}
            alt="Profile"
            className="w-80 h-90 rounded-full object-cover border-8 border-blue-500 shadow-[0_0_50px_#3b82f6]"
          />

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;