import hotel1 from "@/assets/hotel1.png";
import hotel2 from "@/assets/hotel2.png";
import hotel3 from "@/assets/hotel3.png";

const hotels = [
  {
    image: hotel1,
    name: "The House of MG",
    location: "2 km from Ahmedabad Junction",
    rating: "⭐ 4.7",
    price: "₹4,500 / night",
  },
  {
    image: hotel2,
    name: "Hyatt Regency Ahmedabad",
    location: "3 km from Ahmedabad Junction",
    rating: "⭐ 4.8",
    price: "₹6,800 / night",
  },
  {
    image: hotel3,
    name: "Courtyard by Marriott",
    location: "4 km from Ahmedabad Junction",
    rating: "⭐ 4.6",
    price: "₹5,900 / night",
  },
];

export default function HotelsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-4xl font-bold text-slate-900">
            Hotels Near Ahmedabad Junction
          </h2>

          <p className="text-slate-500 mt-2">
            Find premium stays for your journey.
          </p>
        </div>

        <button className="border border-slate-300 px-5 py-2 rounded-lg hover:bg-slate-100 transition">
          View All
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotels.map((hotel, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-60 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold">
                {hotel.name}
              </h3>

              <p className="text-slate-500 mt-2">
                {hotel.location}
              </p>

              <div className="flex justify-between items-center mt-5">
                <span className="text-yellow-500 font-medium">
                  {hotel.rating}
                </span>

                <span className="font-bold text-blue-900">
                  {hotel.price}
                </span>
              </div>

              <button className="w-full mt-6 bg-blue-900 text-white py-3 rounded-xl hover:bg-blue-800 transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}