"use client";
import React from "react";
import Heading2 from "../Typography/Heading2";

const statusColors = {
  Pending: "bg-primary text-white",
  Returned: "bg-secondary text-white",
};

export default function CarBookingsInfo({ data }) {
  return (
    <section className="secPadding">
      <div className="container">
        <Heading2 className="pb-8" blackHeading="Car Bookings" />
        
        <div className="overflow-x-auto bg-white rounded-lg border border-gray-100">
          <table className="min-w-full text-sm text-left">
            <thead>
              <tr className="bg-blue-50 text-gray-700 text-xs uppercase tracking-wide">
                <th className="px-4 py-3 whitespace-nowrap">Booking ID</th>
                <th className="px-4 py-3 whitespace-nowrap">Car</th>
                <th className="px-4 py-3 whitespace-nowrap">Pickup Date</th>
                <th className="px-4 py-3 whitespace-nowrap">Return Date</th>
                <th className="px-4 py-3 whitespace-nowrap">Location</th>
                <th className="px-4 py-3 whitespace-nowrap">Status</th>
                <th className="px-4 py-3 whitespace-nowrap">Total Amount</th>
                <th className="px-4 py-3 whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((booking, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-3 whitespace-nowrap">{booking.id}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{booking.car}</td>
                  <td className="px-4 py-3">
                    <span className="inline-block px-2 py-1 bg-gray-100 rounded-md text-xs font-medium">
                      {booking.pickup}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-block px-2 py-1 bg-gray-100 rounded-md text-xs font-medium">
                      {booking.return}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">{booking.location}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-md ${statusColors[booking.status] || "bg-gray-400 text-white"
                        }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">{booking.amount}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <button className="px-3 py-1 text-sm font-medium border border-gray-300 rounded-md hover:bg-gray-100 transition">
                      Create Invoice
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
