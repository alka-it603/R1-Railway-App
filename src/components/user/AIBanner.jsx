import { Bot, ArrowRight } from "lucide-react";

export default function AIBanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">

        <div className="flex items-start gap-5">
          <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
            <Bot className="w-9 h-9 text-white" />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-white">
              R1 AI Assistant
            </h2>

            <p className="text-blue-100 mt-3 max-w-2xl leading-7">
              Get instant answers about station services, PNR enquiries,
              retiring rooms, digital lockers, porter bookings and
              Ahmedabad tourist information through our smart AI assistant.
            </p>
          </div>
        </div>

        <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition">
          Chat Now
          <ArrowRight className="w-5 h-5" />
        </button>

      </div>
    </section>
  );
}