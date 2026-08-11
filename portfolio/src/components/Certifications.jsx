function Certifications() {

  const certificates = [
    "Python - Spoken Tutorial",
    "HTML - Spoken Tutorial",
    "Full Stack with Python & Django",
    "AWS Prompt Engineering",
    "NPTEL - Internet of Things",
    "NPTEL - Cloud Computing",
  ];

  return (
    <section
      id="certifications"
      className="bg-gray-900 text-white py-20 px-8"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {certificates.map((certificate, index) => (

            <div
              key={index}
              className="bg-gray-800 rounded-xl p-5 hover:bg-blue-600 transition"
            >
              {certificate}
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;