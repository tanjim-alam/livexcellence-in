"use client";
import React, { useState } from "react";
import {
  MapPin,
  Heart,
  ChevronLeft,
  ChevronRight,
  Phone,
  Calendar,
  BedDouble,
  Maximize,
} from "lucide-react";
import LeadFormModal from "./LeadFormModal";

const RecentlyLaunchedProjects = () => {
  const primary = "#1683cb";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const visibleCards = 3;

  const projects = [
    {
      id: 1,
      title: "Brigade Orchards",
      location: "Devanahalli",
      image: "/brigadeorchards.jpg",
      priceRange: "₹95 L - ₹2.2 Cr",
      area: "1050 - 2050 SqFt",
      bhk: "2,3,4 BHK",
      launchDate: "Jan 2026",
    },
    {
      id: 2,
      title: "Prestige City",
      location: "Sarjapur Road, Bangalore",
      image: "/prestigecity.jpg",
      priceRange: "₹1.2 Cr - ₹2.8 Cr",
      area: "1150 - 2250 SqFt",
      bhk: "2,3,4 BHK",
      launchDate: "Jan 2026",
    },
    {
      id: 3,
      title: "Sobha Neopolis",
      location: "Panathur, Bangalore",
      image: "/sobhaneopolis.jpg",
      priceRange: "₹75 L - ₹1.8 Cr",
      area: "850 - 1850 SqFt",
      bhk: "1,2,3 BHK",
      launchDate: "Dec 2025",
    },
    {
      id: 4,
      title: "Godrej Woodsville",
      location: "Karmelaram",
      image: "/godrejwoodsville.jpg",
      priceRange: "₹1.5 Cr - ₹3.2 Cr",
      area: "1350 - 2450 SqFt",
      bhk: "2,3,4 BHK",
      launchDate: "Dec 2025",
    },
  ];

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
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">

      <div className="container mx-auto px-4 md:px-16 lg:max-w-7xl">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">

          <div>

            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Recently Launched Projects
            </h2>

            <div
              className="w-24 h-1 rounded-full"
              style={{ background: primary }}
            ></div>

            <p className="text-gray-600 mt-3">
              Explore newly launched premium residential projects
            </p>

          </div>

          {/* Arrows */}
          <div className="flex gap-3">

            <button
              onClick={prev}
              className="p-3 rounded-full border hover:bg-gray-100 transition cursor-pointer"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              className="p-3 rounded-full border hover:bg-gray-100 transition cursor-pointer"
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

                    {/* Launch Badge */}
                    <div
                      className="absolute top-4 left-4 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1 font-semibold"
                      style={{ background: primary }}
                    >
                      <Calendar size={14} />
                      {project.launchDate}
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

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3">

                      <button
                        className="bg-white px-4 py-2 rounded-lg cursor-pointer font-semibold shadow hover:scale-105 transition"
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
                    <div className="flex justify-between text-sm text-gray-600 mb-5">

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

                      <button className="flex-1 border py-2 cursor-pointer rounded-xl font-semibold hover:bg-gray-100 transition">
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

export default RecentlyLaunchedProjects;