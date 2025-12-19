import Footer from "@/components/Footer";

// Mock Data based on your screenshot
const blogs = [
  {
    id: 1,
    title: "Behind the Screens: Volunteering at AgentsNexus 2025, Bangalore",
    date: "Thu Sep 27 2025",
    link: "https://medium.com/@kabillanta/behind-the-screens-volunteering-at-agentsnexus-2025-bangalore-5d5092f853ad",
  },
  {
    id: 2,
    title: "My Experience at Cloud Community Day Bengaluru",
    date: "Sat Aug 23 2025",
    link: "https://medium.com/@kabillanta/my-experience-at-cloud-community-day-bengaluru-29e06f7df191?postPublishedType=initial",
  },

  {
    id: 3,
    title: "Automated EDA: Quick Insights & Visualizations Tool",
    date: "Jan 28, 2024",
    link: "https://medium.com/@kabillanta/automated-eda-quick-insights-visualizations-tool-1ff2d4250d3e",
  },
  {
    id: 4,
    title:
      "Effortless Travel Planning: Build a Smart Trip Planner with Google and AI Magic!",
    date: "Dec 13, 2024",
    link: "https://medium.com/google-cloud/travel-planning-made-easy-and-kinda-fancy-build-a-trip-planner-with-google-and-a-dash-of-ai-6e1df26663c6",
  },
];

export default function BlogsPage() {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      {/* Main Content Area */}
      {/* pt-32 ensures content isn't hidden behind fixed navbar */}
      <main className="grow pt-32 pb-20 px-4 md:px-8">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[24px_24px]"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Blogs
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl leading-relaxed">
              A curated space sharing my personal experiences, learnings, and
              reflections from the communities and events I’ve been part of.
            </p>
          </div>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col justify-between h-48"
              >
                <div>
                  {/* Title with line clamping to handle long text gracefully */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                    {blog.title}
                  </h2>

                  {/* Date - Styling mimics the gray raw-ish text in your image */}
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                    {blog.date}
                  </p>
                </div>

                {/* 'SEE MORE' Button */}
                <div className="mt-6">
                  <a
                    href={blog.link}
                    className="inline-block text-sm font-bold text-gray-800 uppercase tracking-widest hover:text-blue-600 transition-colors"
                  >
                    Read Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
