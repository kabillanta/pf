"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Runner Up",
    organization:
      "Google Agentic AI Day Hackathon (Part of Guinness World Record)",
    imageSrc: "/images/achievements/achievement-1.jpg",
    alt: "Google Agentic AI Day Hackathon (Part of Guinness World Record)",
  },
  {
    id: 2,
    title: "Runner Up",
    organization: "Indegene Hackathon",
    imageSrc: "/images/achievements/achievement-2.jpg",
    alt: "Indegene Hackathon",
  },
  {
    id: 3,
    title: "5th Runner Up",
    organization: "Google Build and Blog Marathon",
    imageSrc: "/images/achievements/achievement-3.jpg",
    alt: "CMX Awards",
  },
  {
    id: 4,
    title: "Top 10",
    organization:
      "Hackfest’25 – Hackathon Organized by Indian School of Business.",
    imageSrc: "/images/achievements/achievement-4.jpg",
    alt: "Hackfest’25",
  },
];

export default function AchievementsScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // State to track arrow visibility
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Function to check scroll position and update state
  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      // Show Left Arrow if we've scrolled past the start
      setCanScrollLeft(scrollLeft > 0);

      // Show Right Arrow if we haven't reached the very end (with 1px buffer)
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  // Check buttons on mount and window resize
  useEffect(() => {
    checkScrollButtons();
    window.addEventListener("resize", checkScrollButtons);
    return () => window.removeEventListener("resize", checkScrollButtons);
  }, []);

  // Programmatic Scroll Function
  const scroll = (direction: string) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-slate-50 py-16 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 pl-2">
          Achievements
        </h2>

        {/* --- Left Navigation Arrow (Only renders if canScrollLeft is true) --- */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-[60%] -translate-y-1/2 -ml-5 z-20 bg-white p-3 rounded-full shadow-lg border border-gray-100 text-gray-700 hover:bg-gray-50 hover:scale-110 transition-all hidden md:flex items-center justify-center"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* --- Scrolling Container --- */}
        <div
          ref={scrollRef}
          onScroll={checkScrollButtons} // Triggers logic whenever user scrolls
          className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {achievements.map((item) => (
            <div
              key={item.id}
              className="min-w-[85vw] md:min-w-100 snap-center bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col transition-transform hover:-translate-y-1 duration-300"
            >
              <div className="relative w-full h-48 md:h-56 bg-gray-200">
                <Image
                  src={item.imageSrc}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col items-start grow">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                  {item.organization}
                </span>
              </div>
            </div>
          ))}

          <div className="min-w-px md:hidden"></div>
        </div>

        {/* --- Right Navigation Arrow (Only renders if canScrollRight is true) --- */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-[60%] -translate-y-1/2 -mr-5 z-20 bg-white p-3 rounded-full shadow-lg border border-gray-100 text-gray-700 hover:bg-gray-50 hover:scale-110 transition-all hidden md:flex items-center justify-center"
            aria-label="Scroll Right"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
