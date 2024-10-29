import AboutSection from "@/components/about-section";
import FixedSidebar from "@/components/fixed-sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import TechnicalSkills from "@/components/technical-skills";
import VideoBackground from "@/components/video-background";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
    <VideoBackground/>
    <div className="container px-0 py-4">
    <div className="grid grid-cols-12 ">
      <div className="grid col-span-4">
       <FixedSidebar/>
      </div>
      <div className="grid gap-6 col-span-8">
        <AboutSection/>
        <TechnicalSkills/>
      </div>
    </div>
    </div>
    </div>
    
  );
}
