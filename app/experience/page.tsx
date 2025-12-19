import Image from "next/image";
import Footer from "@/components/Footer";

// --- Data: Professional Experience ---
const professionalExperiences = [
  {
    id: 1,
    company: "Spinabot",
    role: "SDE Intern",
    duration: "July 2025 - October 2025",
    location: "New Jersey, USA - Remote",
    description:
      "Developed and deployed backend services for core features using Python, LangChain, and FastAPI. Engineered an end-to-end AI pipeline that automated a critical workflow, reducing manual workload by 50%. Contributed to the successful MVP launch through iterative development and system integration.",
    logo: "/images/logos/spinabot.jpg",
  },
];

// --- Data: Community Experience ---
const communityExperiences = [
  {
    id: 1,
    company: "GDG Cloud Bengaluru",
    role: "Core Member",
    duration: "August 2025 - Present",
    location: "Bengaluru, India",
    description:
      "Co-Leading a community of 5000+ developers. Organized 5+ meetups and the annual Cloud Community days 2025, fostering a culture of learning and collaboration in the local tech ecosystem.",
    logo: "/images/logos/gdgcblr.png",
  },
  {
    id: 2,
    company: "AgentsNexus",
    role: "Volunteer",
    duration: "September 2025 - Present",
    location: "Bengaluru, India",
    description:
      "India's Premier Conference on Agentic AI. We're bringing together developers, researchers, and technology leaders for an immersive experience dedicated to the next wave of AI-powered, autonomous systems.",
    logo: "/images/logos/agentsnexus.png",
  },
  {
    id: 3,
    company: "GDG Bengaluru",
    role: "Volunteer",
    duration: "December 2024 - Present",
    location: "Bengaluru, India",
    description: "Volunteering",
    logo: "/images/logos/gdgblr.png",
  },
  {
    id: 4,
    company: "GDG On Campus - FET Jain University",
    role: "Co-Lead",
    duration: "August 2023 - September 2024",
    location: "Bengaluru, India",
    description:
      "Helped students learn and grow through tech events at Google Developer Groups on Campus",
    logo: "/images/logos/gdg.svg",
  },
];

export default function ExperienceSection() {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      </div>
      {/* Kept py-30 as requested, though standard Tailwind is usually py-28 or py-32 */}
      <section className="bg-slate-50 py-30 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Main Section Header */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12">
            Experiences
          </h2>

          {/* =========================================
              SECTION 1: PROFESSIONAL EXPERIENCE 
             ========================================= */}
          <div className="mb-8">
            <h3 className="text-xl text-gray-600 font-medium font">
              Professional Experience
            </h3>
          </div>
          <div className="relative mb-20">
            <div className="absolute left-4 md:left-8 top-2 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {professionalExperiences.map((exp) => (
                <TimelineCard key={exp.id} data={exp} />
              ))}
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-xl text-gray-600 font-medium">
              Community Experience
            </h3>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-8 top-2 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {communityExperiences.map((exp) => (
                <TimelineCard key={exp.id} data={exp} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

function TimelineCard({ data }: { data: (typeof professionalExperiences)[0] }) {
  return (
    <div className="relative pl-12 md:pl-20">
      <div className="absolute left-4 md:left-8 top-6 w-5 h-5 bg-black rounded-full border-4 border-slate-50 z-10 transform -translate-x-1/2"></div>

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-12 h-12 shrink-0">
            <Image
              src={data.logo}
              alt={`${data.company} logo`}
              width={48}
              height={48}
              className="object-contain rounded-full"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {data.company}
            </h3>
            <p className="text-sm text-gray-500">Duration: {data.duration}</p>
          </div>
        </div>

        {/* Role & Location */}
        <div className="mb-4">
          <h4 className="text-xl font-bold text-gray-900 mb-1">{data.role}</h4>
          <p className="text-sm text-gray-500 font-medium">{data.location}</p>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6">{data.description}</p>
      </div>
    </div>
  );
}
