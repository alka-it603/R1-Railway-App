
import { NavLink } from "react-router-dom";
import {
  Home,
  Ticket,
  Train,
  Bed,
  Briefcase,
  Lock,
  Hotel,
  Bot,
  Map,
  User,
  Phone,
  LogOut,
} from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-screen w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-blue-700">
            R1 Railway
          </h1>
          <p className="text-sm text-gray-500">Ahmedabad Smart Rail</p>
        </div>

        <nav className="flex flex-col p-4 gap-2">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-100"
          >
            <Home size={20} />
            Home
          </NavLink>

          <NavLink
            to="/pnr-enquiry"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-100"
          >
            <Ticket size={20} />
            PNR Enquiry
          </NavLink>

          <NavLink
            to="/live-status"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-100"
          >
            <Train size={20} />
            Live Train Status
          </NavLink>

          <NavLink
            to="/retiring-room"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-100"
          >
            <Bed size={20} />
            Retiring Room
          </NavLink>

          <NavLink
            to="/porter-booking"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-100"
          >
            <Briefcase size={20} />
            Porter Service
          </NavLink>

          <NavLink
            to="/digital-locker"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-100"
          >
            <Lock size={20} />
            Digital Locker
          </NavLink>

          <NavLink
            to="/hotels"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-100"
          >
            <Hotel size={20} />
            Hotels
          </NavLink>

          <NavLink
            to="/ai-assistant"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-100"
          >
            <Bot size={20} />
            AI Assistant
          </NavLink>

          <NavLink
            to="/tourist-guide"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-100"
          >
            <Map size={20} />
            Tourist Guide
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-100"
          >
            <User size={20} />
            Profile
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-100"
          >
            <Phone size={20} />
            Contact
          </NavLink>

          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-100 text-red-600 mt-4"
          >
            <LogOut size={20} />
            Logout
          </button>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;