import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Reservations() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    seating: "", 
    specialRequests: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, 
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log("Complete Reservation Data Submitted:", formData);
    
    navigate("/confirm", { state: { formData } });
  };

  return (
    <div className="bg-white p-10 rounded-3xl shadow-lg max-w-2xl w-full mx-auto my-6">
      <h1 className="text-xl font-bold text-green-900 mb-8 text-left">
        Reservation Details
      </h1>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="flex flex-col">
          <label className="text-base font-normal text-gray-700 mb-2">Name on Booking *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600 transition"
          />
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="flex flex-col">
            <label className="text-base font-normal text-gray-700 mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600 transition"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-base font-normal text-gray-700 mb-2">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600 transition"
            />
          </div>
        </div>

        {/* Date, Time & Guests */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="flex flex-col">
            <label className="text-base font-normal text-gray-700 mb-2">Date *</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600 transition"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-base font-normal text-gray-700 mb-2">Time *</label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-base border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-green-600 transition"
            >
              <option value="">Select time</option>
              <option>5:00 PM</option><option>5:30 PM</option><option>6:00 PM</option>
              <option>6:30 PM</option><option>7:00 PM</option><option>7:30 PM</option>
              <option>8:00 PM</option><option>8:30 PM</option><option>9:00 PM</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-base font-normal text-gray-700 mb-2">Number of Guests *</label>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-base border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-green-600 transition"
            >
              <option value="">Select guests</option>
              <option>1 Guest</option><option>2 Guests</option><option>3 Guests</option>
              <option>4 Guests</option><option>5 Guests</option><option>6 Guests</option>
            </select>
          </div>
        </div>

        {/* Seating Preference */}
        <div className="flex flex-col text-left">
          <label className="text-sm font-normal text-gray-700 mb-2">Seating Preference</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-gray-50 p-3 rounded-xl border border-gray-200">
            {["Indoor", "Outdoor Patio", "Bar Seating", "No Preference"].map((seat) => (
              <label key={seat} className="flex items-center gap-2 cursor-pointer select-none text-sm font-medium text-gray-700">
                <input
                  type="radio"
                  name="seating"
                  value={seat}
                  checked={formData.seating === seat}
                  onChange={handleChange}
                  className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-600"
                />
                <span>{seat}</span>
              </label>
            ))}
          </div>
        </div>
        {/* Occasion (Optional) */}
          <div className="flex flex-col">
            <label className="text-base font-normal text-gray-700 mb-2">Occasion (Optional)</label>
            <select
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              className="w-full px-4 py-2 text-base border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-green-600 transition"
            >
              <option value="">Select occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Business">Business</option>
              <option value="Other">Other Celebration</option>
            </select>
          </div>

        {/* Special Requests */}
        <div className="flex flex-col text-left">
          <label className="text-base font-normal text-gray-700 mb-2">Special Requests (Optional)</label>
          <textarea
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            rows={3}
            placeholder="Any dietary restrictions or special requirements? (Optional)"
            className="w-full px-4 py-2 text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600 transition resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-700 hover:bg-green-800 text-white font-bold text-lg py-3 px-5 rounded-xl shadow-md transition duration-300 mt-4"
        >
          Confirm Reservation
        </button>
      </form>
    </div>
  );
}