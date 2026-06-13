import { useState } from "react";
import { Lock, ShieldCheck, Package, CreditCard, Plus, Minus, MapPin, Clock4, CheckCircle2, Shield } from "lucide-react";
import Footer from "@/components/common/Footer";

const lockerOptions = [
  {
    title: "Small Locker",
    description: "Perfect for laptop bags, medium backpacks, or handbags.",
    hourly: "₹10",
    daily: "₹80",
    insurance: "Insurance covered up to ₹5k",
  },
  {
    title: "Medium Locker",
    description: "Fits standard cabin-sized trolley bags and larger backpacks.",
    hourly: "₹25",
    daily: "₹180",
    insurance: "Insurance covered up to ₹15k",
    popular: true,
  },
  {
    title: "Large Locker",
    description: "Designed for large suitcases, duffel bags, or multiple items.",
    hourly: "₹45",
    daily: "₹320",
    insurance: "Insurance covered up to ₹50k",
  },
];

const faqItems = [
  {
    question: "How long can I store luggage?",
    answer:
      "You can store your luggage for as long as needed during station operating hours. Daily rates apply per 24-hour period.",
  },
  {
    question: "Is my luggage insured?",
    answer:
      "Yes, all bookings include insurance coverage for the locker size selected. Coverage limits vary by locker type.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept UPI, debit/credit cards, and net banking for secure online payment.",
  },
  {
    question: "How do I retrieve my belongings?",
    answer:
      "Use your digital access code or QR code at the locker kiosk to retrieve your items anytime during operating hours.",
  },
];

export default function DigitalLocker() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50">
      <section
        className="relative overflow-hidden h-[340px] bg-slate-950 text-white"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(15,23,42,0.88), rgba(15,23,42,0.88)), url('https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-slate-950/40" />
        <div className="relative max-w-7xl mx-auto h-full px-6 flex flex-col justify-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300 mb-4">Secure Digital Locker</p>
          <h1 className="text-5xl font-bold tracking-tight max-w-3xl mb-4">
            Secure Digital Locker
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-200">
            Store your luggage safely while exploring Ahmedabad. High-security, insurance-covered, and instantly accessible.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-14 px-6">
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {lockerOptions.map((locker) => (
            <div
              key={locker.title}
              className={`rounded-[28px] border p-8 shadow-sm bg-white ${locker.popular ? "border-blue-900 shadow-lg" : "border-slate-200"}`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-blue-900">
                  <Lock size={24} />
                </div>
                {locker.popular ? (
                  <span className="rounded-full bg-blue-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                    Most Popular
                  </span>
                ) : (
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                    Available
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{locker.title}</h3>
              <p className="text-sm leading-6 text-slate-500 mb-6">{locker.description}</p>
              <div className="space-y-3 text-slate-700 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span>Hourly Rate</span>
                  <span className="font-semibold">{locker.hourly}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Daily Rate</span>
                  <span className="font-semibold">{locker.daily}</span>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-600 mb-6">
                <span className="inline-flex items-center gap-2 text-emerald-700 font-medium">
                  <ShieldCheck size={16} /> {locker.insurance}
                </span>
              </div>
              <button className="w-full rounded-3xl bg-blue-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-800">
                Book Locker
              </button>
            </div>
          ))}
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm mb-12">
          <div className="grid gap-6 md:grid-cols-4 text-center">
            <div className="space-y-3">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-blue-900">
                <CheckCircle2 size={24} />
              </div>
              <p className="text-sm font-semibold text-slate-900">Select Locker</p>
              <p className="text-sm text-slate-500">Pick the size that fits your bags from our available stock.</p>
            </div>
            <div className="space-y-3">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-blue-900">
                <CreditCard size={24} />
              </div>
              <p className="text-sm font-semibold text-slate-900">Book Online</p>
              <p className="text-sm text-slate-500">Reserve your space instantly through secure digital payment.</p>
            </div>
            <div className="space-y-3">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-blue-900">
                <Package size={24} />
              </div>
              <p className="text-sm font-semibold text-slate-900">Store Luggage</p>
              <p className="text-sm text-slate-500">Use your digital code or QR to access the locker instantly.</p>
            </div>
            <div className="space-y-3">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-blue-900">
                <Shield size={24} />
              </div>
              <p className="text-sm font-semibold text-slate-900">Retrieve Securely</p>
              <p className="text-sm text-slate-500">Collect belongings anytime using your mobile key.</p>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <p className="mt-3 text-sm text-slate-500 max-w-2xl mx-auto">
              Answers to common questions about locker booking, insurance, payments, and retrieval.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const open = openFaq === index;
              return (
                <div key={item.question} className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : index)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="font-medium text-slate-900">{item.question}</span>
                    <span className="text-blue-900">
                      {open ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  {open && (
                    <div className="border-t border-slate-200 px-6 pb-5 text-sm leading-7 text-slate-600">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
