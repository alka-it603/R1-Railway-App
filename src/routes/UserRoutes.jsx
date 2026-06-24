import { Routes, Route } from "react-router-dom";
import UserLayout from "@/layouts/UserLayout";
import HomePage from "@/pages/user/HomePage";
import Services from "@/pages/user/Services";
import Hotels from "@/pages/user/Hotels";
import AIAssistant from "@/pages/user/AIAssistant";
import TouristGuide from "@/pages/user/TouristGuide";
import Contact from "@/pages/user/Contact";
import PNREnquiry from "@/pages/user/PNREnquiry";
import LiveStatus from "@/pages/user/LiveStatus";
import RetiringRoom from "@/pages/user/RetiringRoom";
import PorterBooking from "@/pages/user/PorterBooking";
import BookingConfirmation from "@/pages/user/BookingConfirmation";
import TrackPorter from "@/pages/user/TrackPorter";
import DigitalLocker from "@/pages/user/DigitalLocker";

export default function UserRoutes() {
  return (
    <Routes>
                   {/* All user routes */}
         <Route element={<UserLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<Services />} />
                <Route path="/hotels" element={<Hotels />} />
                <Route path="/ai-assistant" element={<AIAssistant />} />
                <Route path="/tourist-guide" element={<TouristGuide />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pnr-enquiry" element={<PNREnquiry />} />
                <Route path="/live-status" element={<LiveStatus />} />
                <Route path="/retiring-room" element={<RetiringRoom />} />
                <Route path="/porter-booking" element={<PorterBooking />} />
                <Route path="/booking-confirmation" element={<BookingConfirmation />} />
                <Route path="/track-porter" element={<TrackPorter />} />
                <Route path="/digital-locker" element={<DigitalLocker />} />
      </Route>
    </Routes>
  );
}