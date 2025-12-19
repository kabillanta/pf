import Image from "next/image";
import Footer from "@/components/Footer";

const education = [
  {
    id: 1,
    company: "JAIN (Deemed-to-be University)",
    role: "Bachelor of Technology in Computer Science and Engineering specialization in AIML",
    duration: "July 2023 - July 2027 (Expected)",
    location: "Bengaluru, India",
    description:
      "Undergraduate Computer Science student with hands-on experience in software development, actively applying classroom concepts to real-world projects, hackathons, and community-driven initiatives.",
    logo: "/images/logos/jgi.png",
  },
  {
    id: 2,
    company: "The TVS School",
    role: "Secondary & Higher Secondary Education",
    duration: "June 2009 - March 2023",
    location: "Madurai, India",
    description:
      "Contributed to the school’s Golden Jubilee celebrations and graduated proudly as part of the 50th passing-out batch, a milestone year that held special significance.",
    logo: "/images/logos/tvs.png",
  },
];

export default function ExperienceSection() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      </div>
      {/* Kept py-30 as requested, though standard Tailwind is usually py-28 or py-32 */}
      <section className="bg-slate-50 py-30 px-4 md:px-8 flex-grow">
        <div className="max-w-5xl mx-auto">
          {/* Main Section Header */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12">
            Education
          </h2>
          <div className="relative mb-20">
            <div className="absolute left-4 md:left-8 top-2 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {education.map((exp) => (
                <TimelineCard key={exp.id} data={exp} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function TimelineCard({ data }: { data: (typeof education)[0] }) {
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
