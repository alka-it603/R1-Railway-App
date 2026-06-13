import { useState } from "react";
import { Search, Clock3 } from "lucide-react";
import Footer from "@/components/common/Footer";

const recentPnrs = ["4235678901", "8210933452", "1245670089"];

export default function PNREnquiry() {
  const [pnr, setPnr] = useState("");

  return (
    <div className="min-h-screen bg-slate-50">
      <section
        className="relative overflow-hidden h-[320px] bg-slate-950 text-white"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(15,23,42,0.8), rgba(15,23,42,0.8)), url('https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-slate-950/30" />
        <div className="relative max-w-6xl mx-auto h-full px-6 flex flex-col justify-center">
          <h1 className="text-5xl font-bold tracking-tight mb-4">Check Your PNR Status</h1>
          <p className="max-w-2xl text-lg text-slate-200">
            Track your reservation details instantly.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-12 px-6">
        <div className="rounded-[32px] bg-white p-8 shadow-xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <p className="text-slate-500 uppercase tracking-[0.3em] text-sm mb-2">PNR Enquiry</p>
              <h2 className="text-3xl font-bold text-slate-900">Enter 10-digit PNR Number</h2>
            </div>
            <div className="flex gap-3">
              <button className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition">
                Clear
              </button>
              <button className="rounded-2xl bg-blue-900 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800 transition">
                Check Status
              </button>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-slate-50 px-4 py-4 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
              <div className="flex flex-1 items-center gap-3 rounded-3xl bg-white px-4 py-3 border border-slate-200 shadow-sm">
                <Search className="text-slate-400" size={20} />
                <input
                  value={pnr}
                  onChange={(e) => setPnr(e.target.value)}
                  type="text"
                  maxLength={10}
                  placeholder="e.g. 4235678901"
                  className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>
              <button className="min-w-[180px] rounded-3xl bg-blue-900 px-6 py-4 text-sm font-semibold text-white hover:bg-blue-800 transition">
                Check Status
              </button>
              <button className="min-w-[140px] rounded-3xl border border-blue-900 bg-white px-6 py-4 text-sm font-semibold text-blue-900 hover:bg-slate-100 transition">
                Clear
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[32px] bg-white p-8 shadow-xl">
          <div className="mb-6 flex items-center gap-3 text-slate-900">
            <Clock3 size={24} />
            <h3 className="text-xl font-semibold">Recent Searches</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {recentPnrs.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setPnr(item)}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
