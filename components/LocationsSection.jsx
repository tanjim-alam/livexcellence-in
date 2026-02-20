"use client";
import React from "react";
import { MapPin, ArrowRight, Building2, TrendingUp } from "lucide-react";

const LocationsSection = () => {
  const majorCities = [
    {
      name: "Bangalore",
      state: "Karnataka",
      image: "/bangalore.jpg",
      properties: "2500+",
    },
    {
      name: "Mumbai",
      state: "Maharashtra",
      image: "/mumbai.jpg",
      properties: "3200+",
    },
    {
      name: "Delhi NCR",
      state: "Delhi",
      image: "/delhi.jpg",
      properties: "2800+",
    },
    {
      name: "Hyderabad",
      state: "Telangana",
      image: "/hyderabad.jpg",
      properties: "1800+",
    },
    {
      name: "Pune",
      state: "Maharashtra",
      image: "/pune.jpg",
      properties: "1500+",
    },
    {
      name: "Chennai",
      state: "Tamil Nadu",
      image: "/chennai.jpg",
      properties: "1600+",
    },
  ];

  const bangaloreAreas = [
    { name: "Whitefield", properties: 450, growth: "+12%" },
    { name: "Electronic City", properties: 380, growth: "+8%" },
    { name: "Hebbal", properties: 320, growth: "+15%" },
    { name: "Sarjapur Road", properties: 290, growth: "+10%" },
    { name: "HSR Layout", properties: 240, growth: "+6%" },
    { name: "Yelahanka", properties: 200, growth: "+11%" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">

      <div className="max-w-7xl mx-auto px-4 md:px-16">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Browse by Top Locations
            </h2>

            <p className="text-gray-600">
              Explore real estate opportunities across India's prime cities
            </p>
          </div>

          <button className="hidden md:flex items-center gap-2 text-[#1683cb] font-semibold hover:gap-3 transition">
            View All
            <ArrowRight size={18} />
          </button>

        </div>

        {/* Horizontal Cities Scroll */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">

          {majorCities.map((city, index) => (

            <div
              key={index}
              className="min-w-[280px] bg-white rounded-2xl shadow-md hover:shadow-xl transition group cursor-pointer"
            >

              <div className="relative">

                <img
                  src={city.image}
                  className="h-44 w-full object-cover rounded-t-2xl group-hover:scale-105 transition"
                />

                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-[#1683cb]">
                  Trending
                </div>

              </div>

              <div className="p-5">

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#1683cb] transition">
                  {city.name}
                </h3>

                <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                  <MapPin size={14} />
                  {city.state}
                </div>

                <div className="flex justify-between items-center mt-4">

                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <Building2 size={16} />
                    {city.properties} Properties
                  </div>

                  <ArrowRight
                    size={18}
                    className="text-gray-400 group-hover:text-[#1683cb] group-hover:translate-x-1 transition"
                  />

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Localities */}
        <div className="mt-16">

          <div className="flex justify-between items-center mb-6">

            <h3 className="text-2xl font-bold text-gray-900">
              Popular in Bangalore
            </h3>

            <button className="text-[#1683cb] font-semibold hover:underline">
              View All
            </button>

          </div>

          {/* Pills Layout */}
          <div className="flex flex-wrap gap-4">

            {bangaloreAreas.map((area, index) => (

              <div
                key={index}
                className="bg-white border border-gray-200 hover:border-[#1683cb] hover:shadow-lg rounded-xl px-5 py-4 flex items-center gap-4 cursor-pointer transition"
              >

                <div className="bg-blue-100 p-2 rounded-lg">
                  <MapPin size={18} className="text-[#1683cb]" />
                </div>

                <div>

                  <div className="font-semibold text-gray-900">
                    {area.name}
                  </div>

                  <div className="text-sm text-gray-500">
                    {area.properties} Properties
                  </div>

                </div>

                <div className="ml-auto flex items-center gap-1 text-green-600 text-sm font-semibold">
                  <TrendingUp size={14} />
                  {area.growth}
                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Glass Stats Bar */}
        <div className="mt-16 bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl p-8 shadow-lg">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

            {[
              { number: "50+", label: "Cities" },
              { number: "500+", label: "Localities" },
              { number: "12K+", label: "Properties" },
              { number: "200+", label: "Developers" },
            ].map((stat, index) => (

              <div key={index}>

                <div className="text-3xl font-bold text-[#1683cb]">
                  {stat.number}
                </div>

                <div className="text-gray-600 text-sm mt-1">
                  {stat.label}
                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default LocationsSection;