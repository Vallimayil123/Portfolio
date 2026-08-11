import { FaTrophy, FaCode, FaMedal } from "react-icons/fa";

function Achievements() {
  const achievements = [
    {
      icon: <FaCode className="text-5xl text-yellow-400" />,
      title: "200+ LeetCode Problems",
      desc: "Solved 200+ DSA problems in Java.",
    },
    {
      icon: <FaCode className="text-5xl text-green-400" />,
      title: "150+ AlgoTutor Problems",
      desc: "Regular coding practice and problem solving.",
    },
    {
      icon: <FaTrophy className="text-5xl text-orange-400" />,
      title: "Runner Up",
      desc: "Black Box Challenge - KPR Institute of Technology",
    },
    {
      icon: <FaMedal className="text-5xl text-blue-400" />,
      title: "3rd Prize",
      desc: "Paper Presentation - SNS Institutions",
    },
  ];

  return (
    <section id="achievements" className="bg-gray-950 text-white py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          Achievements
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl text-center hover:scale-105 transition"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="text-gray-400 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;