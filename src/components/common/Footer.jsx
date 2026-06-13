import { FaFacebookF} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <h2 className="text-3xl font-bold mb-4">
              R1
            </h2>

            <p className="text-slate-300 leading-7">
              Smart Railway Super App for Ahmedabad Junction providing
              seamless passenger services, AI assistance, retiring rooms,
              porter booking and digital locker facilities.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Services
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li>PNR Enquiry</li>
              <li>Live Train Status</li>
              <li>Retiring Room</li>
              <li>Porter Service</li>
              <li>Digital Locker</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Support</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Follow Us
            </h3><q></q>

            <div className="flex gap-4">

              <button className="p-3 rounded-full bg-slate-800 hover:bg-blue-700 transition">
                <FaFacebookF size={20} />
              </button>

              <button className="p-3 rounded-full bg-slate-800 hover:bg-pink-600 transition">
                <FaInstagram size={20} />
              </button>

              <button className="p-3 rounded-full bg-slate-800 hover:bg-sky-500 transition">
                <FaXTwitter size={20} />
              </button>

              <button className="p-3 rounded-full bg-slate-800 hover:bg-blue-600 transition">
                <FaLinkedinIn size={20} />
              </button>

            </div>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-slate-400 text-sm">
          © 2026 R1 Railway Super App. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}