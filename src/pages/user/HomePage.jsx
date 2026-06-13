import React from "react";
import HeroSection from "@/components/user/HeroSection";
import StationServices from "@/components/user/StationServices";
import DiscoverAhmedabad from "@/components/user/DiscoverAhmedabad";
import AIBanner from "@/components/user/AIBanner";
import HotelsSection from "@/components/user/HotelsSection";
import MobilitySection from "@/components/user/MobilitySection";
import Footer from "@/components/common/Footer";


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StationServices />
      <DiscoverAhmedabad />
      <AIBanner />
      <HotelsSection />
      <MobilitySection />
      <Footer />
    </>
  );
}
