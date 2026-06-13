import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero.png";

const tabs = [
  {
    key: "pnr-enquiry",
    label: "PNR Enquiry",
    placeholder: "Enter PNR Number",
    buttonText: "Check Status",
    route: "/pnr-enquiry",
  },
  {
    key: "live-status",
    label: "Live Status",
    placeholder: "Enter Train Number or PNR",
    buttonText: "Get Live Status",
    route: "/live-status",
  },
  {
    key: "retiring-room",
    label: "Retiring Room",
    placeholder: "Enter arrival date or duration",
    buttonText: "Browse Rooms",
    route: "/retiring-room",
  },
  {
    key: "porter-booking",
    label: "Porter Service",
    placeholder: "Enter Coach & Seat (e.g. B2, 45)",
    buttonText: "Book Porter",
    route: "/porter-booking",
  },
  {
    key: "digital-locker",
    label: "Digital Locker",
    placeholder: "Enter locker size or duration",
    buttonText: "Book Locker",
    route: "/digital-locker",
  },
];

export default function HeroSection() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("pnr-enquiry");
  const [inputValue, setInputValue] = useState("");

  const active = tabs.find((tab) => tab.key === activeTab) || tabs[0];

  const handleSubmit = () => {
    if (!inputValue.trim()) return;
    if (activeTab === "porter-booking") {
      const serviceType = inputValue.trim();
      navigate(
        {
          pathname: active.route,
          search: `?serviceType=${encodeURIComponent(serviceType)}`,
        },
        { state: { serviceType } }
      );
      return;
    }
    navigate({ pathname: active.route, search: `?query=${encodeURIComponent(inputValue.trim())}` }, { state: { query: inputValue.trim() } });
  };

  return (
    <section
      className="relative h-[700px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white">Welcome to Ahmedabad</h1>

        <p className="mt-5 text-lg md:text-xl text-gray-200 max-w-3xl">
          Experience seamless railway services, smart assistance, and premium passenger facilities through the R1 Super App.
        </p>

        <div className="mt-12 w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-8">
          <div className="flex flex-wrap justify-center gap-4 border-b pb-5">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => {
                  setActiveTab(tab.key);
                  setInputValue(tab.key === "porter-booking" ? "Luggage Service" : "");
                }}
                className={`rounded-3xl px-5 py-3 transition ${
                  activeTab === tab.key
                    ? "bg-blue-900 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-8 text-left">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-3">{active.label}</p>

            <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center">
              {activeTab === "porter-booking" ? (
                <select
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-1 h-14 rounded-3xl border border-slate-200 bg-slate-50 px-5 text-slate-900 outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="Luggage Service">Luggage Service</option>
                  <option value="Wheelchair Service">Wheelchair Service</option>
                  <option value="Combined Service">Combined Service</option>
                </select>
              ) : (
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={active.placeholder}
                  className="flex-1 h-14 rounded-3xl border border-slate-200 bg-slate-50 px-5 text-slate-900 outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
                />
              )}

              <button
                type="button"
                onClick={handleSubmit}
                className="h-14 rounded-3xl bg-blue-900 px-8 text-lg font-semibold text-white hover:bg-blue-800 transition disabled:cursor-not-allowed disabled:opacity-60"
                disabled={!inputValue.trim()}
              >
                {active.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
