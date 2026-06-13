
import React from "react";
import { Routes, Route } from "react-router-dom";
import UserLayout from "@/layouts/UserLayout";
import Homepage from "@/pages/user/HomePage";
import Services from "@/pages/user/Services";
import Hotels from "@/pages/user/Hotels";
import AIAssistant from "@/pages/user/AIAssistant";
import TouristGuide from "@/pages/user/TouristGuide";
import Contact from "@/pages/user/Contact";
import PorterBooking from "@/pages/user/PorterBooking";
import BookingConfirm from "@/pages/user/BookingConfirmation";
import TrackPorter from "@/pages/user/TrackPorter";
import PNREnquiry from "@/pages/user/PNREnquiry";
import RetiringRoom from "@/pages/user/RetiringRoom";
import DigitalLocker from "@/pages/user/DigitalLocker";
import LiveStatus from "@/pages/user/LiveStatus";
import SupervisorDashboard from "@/pages/supervisor/Dashboard";
import SupervisorLayout from "@/layouts/SupervisorLayout";
import IncomingRequests from "@/pages/supervisor/IncomingRequests";

export default function App() {


  return (
      
      <Routes>
        <Route element={<UserLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/ai-assistant" element={<AIAssistant />} />
        <Route path="/tourist-guide" element={<TouristGuide />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pnr-enquiry" element={<PNREnquiry />} />
        <Route path="/live-status" element={<LiveStatus />} />
        <Route path="/retiring-room" element={<RetiringRoom />} />
        <Route path="/porter-booking" element={<PorterBooking />} />
        <Route path="/booking-confirmation" element={<BookingConfirm />} />
        <Route path="/track-porter" element={<TrackPorter />} />
        <Route path="/digital-locker" element={<DigitalLocker />} />
      </Route>
      <Route path="/supervisor" element={<SupervisorLayout />}>
  <Route path="dashboard" element={<SupervisorDashboard />} />
</Route>
</Routes>
      
  );
}