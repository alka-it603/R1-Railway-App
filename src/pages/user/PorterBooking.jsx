import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Briefcase, Accessibility, Infinity, CheckCircle, CreditCard, Users, ClipboardCheck } from "lucide-react";
import Footer from "@/components/common/Footer";

const defaultForm = {
  name: "",
  phone: "",
  pickupAddress: "",
  dropAddress: "",
  coachNumber: "",
  seatNumber: "",
  bags: 1,
  wheelchairs: 0,
  serviceType: "Luggage Service",
  notes: "",
};

const serviceOptions = [
  {
    label: "Luggage Service",
    description: "Safe luggage transport and porter assistance.",
  },
  {
    label: "Wheelchair Service",
    description: "Wheelchair support for passengers with mobility needs.",
  },
  {
    label: "Combined Service",
    description: "Complete assistance package including luggage and wheelchair support.",
  },
];

export default function PorterBooking() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const serviceTypeFromQuery = searchParams.get("serviceType");
  const serviceTypeFromState = location.state?.serviceType;
  const serviceType = serviceTypeFromState || serviceTypeFromQuery || defaultForm.serviceType;

  const [form, setForm] = useState(() => ({
    ...defaultForm,
    serviceType,
  }));
  const [error, setError] = useState("");

  useEffect(() => {
    const updatedServiceType = location.state?.serviceType || serviceTypeFromQuery;
    if (updatedServiceType && updatedServiceType !== form.serviceType) {
      setForm((prev) => ({
        ...prev,
        serviceType: updatedServiceType,
        bags: updatedServiceType === "Wheelchair Service" ? 0 : prev.bags || 1,
        wheelchairs: updatedServiceType === "Luggage Service" ? 0 : prev.wheelchairs || 1,
      }));
    }
    // Only synchronize from initial route state/query.
    // Do not re-apply when the user changes the selected service manually.
  }, [location.state?.serviceType, serviceTypeFromQuery]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "serviceType") {
      setForm((prev) => ({
        ...prev,
        serviceType: value,
        bags: value === "Wheelchair Service" ? 0 : prev.bags || 1,
        wheelchairs: value === "Luggage Service" ? 0 : prev.wheelchairs || 1,
      }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: name === "bags" || name === "wheelchairs" ? Number(value) : value,
    }));
  };

  const handleServiceSelect = (serviceType) => {
    setForm((prev) => ({
      ...prev,
      serviceType,
      bags: serviceType === "Wheelchair Service" ? 0 : prev.bags || 1,
      wheelchairs: serviceType === "Luggage Service" ? 0 : prev.wheelchairs || 1,
    }));
  };

  const validateForm = () => {
    if (!form.name.trim()) return "Please enter passenger name.";
    if (!form.phone.trim()) return "Please enter mobile number.";
    if (!form.pickupAddress.trim()) return "Please enter pickup address.";
    if (!form.dropAddress.trim()) return "Please enter drop address.";
    if (!form.coachNumber.trim()) return "Please enter coach number.";
    if (!form.seatNumber.trim()) return "Please enter seat number.";
    if (form.serviceType === "Luggage Service" && form.bags <= 0) return "Number of bags must be at least 1.";
    if (form.serviceType === "Wheelchair Service" && form.wheelchairs <= 0) return "Number of wheelchairs must be at least 1.";
    if (form.serviceType === "Combined Service") {
      if (form.bags <= 0) return "Number of bags must be at least 1.";
      if (form.wheelchairs <= 0) return "Number of wheelchairs must be at least 1.";
    }
    return "";
  };

  const handleBooking = (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");

    navigate("/booking-confirmation", {
      state: {
        booking: {
          id: "R1P123456",
          name: form.name,
          phone: form.phone,
          pickupAddress: form.pickupAddress,
          dropAddress: form.dropAddress,
          coachNumber: form.coachNumber,
          seatNumber: form.seatNumber,
          bags: form.bags,
          wheelchairs: form.wheelchairs,
          serviceType: form.serviceType,
          notes: form.notes,
          status: "Confirmed",
          estimatedArrival: "8 Minutes",
          station: "Ahmedabad Junction",
          porterName: "Ramesh Patel",
          porterId: "PT2045",
        },
      },
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <section
        className="relative overflow-hidden h-[340px] bg-slate-900 text-white"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(15,23,42,0.84), rgba(15,23,42,0.84)), url('https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-slate-950/40" />
        <div className="relative max-w-7xl mx-auto h-full px-6 flex flex-col justify-center">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300 mb-4">
              Porter Service
            </p>
            <h1 className="text-5xl font-bold tracking-tight mb-4">
              Book Porter Assistance
            </h1>
            <p className="text-lg leading-8 text-slate-200">
              Convenient luggage and accessibility support at Ahmedabad Junction. Our trained porters ensure a seamless transition from your vehicle to your train seat.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-14 px-6">
        <div className="grid gap-6 md:grid-cols-3 mb-10">
          {serviceOptions.map((service) => {
            const selected = form.serviceType === service.label;
            const Icon =
              service.label === "Luggage Service"
                ? Briefcase
                : service.label === "Wheelchair Service"
                ? Accessibility
                : Infinity;

            return (
              <div
                key={service.label}
                className={`rounded-[32px] border p-8 shadow-sm transition ${
                  selected
                    ? "border-blue-900 bg-blue-50 shadow-lg"
                    : "border-slate-200 bg-white hover:border-blue-900"
                }`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 mb-6 text-blue-900">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {service.label}
                </h3>
                <p className="text-sm text-slate-500 mb-6">
                  {service.description}
                </p>
                <button
                  type="button"
                  onClick={() => handleServiceSelect(service.label)}
                  className={`inline-flex items-center justify-center rounded-full border px-4 py-3 text-sm font-semibold transition ${
                    selected
                      ? "border-blue-900 bg-blue-900 text-white"
                      : "border-blue-900 text-blue-900 hover:bg-blue-50"
                  }`}
                >
                  Select {service.label.split(" ")[0]}
                </button>
              </div>
            );
          })}
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-3">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-900 text-white">
                <CheckCircle size={24} />
              </div>
              <p className="text-sm font-semibold text-slate-900">Choose Service</p>
            </div>
            <div className="space-y-3">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                <ClipboardCheck size={24} />
              </div>
              <p className="text-sm font-semibold text-slate-900">Enter Details</p>
            </div>
            <div className="space-y-3">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                <CreditCard size={24} />
              </div>
              <p className="text-sm font-semibold text-slate-900">Confirm Booking</p>
            </div>
            <div className="space-y-3">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                <Users size={24} />
              </div>
              <p className="text-sm font-semibold text-slate-900">Porter Assigned</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[32px] border border-slate-200 shadow-lg p-10">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-500 mb-3">
              Service Registration
            </p>
            <h2 className="text-3xl font-bold text-slate-900">
              Service Registration
            </h2>
          </div>

          {error && (
            <div className="mb-6 rounded-3xl bg-red-50 border border-red-200 p-5 text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleBooking} className="grid gap-6 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Passenger Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter passenger's full name"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Mobile Number
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Pickup Address / Location
                </label>
                <input
                  name="pickupAddress"
                  value={form.pickupAddress}
                  onChange={handleChange}
                  placeholder="e.g., Gate 1, Parking Zone A"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Drop Address / Location
                </label>
                <input
                  name="dropAddress"
                  value={form.dropAddress}
                  onChange={handleChange}
                  placeholder="e.g., Coach B2, Seat 45"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
                  required
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Coach Number
                  </label>
                  <input
                    name="coachNumber"
                    value={form.coachNumber}
                    onChange={handleChange}
                    placeholder="e.g. B2"
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Seat Number
                  </label>
                  <input
                    name="seatNumber"
                    value={form.seatNumber}
                    onChange={handleChange}
                    placeholder="e.g. 45"
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 items-end">
                {(form.serviceType === "Luggage Service" || form.serviceType === "Combined Service") && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Number of Luggage Bags
                    </label>
                    <div className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <button
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, bags: Math.max(1, prev.bags - 1) }))}
                        className="h-10 w-10 rounded-full bg-slate-200 text-slate-700 hover:bg-slate-300 transition"
                      >
                        -
                      </button>
                      <span className="flex-1 text-center text-base font-semibold text-slate-900">
                        {form.bags}
                      </span>
                      <button
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, bags: prev.bags + 1 }))}
                        className="h-10 w-10 rounded-full bg-slate-200 text-slate-700 hover:bg-slate-300 transition"
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}

                {(form.serviceType === "Wheelchair Service" || form.serviceType === "Combined Service") && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Number of Wheelchairs
                    </label>
                    <div className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <button
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, wheelchairs: Math.max(1, prev.wheelchairs - 1) }))}
                        className="h-10 w-10 rounded-full bg-slate-200 text-slate-700 hover:bg-slate-300 transition"
                      >
                        -
                      </button>
                      <span className="flex-1 text-center text-base font-semibold text-slate-900">
                        {form.wheelchairs}
                      </span>
                      <button
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, wheelchairs: prev.wheelchairs + 1 }))}
                        className="h-10 w-10 rounded-full bg-slate-200 text-slate-700 hover:bg-slate-300 transition"
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Service Type
                  </label>
                  <select
                    name="serviceType"
                    value={form.serviceType}
                    onChange={handleChange}
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="Luggage Service">Luggage Service</option>
                    <option value="Wheelchair Service">Wheelchair Service</option>
                    <option value="Combined Service">Combined Service</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Additional Instructions
                </label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Any specific requirements, fragile items, or landmark details..."
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full rounded-3xl bg-blue-900 px-8 py-5 text-lg font-semibold text-white shadow-lg transition hover:bg-blue-800"
              >
                Book Porter Service
              </button>
            </div>
          </form>

          <p className="mt-6 text-sm text-slate-500">
            Estimated cost will be displayed after booking confirmation based on luggage weight and specific requirements.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}