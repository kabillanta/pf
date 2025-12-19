import Image from "next/image";
import {
  Linkedin,
  Twitter,
  Github,
  Instagram,
  Mail,
} from "lucide-react";
import Particles from './Particles'
const socialLinks = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/kabillan",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://twitter.com/kabillanta", label: "Twitter" },
  { icon: Github, href: "https://github.com/kabillanta", label: "GitHub" },
  {
    icon: Instagram,
    href: "https://instagram.com/kabillanta",
    label: "Instagram",
  },
  { icon: Mail, href: "mailto:kabillan1905@email.com", label: "Email" },
];

export default function HeroSection() {
  return (
    <section className="pt-40 pb-20 px-6 md:px-12 lg:px-24">
      <Particles />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Kabillan T A
          </h1>
          <p className="text-l md:text-2xl text-gray-600 mb-8 flex items-center justify-center md:justify-start gap-2 font-medium">
            Aspiring SDE | 3x Hackathon Winner <br />
            Core Member of GDG Cloud Bengaluru
          </p>

          <div className="text-lg text-gray-700 space-y-6 mb-8 leading-relaxed max-w-3xl">
            <p>
              I’m a developer, designer, and community builder focused on
              creating technology that feels purposeful, intuitive, and human. I
              work across frontend, backend, and UI/UX, blending clean code with
              thoughtful design to turn ideas into reliable, real-world
              products.
            </p>
            <p>
              Beyond building, I actively contribute to developer communities.
              As a core organizer with GDG Cloud Bengaluru, I work closely with
              industry professionals and have helped organize and host
              large-scale developer events, creating spaces where developers
              learn, connect, and grow.
            </p>
          </div>

          <p className="text-lg text-gray-800 font-semibold mb-8">
            I love solving Rubik&apos;s Cube
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300"
                aria-label={label}
              >
                <Icon size={22} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="shrink-0 relative">
          <div className="w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-[6px] border-white shadow-2xl relative z-10">
            {/* IMPORTANT: Replace with your actual image path in the 'public' folder */}
            <Image
              src="/kabi.jpg"
              alt="Siddhant Agarwal"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Decorative Circle behind image (Optional) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 lg:w-104 lg:h-104 bg-gray-200/50 rounded-full -z-10 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
