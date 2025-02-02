import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { Meteors } from "@/components/ui/meteors";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { Spotlight } from "@/components/ui/spotlight-new";
import { StarsBackground } from "@/components/ui/stars-background";
import { menuItens, teckItens } from "../../data";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="w-full md:items-center md:justify-center antialiased relative overflow-hidden">
      <FloatingNav navItems={menuItens} />
      <Hero />
      <Approach />
      <Education />
      <HeroParallax products={teckItens} />
      <RecentProjects />
      <Footer />

      {/* Effects */}
      <Spotlight />
      <ShootingStars className="-z-50" minDelay={2000} maxDelay={5000} />
      <StarsBackground className="-z-50" />
      <Meteors className="-z-50" number={4} />
    </main>
  );
}
