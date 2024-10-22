// import { Card } from "@/components/ui/card";
'use client'
import Image from "next/image";
import Features from "../components/LandingPage/features";
import Benefits from "../components/LandingPage/Benefits";
import HeroSection from "./herobanner/page"
import Faqs from '../components/LandingPage/Faqs'
function Home() {
  return (
    <>
      {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"> */}
      <section className="container mx-auto">
        <Faqs />
      </section>
      <HeroSection />
      <div className="my-8">
        <Features />
      </div>
      <div>
        <Benefits />
      </div>
      {/* </div> */}
    </>
  );
}

export default Home;