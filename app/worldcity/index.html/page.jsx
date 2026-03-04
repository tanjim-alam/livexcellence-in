import DevelopersSection from "@/components/DevelopersSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import HeroSection from "@/components/HeroSection";
import LocationsSection from "@/components/LocationsSection";
import RecentlyLaunchedProjects from "@/components/RecentlyLaunchedProjects";

function page(){
    return(
        <>
        <HeroSection/>
    <LocationsSection/>
    <FeaturedProjects/>
    <RecentlyLaunchedProjects/>
    <DevelopersSection/>
        </>
    )
}

export default page;