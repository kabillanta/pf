"use client";

import { useState, FormEvent } from "react";
import Footer from "@/components/Footer";
import { Linkedin, Twitter, Github, Instagram, Mail, Send } from "lucide-react";

export default function ContactPage() {
  // Logic from your snippet
  const [result, setResult] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.currentTarget);

    // --- PASTE YOUR WEB3FORMS KEY HERE ---
    formData.append("access_key", "5af948c9-5acb-4072-bd80-8ba30c7843cb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset(); // Clear the form inputs
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
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

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      </div>

      <main className="grow pt-30 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* LEFT SIDE: Text Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-4">
                  Get in Touch
                </h2>
                <p className="text-xl text-gray-600 font-medium mb-2">
                  Reach out directly via email or fill out the form.
                </p>
                <div className="h-1 w-20 bg-gray-200 rounded-full my-6"></div>
              </div>

              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Whether you have a question, an idea to collaborate on, or
                  just want to connect, I’m always happy to talk. My interests
                  revolve around developer communities, design-led experiences,
                  AI-powered applications, and building tech that feels useful
                  and intuitive.
                </p>
                <p>
                  I enjoy collaborating on meaningful projects and community
                  initiatives. Feel free to reach out through the platforms
                  below let’s build and learn together.
                </p>
              </div>

              {/* Social Icons */}
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

            {/* RIGHT SIDE: Contact Form (Using your simple logic) */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 relative overflow-hidden">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send a Message
              </h2>

              <form onSubmit={onSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="abc@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Drop you message here ...  "
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  Send Message <Send size={18} />
                </button>

                {/* Result Message (Simple & Clean) */}
                {result && (
                  <p
                    className={`text-center font-medium py-2 rounded-lg ${
                      result.includes("Success")
                        ? "text-green-600 bg-green-50"
                        : "text-gray-600 bg-gray-100"
                    }`}
                  >
                    {result}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
