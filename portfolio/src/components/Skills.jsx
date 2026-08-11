function Skills() {
  const skills = [
    { name: "Java", level: "95%" },
    { name: "Spring Boot", level: "90%" },
    { name: "React", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "Python", level: "90%" },
    { name: "HTML & CSS", level: "95%" },
    { name: "PostgreSQL", level: "85%" },
    { name: "Git & GitHub", level: "90%" },
  ];

  return (
    <section
      id="skills"
      className="bg-gray-950 text-white py-20 px-8"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          Technical Skills
        </h2>

        <div className="space-y-8">

          {skills.map((skill, index) => (

            <div key={index}>

              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </div>

              <div className="w-full bg-gray-700 rounded-full h-3">

                <div
                  className="bg-blue-500 h-3 rounded-full"
                  style={{ width: skill.level }}
                ></div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;