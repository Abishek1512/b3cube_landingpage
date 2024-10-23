// import { Card } from "@/components/ui/card";
"use client";
import Features from "../components/LandingPage/features";
import Benefits from "../components/LandingPage/Benefits";
import AdvisorsSection from "./advisors/page";
import TokenReferral from "./tokenReferral/page";
import TeamCard from "./component/TeamCard";
import { CarouselCard } from "./component/CarouselCard";
import HeroSection from "./herobanner/page"
import TokenInroduction from "../components/IntroToken/Page";
import Faqs from '../components/LandingPage/Faqs'
import Solutions from '../components/LandingPage/Solutions'
import Tokenomics from '../components/LandingPage/Tokenomics'
import { ScaleAnimation } from '../app/component/ScalingAnimation'

function Home() {
  return (
    <div className="grid gap-20">
        <HeroSection />
        <Features />
        <Solutions/>
        <Benefits />
        <ScaleAnimation>
          <TokenInroduction />
        </ScaleAnimation>
        <Tokenomics/>
        <section className="container mx-auto">
          <Faqs />
        </section>
        <TokenReferral/>
        <TeamCard />
        <CarouselCard />
        <AdvisorsSection />
    </div>
  );
}

export default Home;