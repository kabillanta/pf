export default function TechnologiesSection() {
  // The list of technologies exactly as shown in your image
  const technologies = [
    "Python",
    "Typescript",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Next.js",
    "FastAPI",
    "Firebase",
    "Git & GitHub",
    "REST APIs",
    "Postman",
    "LangChain",
    "GCP", 
    "Machine Learning",
    "TensorFlow",
    "Figma",
    "Flutter"
  ];

  return (
    <section className="bg-slate-50 py-16 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-sm p-8 md:p-12 lg:p-16 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Technologies I Work With
        </h2>

        {/* Description Text */}
        <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mb-10">
    I learn best by building and experimenting. The technologies below are tools I actively use to explore ideas, solve real problems, and turn concepts into working solutions. I focus on understanding the fundamentals while staying curious about newer technologies that help me build better, more scalable systems.
        </p>

        {/* Tech Chips / Pills Container */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-5 py-2.5 bg-gray-200 text-gray-800 text-sm md:text-base font-medium rounded-full hover:bg-gray-300 transition-colors duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
