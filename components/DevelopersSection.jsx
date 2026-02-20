"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, CheckCircle } from "lucide-react";

const DevelopersSection = () => {

  const primary = "#1683cb";
  const scrollRef = useRef(null);

  const developers = [
    {
      id: 1,
      name: "Prestige Group",
      logo: "/prestige-group.jpg",
      projects: 45,
      experience: "35+ Years",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Godrej Properties",
      logo: "/godrej-properties.png",
      projects: 38,
      experience: "30+ Years",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Sobha Limited",
      logo: "/sobha-group.webp",
      projects: 41,
      experience: "45+ Years",
      rating: 4.9,
    },
    {
      id: 4,
      name: "Brigade Group",
      logo: "/brigade.png",
      projects: 52,
      experience: "40+ Years",
      rating: 4.6,
    },
    {
      id: 5,
      name: "Embassy Group",
      logo: "/embassy-group.png",
      projects: 35,
      experience: "28+ Years",
      rating: 4.5,
    },
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 320;

    if (direction === "left")
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });

    else
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">

      <div className="max-w-7xl md:px-16 mx-auto px-4">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">

          <div>

            <h2 className="text-4xl font-bold text-gray-900">
              Trusted Developers
            </h2>

            <p className="text-gray-500 mt-2">
              India's Top Verified Real Estate Builders
            </p>

          </div>

          {/* Navigation */}
          <div className="flex gap-3">

            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-full border cursor-pointer flex items-center justify-center hover:bg-gray-100 transition"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 rounded-full border cursor-pointer flex items-center justify-center hover:bg-gray-100 transition"
            >
              <ChevronRight />
            </button>

          </div>

        </div>


        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
        >

          {developers.map((dev) => (

            <div
              key={dev.id}
              className="min-w-[280px] group relative"
            >

              {/* Gradient Border */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 blur transition"
                
              />

              {/* Card */}
              <div className="relative bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl p-6 hover:shadow-2xl transition">

                {/* Logo */}
                <div className="flex justify-center mb-5">

                  <div className="w-24 h-24 bg-white rounded-2xl shadow flex items-center justify-center">

                    <Image
                      src={dev.logo}
                      width={80}
                      height={80}
                      alt={dev.name}
                      className="object-contain"
                    />

                  </div>

                </div>


                {/* Name */}
                <h3 className="text-lg font-bold text-center">
                  {dev.name}
                </h3>


                {/* Verified */}
                <div className="flex justify-center mt-1 mb-3">

                  <span
                    className="flex items-center gap-1 text-sm font-medium"
                    style={{ color: primary }}
                  >
                    <CheckCircle size={16} />
                    Verified Developer
                  </span>

                </div>


                {/* Stats */}
                <div className="flex justify-between text-center mb-4">

                  <div>

                    <div
                      className="text-lg font-bold"
                      style={{ color: primary }}
                    >
                      {dev.projects}
                    </div>

                    <div className="text-xs text-gray-500">
                      Projects
                    </div>

                  </div>

                  <div>

                    <div
                      className="text-lg font-bold"
                      style={{ color: primary }}
                    >
                      {dev.experience}
                    </div>

                    <div className="text-xs text-gray-500">
                      Experience
                    </div>

                  </div>

                </div>


                {/* Rating */}
                <div className="flex justify-center items-center gap-1 mb-5">

                  <Star size={16} fill="#facc15" stroke="#facc15" />

                  <span className="font-semibold">
                    {dev.rating}
                  </span>

                </div>


                {/* Button */}
                <button
                  className="w-full py-2.5 rounded-xl cursor-pointer font-semibold text-white transition hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(135deg, #1683cb, #00c6ff)",
                  }}
                >
                  View Projects
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default DevelopersSection;