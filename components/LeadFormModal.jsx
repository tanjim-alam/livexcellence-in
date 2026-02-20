"use client";

import React, { useState } from "react";
import {
  X,
  Phone,
  User,
  Mail,
  Send,
  CheckCircle,
  Building2,
} from "lucide-react";

const LeadFormModal = ({ isOpen, onClose, projectName, projectLocation }) => {
  const primary = "#1683cb";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          projectName,
          projectLocation,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitSuccess(true);
        setIsSubmitting(false);

        setTimeout(() => {
          setSubmitSuccess(false);
          setFormData({ name: "", email: "", phone: "" });
          onClose();
        }, 2000);
      }
    } catch (error) {
      setIsSubmitting(false);
      alert("Submission failed");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">

      {/* Modal */}
      <div className="relative w-full max-w-md">

        {/* Glass Card */}
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">

          {/* Header */}
          <div
            className="p-6 text-white relative"
            style={{
              background:
                "linear-gradient(135deg, #1683cb 0%, #0ea5e9 100%)",
            }}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 hover:bg-white/20 p-1 rounded-full transition"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3">

              <div className="bg-white/20 p-3 rounded-xl">
                <Phone size={22} />
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  Get Best Price
                </h2>
                <p className="text-white/80 text-sm">
                  Register for exclusive offers
                </p>
              </div>

            </div>
          </div>

          {/* Project Info */}
          {projectName && (
            <div className="flex items-center gap-3 bg-blue-50 p-4 border-b">

              <Building2 size={20} style={{ color: primary }} />

              <div>
                <div className="font-semibold text-gray-900">
                  {projectName}
                </div>
                <div className="text-sm text-gray-500">
                  {projectLocation}
                </div>
              </div>

            </div>
          )}

          {/* Body */}
          <div className="p-6">

            {submitSuccess ? (

              <div className="text-center py-6">

                <CheckCircle
                  size={56}
                  className="mx-auto mb-4 text-green-500"
                />

                <h3 className="text-xl font-bold text-gray-900">
                  Thank You!
                </h3>

                <p className="text-gray-500">
                  Our property expert will contact you shortly
                </p>

              </div>

            ) : (

              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Name */}
                <div className="relative">

                  <User
                    size={18}
                    className="absolute left-3 top-3 text-gray-400"
                  />

                  <input
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                  />

                </div>

                {/* Email */}
                <div className="relative">

                  <Mail
                    size={18}
                    className="absolute left-3 top-3 text-gray-400"
                  />

                  <input
                    name="email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                  />

                </div>

                {/* Phone */}
                <div className="relative">

                  <Phone
                    size={18}
                    className="absolute left-3 top-3 text-gray-400"
                  />

                  <input
                    name="phone"
                    required
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                  />

                </div>

                {/* Button */}
                <button
                  disabled={isSubmitting}
                  className="w-full text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2"
                  style={{
                    background:
                      "linear-gradient(135deg, #1683cb 0%, #0ea5e9 100%)",
                  }}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send size={18} />
                      Get Call Back
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-gray-500">
                  100% Trusted • No Spam • Instant Call Back
                </p>

              </form>

            )}

          </div>

        </div>

      </div>

    </div>
  );
};

export default LeadFormModal;