import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-gray-950 text-white py-20 px-8">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-blue-400 mb-10">
          Contact Me
        </h2>

        <div className="space-y-6 text-lg">

          <p className="flex justify-center items-center gap-3">
            <FaEnvelope />
            valliarun1842007@gmail.com
          </p>

          <p className="flex justify-center items-center gap-3">
            <FaPhone />
            8778237586
          </p>

          <p>
            <a
              href="https://github.com/Vallimayil123"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-blue-400"
            >
              <FaGithub />
              GitHub
            </a>
          </p>

          <p>
            <a
              href="https://www.linkedin.com/in/vallimayil-arunachalam-66791b378/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-blue-400"
            >
              <FaLinkedin />
              LinkedIn
            </a>
          </p>

        </div>

      </div>
    </section>
  );
}

export default Contact;