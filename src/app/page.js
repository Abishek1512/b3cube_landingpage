// import { Card } from "@/components/ui/card";
"use client";
import Image from "next/image";
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

import RoadmapSection from '../app/component/RoadMap'


function Home() {
  return (
    <>
      {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"> */}
      <HeroSection />
      <div className="my-8">
        <Features />
      </div>
      <Solutions/>
      <div>
        <Benefits />
      </div>

      <TokenInroduction />
      <Tokenomics/>
    {/* </div> */}
      <section className="container mx-auto">
        <Faqs />
      </section>

      <div>
        <TokenReferral/>
      </div>


      <TeamCard />

<CarouselCard />
<div>
        <AdvisorsSection />
      </div>


      {/* </div> */}
    </>
  );
}

export default Home;
