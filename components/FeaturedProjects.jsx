"use client";
import React, { useState, useEffect } from "react";
import {
  MapPin,
  Heart,
  ChevronLeft,
  ChevronRight,
  BedDouble,
  Maximize,
  Phone,
} from "lucide-react";
import LeadFormModal from "./LeadFormModal";

const FeaturedProjects = () => {
  const primary = "#1683cb";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const projects = [
    {
      id: 1,
      title: "Sobha World City",
      location: "North Bangalore",
      image: "/sobhaworldcity.png",
      priceRange: "₹1.8 Cr - ₹3.6 Cr",
      area: "1450 - 3200 SqFt",
      bhk: "2,3,4 BHK",
      status: "New Launch",
    },
    {
      id: 2,
      title: "Prestige Park Grove",
      location: "Whitefield, Bangalore",
      image: "/prestigeparkgrove.jpg",
      priceRange: "₹1.6 Cr - ₹3.2 Cr",
      area: "1300 - 2800 SqFt",
      bhk: "2,3,4 BHK",
      status: "Pre Launch",
    },
    {
      id: 3,
      title: "Birla Evara",
      location: "Hebbal, Bangalore",
      image: "/birlaevara.webp",
      priceRange: "₹1.9 Cr - ₹3.8 Cr",
      area: "1500 - 3000 SqFt",
      bhk: "2,3,4 BHK",
      status: "Ready to Move",
    },
    {
      id: 4,
      title: "Assetz Mizumi Reserve",
      location: "Whitefield",
      image: "/assetz-mizumi-reserve.webp",
      priceRange: "₹1.2 Cr - ₹2.5 Cr",
      area: "1200 - 2400 SqFt",
      bhk: "2,3 BHK",
      status: "Limited Units",
    },
  ];

  const visibleCards = 3;

  const next = () => {
    if (currentIndex < projects.length - visibleCards)
      setCurrentIndex(currentIndex + 1);
  };

  const prev = () => {
    if (currentIndex > 0)
      setCurrentIndex(currentIndex - 1);
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const handleCallBackClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">

      {/* Header */}
      <div className="container mx-auto px-4 md:px-16 lg:max-w-7xl">

        <div className="flex justify-between items-center mb-10">

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Featured Projects
            </h2>

            <div
              className="w-20 h-1 rounded-full"
              style={{ background: primary }}
            ></div>

            <p className="text-gray-600 mt-3">
              Handpicked premium properties in prime locations
            </p>
          </div>

          {/* Arrows */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="p-3 rounded-full cursor-pointer border hover:bg-gray-100 transition"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              className="p-3 rounded-full cursor-pointer border hover:bg-gray-100 transition"
            >
              <ChevronRight />
            </button>
          </div>

        </div>

        {/* Carousel */}
        <div className="overflow-hidden py-5">

          <div
            className="flex gap-6 transition-all duration-500"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >

            {projects.map((project) => (

              <div
                key={project.id}
                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0"
              >

                {/* Card */}
                <div className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition overflow-hidden">

                  {/* Image */}
                  <div className="relative overflow-hidden">

                    <img
                      src={project.image}
                      className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                    />

                    {/* Status Badge */}
                    <div
                      className="absolute top-4 left-4 text-white text-xs px-3 py-1 rounded-full font-semibold"
                      style={{ background: primary }}
                    >
                      {project.status}
                    </div>

                    {/* Favorite */}
                    <button
                      onClick={() => toggleFavorite(project.id)}
                      className="absolute top-4 right-4 bg-white p-2 rounded-full shadow"
                    >
                      <Heart
                        size={18}
                        className={
                          favorites.includes(project.id)
                            ? "text-red-500 fill-red-500"
                            : "text-gray-600"
                        }
                      />
                    </button>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3">

                      
                      <button
                        className="text-white border cursor-pointer border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
                      >
                        View Details
                      </button>

                    </div>

                  </div>

                  {/* Content */}
                  <div className="p-6">

                    <h3 className="text-xl font-bold mb-2">
                      {project.title}
                    </h3>

                    <div className="flex items-center text-gray-500 mb-3">
                      <MapPin size={16} />
                      <span className="ml-2">
                        {project.location}
                      </span>
                    </div>

                    {/* Price */}
                    <div
                      className="text-xl font-bold mb-4"
                      style={{ color: primary }}
                    >
                      {project.priceRange}
                    </div>

                    {/* Features */}
                    <div className="flex justify-between text-sm text-gray-600 mb-4">

                      <div className="flex items-center gap-2">
                        <BedDouble size={16} />
                        {project.bhk}
                      </div>

                      <div className="flex items-center gap-2">
                        <Maximize size={16} />
                        {project.area}
                      </div>

                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">

                      <button
                        className="flex-1 border py-2 rounded-xl cursor-pointer font-semibold hover:bg-gray-100"
                      >
                        Details
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Modal */}
      <LeadFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projectName={selectedProject?.title}
        projectLocation={selectedProject?.location}
      />

    </section>
  );
};

export default FeaturedProjects;