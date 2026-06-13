import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "@/components/common/Footer";

const createLiveStatus = (query) => {
  return {
    query,
    type: "Train Number",
    trainNumber: query,
    status: "On Time",
    currentLocation: "Ahmedabad Junction",
    nextStation: "Gandhinagar Capital",
    platform: "3",
    scheduledArrival: "17:25",
    estimatedArrival: "17:25",
    lastUpdated: "Just now",
    delay: "0 min",
  };
};

export default function LiveStatus() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const queryFromState = location.state?.query;
  const queryFromSearch = searchParams.get("query") || "";
  const initialQuery = queryFromState || queryFromSearch;

  const [trainQuery, setTrainQuery] = useState(initialQuery);
  const [statusData, setStatusData] = useState(initialQuery ? createLiveStatus(initialQuery) : null);

  useEffect(() => {
    if (initialQuery) {
      setTrainQuery(initialQuery);
      setStatusData(createLiveStatus(initialQuery));
    }
  }, [initialQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!trainQuery.trim()) return;
    const updatedQuery = trainQuery.trim();
    setStatusData(createLiveStatus(updatedQuery));
    navigate({ pathname: "/live-status", search: `?query=${encodeURIComponent(updatedQuery)}` }, { replace: true });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="bg-white rounded-3xl shadow-xl p-10">
          <h1 className="text-4xl font-bold mb-4">Live Train Status</h1>
          <p className="text-slate-600 mb-6">
            Enter your train number to get the latest live status updates.
          </p>

          <form onSubmit={handleSubmit} className="grid gap-4">
            <input
              type="text"
              value={trainQuery}
              onChange={(e) => setTrainQuery(e.target.value)}
              placeholder="Enter Train Number"
              className="border rounded-2xl p-4"
            />
            <button
              type="submit"
              className="w-full bg-blue-900 text-white rounded-2xl py-4 font-semibold hover:bg-blue-800 transition"
            >
              Get Live Status
            </button>
          </form>

          {statusData && (
            <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Live Update</p>
                  <h2 className="text-3xl font-bold text-slate-900">{statusData.type} {statusData.query}</h2>
                </div>
                <div className="rounded-3xl bg-slate-900 px-6 py-4 text-white text-center">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Status</p>
                  <p className="text-xl font-semibold">{statusData.status}</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl bg-white p-6 shadow-sm">
                  <p className="text-sm text-slate-500">Train Number</p>
                  <p className="text-2xl font-bold text-slate-900">{statusData.trainNumber}</p>
                </div>
                <div className="rounded-3xl bg-white p-6 shadow-sm">
                  <p className="text-sm text-slate-500">Current Location</p>
                  <p className="text-2xl font-bold text-slate-900">{statusData.currentLocation}</p>
                </div>
                <div className="rounded-3xl bg-white p-6 shadow-sm">
                  <p className="text-sm text-slate-500">Next Station</p>
                  <p className="text-2xl font-bold text-slate-900">{statusData.nextStation}</p>
                </div>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <div className="rounded-3xl bg-slate-100 p-6 text-slate-700">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Platform</p>
                  <p className="text-2xl font-bold">{statusData.platform}</p>
                </div>
                <div className="rounded-3xl bg-slate-100 p-6 text-slate-700">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Scheduled Arrival</p>
                  <p className="text-2xl font-bold">{statusData.scheduledArrival}</p>
                </div>
                <div className="rounded-3xl bg-slate-100 p-6 text-slate-700">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Delay</p>
                  <p className="text-2xl font-bold">{statusData.delay}</p>
                </div>
              </div>

              <p className="mt-6 text-sm text-slate-500">Last updated: {statusData.lastUpdated}</p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
