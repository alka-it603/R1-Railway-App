import sabarmati from "@/assets/sabarmati.png";
import adalaj from "@/assets/adalaj.png";
import kankaria from "@/assets/kankarialake.png";
import manekchowk from "@/assets/manek.png";



const places = [
  {
    image: sabarmati,
    title: "Sabarmati Riverfront",
    description: "Enjoy scenic walks and vibrant views along Ahmedabad's iconic riverfront.",
  },
  {
    image: adalaj,
    title: "Adalaj Stepwell",
    description: "Explore the historic five-storey stepwell known for its intricate architecture.",
  },
  {
    image: kankaria,
    title: "Kankaria Lake",
    description: "Perfect destination for families with boating, zoo and entertainment.",
  },
  {
    image: manekchowk,
    title: "Manek Chowk",
    description: "Experience Ahmedabad's famous street food and local shopping culture.",
  },
];

export default function DiscoverAhmedabad() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-4xl font-bold text-slate-900">
            Discover Ahmedabad
          </h2>

          <p className="text-slate-500 mt-2">
            Explore popular destinations around Ahmedabad Junction.
          </p>
        </div>

        <button className="px-5 py-2 rounded-lg border border-slate-300 hover:bg-slate-100 transition">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {places.map((place, index) => (

          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
          >

            <img
              src={place.image}
              alt={place.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">

              <h3 className="text-xl font-semibold text-slate-900">
                {place.title}
              </h3>

              <p className="text-sm text-slate-500 mt-3 leading-6">
                {place.description}
              </p>

              <button className="mt-5 text-blue-700 font-medium hover:underline">
                Explore →
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}