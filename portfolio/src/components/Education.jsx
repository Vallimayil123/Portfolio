import { FaGraduationCap } from "react-icons/fa";

function Education() {
  const education = [
    {
      year: "2024 - 2028",
      title: "B.E. Computer Science and Engineering",
      institute: "Dr. N.G.P Institute of Technology, Coimbatore",
      score: "CGPA: 8.46 (Up to 4th Semester)",
    },
    {
      year: "2023 - 2024",
      title: "Higher Secondary",
      institute: "Literacy Mission Matriculation Hr. Sec. School",
      score: "93%",
    },
    {
      year: "2021 - 2022",
      title: "Secondary School",
      institute: "Literacy Mission Matriculation Hr. Sec. School",
      score: "95%",
    },
  ];

  return (
    <section
      id="education"
      className="bg-gray-900 text-white py-20 px-8"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          Education
        </h2>

        <div className="space-y-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-[1.02] transition"
            >
              <div className="flex items-center gap-4">
                <FaGraduationCap className="text-4xl text-blue-400" />

                <div>
                  <h3 className="text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-gray-300">
                    {item.institute}
                  </p>

                  <p className="text-blue-400 mt-2">
                    {item.year}
                  </p>

                  <p className="mt-2">
                    {item.score}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;