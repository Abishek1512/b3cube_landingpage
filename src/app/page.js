// import { Card } from "@/components/ui/card";
"use client";
import Features from "../components/LandingPage/features";
import Benefits from "../components/LandingPage/Benefits";
import AdvisorsSection from "./component/AdvisorsCards";
import { GlareCardDemo } from "./component/Glarecard";
import TokenReferral from "./tokenReferral/page";
import TeamCard from "./component/TeamCard";
import { CarouselCard } from "./component/CarouselCard";
import HeroSection from "./herobanner/page"
import TokenInroduction from "../components/IntroToken/Page";
import Faqs from '../components/LandingPage/Faqs'

import Solutions from '../components/LandingPage/Solutions'
import Tokenomics from '../components/LandingPage/Tokenomics'
import { ScaleAnimation } from '../app/component/ScalingAnimation'
import CommunityCard from '../components/LandingPage/CommunityCard'

import RoadmapSection from '../app/component/RoadMap'


function Home() {
  return (
    <div className="grid gap-20">
        <HeroSection />
        <Features />
        <Solutions/>
        <Benefits />
        <TokenInroduction />
        <Tokenomics/>
        <section className="container mx-auto">
          <Faqs />
        </section>
        <TokenReferral/>
        <TeamCard />
        <CarouselCard />
        <AdvisorsSection />
        <CommunityCard />
    </div>
  );
}

export default Home;