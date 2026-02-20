"use client";
import React, { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectOpen, setIsProjectOpen] = useState(false);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-[#1683cb] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">

          <div className="flex items-center gap-6">

            <Link
              href="tel:+919380660766"
              className="flex items-center gap-2 hover:text-gray-200 transition"
            >
              <Phone size={16} />
              +91 9380660766
            </Link>

            <Link
              href="mailto:info@billionairedreamestate.in"
              className="hidden md:flex items-center gap-2 hover:text-gray-200 transition"
            >
              <Mail size={16} />
              info@livexcellence.in
            </Link>

          </div>

          <div className="hidden md:flex items-center gap-2">
            <MapPin size={16} />
            No-11, 2nd Floor, Arya Hub, Whitefield
          </div>

        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 shadow-sm border-b">

        <div className="max-w-7xl mx-auto px-4">

          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <Link href="/" className="flex flex-col leading-tight group">

              <span className="text-2xl font-bold text-[#1683cb] group-hover:opacity-80 transition">
                LIVEXCELLENCE
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">

              <Link
                href="/"
                className="hover:text-[#1683cb] relative group"
              >
                Home
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1683cb] transition-all group-hover:w-full"></span>
              </Link>

              {/* Projects Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsProjectOpen(true)}
                onMouseLeave={() => setIsProjectOpen(false)}
              >

                <button className="flex items-center gap-1 hover:text-[#1683cb]">
                  Projects <ChevronDown size={16} />
                </button>

                {isProjectOpen && (
                  <div className="absolute top-full mt-3 bg-white shadow-lg rounded-lg py-2 w-52 border">

                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Luxury Apartments
                    </Link>

                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Villas
                    </Link>

                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Plots
                    </Link>

                  </div>
                )}

              </div>

              <Link href="#" className="hover:text-[#1683cb]">Properties</Link>

              <Link href="#" className="hover:text-[#1683cb]">About</Link>

              <Link href="#" className="hover:text-[#1683cb]">Contact</Link>

            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">

              <Link
                href="#"
                className="px-6 py-2.5 rounded-lg border border-[#1683cb] text-[#1683cb] hover:bg-[#1683cb] hover:text-white transition font-medium"
              >
                Enquire Now
              </Link>

              <Link
                href="tel:+919380660766"
                className="bg-[#1683cb] text-white px-6 py-2.5 rounded-lg hover:bg-[#126aa4] transition font-medium shadow-md"
              >
                Call Now
              </Link>

            </div>

            {/* Mobile Button */}
            <button
              className="md:hidden text-gray-700 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >

          <div className="flex justify-between items-center p-4 border-b">

            <span className="font-bold text-[#1683cb]">
              Menu
            </span>

            <button onClick={() => setIsMenuOpen(false)}>
              <X size={24} />
            </button>

          </div>

          <nav className="flex flex-col p-4 gap-4 font-medium">

            <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>

            <Link href="#" onClick={() => setIsMenuOpen(false)}>Projects</Link>

            <Link href="#" onClick={() => setIsMenuOpen(false)}>Properties</Link>

            <Link href="#" onClick={() => setIsMenuOpen(false)}>About</Link>

            <Link href="#" onClick={() => setIsMenuOpen(false)}>Contact</Link>

            <Link
              href="#"
              className="bg-[#1683cb] text-white text-center py-3 rounded-lg mt-4"
            >
              Enquire Now
            </Link>

          </nav>

        </div>

      </header>
    </>
  );
};

export default Header;