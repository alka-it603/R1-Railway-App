import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/common/Footer";
import {
  Phone,
  MapPin,
  User,
  Briefcase,
} from "lucide-react";

const timeline = [
  { label: "Booking Confirmed", status: "completed" },
  { label: "Porter Assigned", status: "completed" },
  { label: "Porter En Route", status: "current" },
  { label: "Porter Arrived", status: "pending" },
];

export default function TrackPorter() {
  const navigate = useNavigate();
  const [refreshCount, setRefreshCount] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-center mb-10">Track Your Porter</h1>

        <div className="bg-white rounded-3xl shadow-lg p-10">
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
            <div>
              <p className="text-slate-500">Current Status</p>
              <h2 className="text-3xl font-semibold">Porter en route</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setRefreshCount((count) => count + 1)}
                className="rounded-2xl bg-blue-900 text-white px-5 py-3 hover:bg-blue-800 transition"
              >
                Refresh
              </button>
              <button
                className="rounded-2xl bg-slate-100 text-slate-900 px-5 py-3 hover:bg-slate-200 transition"
              >
                Call Porter
              </button>
              <button
                onClick={() => navigate("/")}
                className="rounded-2xl bg-slate-200 text-slate-900 px-5 py-3 hover:bg-slate-300 transition"
              >
                Back Home
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="rounded-3xl border border-slate-200 p-6">
                <h3 className="text-2xl font-semibold mb-4">Porter Details</h3>
                <div className="space-y-4 text-slate-700">
                  <div className="flex items-center gap-3">
                    <User className="text-blue-700" />
                    <span>Ramesh Patel</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-blue-700" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="text-blue-700" />
                    <span>Porter ID: PT2045</span>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 p-6">
                <h3 className="text-2xl font-semibold mb-4">Service Details</h3>
                <div className="space-y-4 text-slate-700">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-blue-700" />
                    <span>Pickup: Platform 1 Entrance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-green-700" />
                    <span>Drop: Coach B2 Seat 34</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-slate-200 p-6">
                <h3 className="text-2xl font-semibold mb-4">Live Status</h3>
                <p className="text-slate-700 mb-4">Porter is on the way to your pickup location.</p>
                <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">
                  <div className="bg-green-500 h-4 rounded-full w-2/3"></div>
                </div>
                <p className="mt-3 text-sm text-slate-500">ETA: 8 minutes</p>
                <p className="text-sm text-slate-500">Refresh count: {refreshCount}</p>
              </div>

              <div className="rounded-3xl border border-slate-200 p-6">
                <h3 className="text-2xl font-semibold mb-4">Booking Information</h3>
                <div className="grid gap-4 text-slate-700">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Booking ID</p>
                    <p className="font-semibold">R1P123456</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Service</p>
                    <p className="font-semibold">Luggage Service</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Coach</p>
                    <p className="font-semibold">B2</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Seat</p>
                    <p className="font-semibold">34</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-slate-200 p-6 bg-slate-50">
            <h3 className="text-2xl font-semibold mb-6">Progress Timeline</h3>
            <div className="space-y-4">
              {timeline.map((step) => (
                <div key={step.label} className="flex items-center gap-4">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      step.status === "completed"
                        ? "bg-blue-700"
                        : step.status === "current"
                        ? "bg-green-500"
                        : "bg-slate-300"
                    }`}
                  />
                  <div>
                    <p className="font-semibold">{step.label}</p>
                    <p className="text-sm text-slate-500">
                      {step.status === "completed"
                        ? "Done"
                        : step.status === "current"
                        ? "In progress"
                        : "Waiting"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}