import { NavLink } from "react-router-dom";
import {
  Ticket,
  Bed,
  Briefcase,
  Lock,
} from "lucide-react";

export default function StationServices() {
  const services = [
    {
      icon: <Ticket className="w-6 h-6 text-blue-700" />,
      title: "PNR Enquiry",
      description:
        "Verify your seat confirmation and journey details instantly.",
      button: "Check Status →",
      to: "/pnr-enquiry",
    },
    {
      icon: <Bed className="w-6 h-6 text-blue-700" />,
      title: "Retiring Room",
      description:
        "Luxury pods and standard rooms for short-stay relaxation.",
      button: "Explore →",
      to: "/retiring-room",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-blue-700" />,
      title: "Porter Service",
      description:
        "Assisted luggage transport and wheelchair assistance.",
      button: "Book Now →",
      to: "/porter-booking",
    },
    {
      icon: <Lock className="w-6 h-6 text-blue-700" />,
      title: "Digital Locker",
      description:
        "Secure smart locker facilities with app-based access.",
      button: "Book Locker →",
      to: "/digital-locker",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-slate-900">Station Services</h2>

      <p className="text-slate-500 mt-2 mb-10">
        Premium amenities for a seamless travel experience.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
              {service.icon}
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              {service.title}
            </h3>

            <p className="text-sm text-slate-500 leading-6 mb-8">
              {service.description}
            </p>

            <NavLink
              to={service.to}
              className="text-blue-700 font-medium hover:underline"
            >
              {service.button}
            </NavLink>
          </div>
        ))}
      </div>
    </section>
  );
}