import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Footer from "@/components/common/Footer";

export default function BookingConfirmation() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const booking = state?.booking;

  if (!booking) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-6">
        <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl p-10 text-center">
          <h1 className="text-3xl font-bold mb-4">No booking data available</h1>
          <p className="text-slate-500 mb-8">
            Please complete a booking first, or return to the booking page.
          </p>
          <button
            onClick={() => navigate("/porter-booking")}
            className="bg-blue-900 text-white px-8 py-4 rounded-xl hover:bg-blue-800 transition"
          >
            Go to Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="max-w-4xl mx-auto py-20 px-6">
        <div className="bg-white rounded-3xl shadow-xl p-10 text-center">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />

          <h1 className="text-4xl font-bold text-slate-800 mb-4">Booking Confirmed</h1>

          <p className="text-slate-500 text-lg mb-10">
            Your porter service request has been successfully confirmed.
          </p>

          <div className="grid gap-6 text-left">
            <div className="bg-slate-100 rounded-xl p-5">
              <p className="text-sm text-slate-500">Booking ID</p>
              <h2 className="font-bold text-xl">{booking.id}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-100 rounded-xl p-5">
                <p className="text-sm text-slate-500">Passenger Name</p>
                <h2 className="font-bold text-xl">{booking.name}</h2>
              </div>
              <div className="bg-slate-100 rounded-xl p-5">
                <p className="text-sm text-slate-500">Service Type</p>
                <h2 className="font-bold text-xl">{booking.serviceType}</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-100 rounded-xl p-5">
                <p className="text-sm text-slate-500">Pickup</p>
                <h2 className="font-bold text-xl">{booking.pickupAddress}</h2>
              </div>
              <div className="bg-slate-100 rounded-xl p-5">
                <p className="text-sm text-slate-500">Drop</p>
                <h2 className="font-bold text-xl">{booking.dropAddress}</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-100 rounded-xl p-5">
                <p className="text-sm text-slate-500">Status</p>
                <h2 className="font-bold text-xl text-green-600">{booking.status}</h2>
              </div>
              <div className="bg-slate-100 rounded-xl p-5">
                <p className="text-sm text-slate-500">Estimated Arrival</p>
                <h2 className="font-bold text-xl">{booking.estimatedArrival}</h2>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
            <button
              onClick={() => navigate("/track-porter")}
              className="bg-blue-900 text-white px-8 py-4 rounded-xl hover:bg-blue-800 transition"
            >
              Track Porter
            </button>
            <button
              onClick={() => navigate("/")}
              className="bg-slate-200 text-slate-900 px-8 py-4 rounded-xl hover:bg-slate-300 transition"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}