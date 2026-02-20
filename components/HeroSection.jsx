"use client";
import React, { useState } from "react";
import {
  Search,
  MapPin,
  Building2,
  Home,
  Key,
  Warehouse,
} from "lucide-react";

const HeroSection = () => {
  const [activeType, setActiveType] = useState("residential");

  const propertyTypes = [
    { id: "residential", name: "Residential", icon: Home },
    { id: "commercial", name: "Commercial", icon: Building2 },
    { id: "under", name: "Under Construction", icon: Warehouse },
    { id: "ready", name: "Ready to Move", icon: Key },
  ];

  return (
    <section className="relative bg-white overflow-hidden">

      {/* Background gradient shape */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-[#1683cb] rounded-bl-[120px]" />

      <div className="relative max-[90%] mx-auto px-4 md:px-16 py-16 md:py-10 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* Badge */}
          <div className="inline-block bg-blue-100 text-[#1683cb] px-4 py-1 rounded-full text-sm font-semibold mb-6">
            Trusted Real Estate Platform
          </div>

          {/* Heading */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-6">
            Find Premium Properties  
            <span className="block text-[#1683cb] mt-2">
              That Match Your Lifestyle
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg mb-8 max-w-lg">
            Discover luxury apartments, villas, and commercial properties in prime locations with verified listings and best prices.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mb-8">

            <div>
              <h3 className="text-2xl font-bold text-gray-900">500+</h3>
              <p className="text-gray-500 text-sm">Projects</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">10K+</h3>
              <p className="text-gray-500 text-sm">Properties</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">8+</h3>
              <p className="text-gray-500 text-sm">Cities</p>
            </div>

          </div>

          {/* Property type selector */}
          <div className="flex flex-wrap gap-3">

            {propertyTypes.map((type) => {
              const Icon = type.icon;

              return (
                <button
                  key={type.id}
                  onClick={() => setActiveType(type.id)}
                  className={`flex items-center gap-2 px-4 py-2 cursor-pointer rounded-lg border font-medium transition
                  ${
                    activeType === type.id
                      ? "bg-[#1683cb] text-white border-[#1683cb]"
                      : "bg-white text-gray-700 border-gray-300 hover:border-[#1683cb]"
                  }`}
                >
                  <Icon size={18} />
                  {type.name}
                </button>
              );
            })}

          </div>

        </div>

        {/* RIGHT SEARCH CARD */}
        <div className="relative">

          <div className="bg-white shadow-2xl rounded-2xl p-6 md:p-8 max-w-md ml-auto">

            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Search Properties
            </h3>

            {/* City */}
            <div className="mb-4">
              <label className="text-sm font-semibold text-gray-600">
                City
              </label>

              <select className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1683cb] focus:outline-none">
                <option>Bangalore</option>
                <option>Mumbai</option>
                <option>Delhi NCR</option>
                <option>Hyderabad</option>
              </select>
            </div>

            {/* Location */}
            <div className="mb-4">

              <label className="text-sm font-semibold text-gray-600">
                Location
              </label>

              <div className="relative mt-1">

                <MapPin
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Enter location or project"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1683cb] focus:outline-none"
                />

              </div>

            </div>

            {/* Budget */}
            <div className="mb-6">

              <label className="text-sm font-semibold text-gray-600">
                Budget
              </label>

              <select className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1683cb] focus:outline-none">
                <option>Select Budget</option>
                <option>₹50L – ₹1Cr</option>
                <option>₹1Cr – ₹2Cr</option>
                <option>₹2Cr – ₹5Cr</option>
              </select>

            </div>

            {/* Button */}
            <button className="w-full cursor-pointer bg-[#1683cb] hover:bg-[#126aa4] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg transition">

              <Search size={18} />
              Search Properties

            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;