import DevelopersSection from "@/components/DevelopersSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import HeroSection from "@/components/HeroSection";
import LocationsSection from "@/components/LocationsSection";
import RecentlyLaunchedProjects from "@/components/RecentlyLaunchedProjects";
import ReraDisclaimer from "@/components/ReraDisclaimer";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <LocationsSection/>
    <FeaturedProjects/>
    <RecentlyLaunchedProjects/>
    <DevelopersSection/>
    </>
  );
}
