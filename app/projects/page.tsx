import Image from "next/image";
import Footer from "@/components/Footer";
import { Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Git Gud",
    description:
      "A web-based Git sandbox that allows users to practice real Git workflows directly in the browser, with no local installation and zero risk to their actual system. (Private Repository)",
    image: "/images/projects/gitgud.png",
    link: "https://github.com/kabillanta/gitgud",
  },
  {
    id: 2,
    title: "Ephemera",
    description:
      "A serverless, edge-native real-time communication platform designed for temporary, anonymous conversations.",
    image: "/images/projects/ephemera.png",
    link: "https://github.com/kabillanta/ephemera",
  },
  {
    id: 3,
    title: "AutoEDA",
    description:
      "An intelligent, automated Exploratory Data Analysis (EDA) platform designed to help users understand datasets quickly and accurately",
    image: "/images/projects/autoeda.png",
    link: "https://github.com/kabillanta/Auto.EDA/",
  },
];

export default function ProjectSection() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-slate-50 py-30 px-4 md:px-8 flex-grow">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[24px_24px]"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Projects
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg max-w-5xl">
              I build projects by experimenting with new technologies and
              turning ideas into practical, real-world solutions.
            </p>
          </div>

          {/* Projects List */}
          <div className="space-y-8">
            {projects.map((project) => (
              <div
                key={project.id}
                // 'items-stretch' ensures both children (image and text) are same height
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row items-stretch"
              >
                {/* Left: Image Section */}
                {/* 1. aspect-video: Keeps 16:9 ratio on mobile.
                   2. md:aspect-auto: Removes fixed ratio on desktop.
                   3. md:h-auto: Allows div to stretch to fill the parent height defined by the text.
                */}
                <div className="relative w-full md:w-2/5 aspect-video md:aspect-auto md:h-auto bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    // object-cover is CRITICAL here. It crops the image to fit the dynamic height without stretching/distorting.
                    className="object-cover"
                  />
                </div>

                {/* Right: Content Section */}
                <div className="p-8 md:p-10 flex flex-col justify-center flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-8 text-base">
                    {project.description}
                  </p>
                  <div>
                    <a
                      href={project.link}
                      className="inline-flex items-center justify-center gap-2 w-full md:w-auto bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold text-xs py-3 px-8 rounded-full uppercase tracking-wider transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Github
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
