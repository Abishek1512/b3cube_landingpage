// import { Card } from "@/components/ui/card";
'use client'
import Image from "next/image";
import Features from "../components/LandingPage/features";
import Benefits from "../components/LandingPage/Benefits";
import HeroSection from "./herobanner/page";
import Solutions from '../components/LandingPage/Solutions'
import Tokenomics from '../components/LandingPage/Tokenomics'

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
      <Tokenomics/>
    {/* </div> */}
    </>
  );
}

export default  Home;