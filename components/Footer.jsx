"use client";

import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0f1a] text-gray-400">

      {/* Top Gradient Line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#1683cb] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div>

            <h2 className="text-xl font-bold text-white mb-3">
              Liv<span className="text-[#1683cb]">excellence</span>
            </h2>

            <p className="text-sm leading-relaxed mb-4">
              Livexcellence is a trusted real estate advisory platform helping
              buyers discover premium residential and investment properties.
            </p>

            {/* Social */}
            <div className="flex gap-3">

              <a className="hover:text-[#1683cb] transition cursor-pointer">
                <Facebook size={18} />
              </a>

              <a className="hover:text-[#1683cb] transition cursor-pointer">
                <Instagram size={18} />
              </a>

              <a className="hover:text-[#1683cb] transition cursor-pointer">
                <Linkedin size={18} />
              </a>

              <a className="hover:text-[#1683cb] transition cursor-pointer">
                <Youtube size={18} />
              </a>

            </div>

          </div>


          {/* Quick Links */}
          <div>

            <h3 className="text-white font-semibold mb-3 text-sm">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 text-sm">

              <a className="hover:text-white transition">Home</a>
              <a className="hover:text-white transition">Projects</a>
              <a className="hover:text-white transition">Developers</a>
              <a className="hover:text-white transition">Contact</a>

            </div>

          </div>


          {/* Property */}
          <div>

            <h3 className="text-white font-semibold mb-3 text-sm">
              Property Types
            </h3>

            <div className="flex flex-col gap-2 text-sm">

              <a className="hover:text-white transition">Apartments</a>
              <a className="hover:text-white transition">Villas</a>
              <a className="hover:text-white transition">Plots</a>
              <a className="hover:text-white transition">Commercial</a>

            </div>

          </div>


          {/* Contact */}
          <div>

            <h3 className="text-white font-semibold mb-3 text-sm">
              Contact
            </h3>

            <div className="flex flex-col gap-3 text-sm">

              <div className="flex gap-2 items-start">
                <MapPin size={16} className="text-[#1683cb]" />
                <span>No-11, 2nd Floor, Arya Hub, Whitefield, Bengaluru, Karnataka 560066</span>
              </div>

              <div className="flex gap-2 items-center">
                <Phone size={16} className="text-[#1683cb]" />
                <span>+91 9380660766</span>
              </div>

              <div className="flex gap-2 items-center">
                <Mail size={16} className="text-[#1683cb]" />
                <span>info@livexcellence.in</span>
              </div>

            </div>

          </div>

        </div>


        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">

          <p>
            © {year} livexcellence.in — All rights reserved
          </p>

          <div className="flex gap-5">

            <Link href="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>

            <Link href="/terms-and-conditions" className="hover:text-white transition">
              Terms
            </Link>

            <Link href="#" className="hover:text-white transition">
              Sitemap
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;