import {
  Briefcase,
  Accessibility,
  Clock,
  ShieldCheck,
} from "lucide-react";

export default function MobilitySection() {
  const features = [
    {
      icon: <Briefcase className="w-10 h-10 text-blue-700" />,
      title: "Professional Luggage Assistance",
      description:
        "Get reliable porter support for carrying your luggage safely across Ahmedabad Junction.",
    },
    {
      icon: <Accessibility className="w-10 h-10 text-blue-700" />,
      title: "Wheelchair Support",
      description:
        "Dedicated assistance for senior citizens and differently-abled passengers with wheelchair services.",
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-700" />,
      title: "Quick Response",
      description:
        "Receive porter assistance within minutes after booking through the R1 platform.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-700" />,
      title: "Verified Staff",
      description:
        "All porters are station-verified professionals ensuring a safe and trustworthy experience.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            Why Choose R1 Porter Service?
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Experience hassle-free luggage handling and accessibility
            assistance at Ahmedabad Junction with our professional porter
            network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300"
            >
              <div className="mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-600 leading-7">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}