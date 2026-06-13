import React from "react";
import Footer from "@/components/common/Footer";

export default function TouristGuide() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="bg-white rounded-3xl shadow-xl p-10">
          <h1 className="text-4xl font-bold mb-4">Tourist Guide</h1>
          <p className="text-slate-600 mb-6">
            Discover tourist attractions, city guides, and station area services.
          </p>
          <div className="grid gap-4">
            <button className="w-full bg-blue-900 text-white rounded-2xl py-4 font-semibold hover:bg-blue-800 transition">
              Explore Guide
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
