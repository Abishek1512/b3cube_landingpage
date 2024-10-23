'use client'
import Image from "next/image";
import SectionHeader from "../SectionHeader";
import Lottie from "lottie-react";
import walletAnimation from './wallet_animation.json'
import CalenderAnimation from './calender_animation.json'

export default function Benefits() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center gap-[2.4rem]">
        <SectionHeader
          primaryButtonText="Benefits"
          title="Not Your Typical DeFi Platform"
          description={`From the founders of 
            <a href="https://bcube-landing.webflow.io/" aria-current="page" className="underline">
              b-cube.ai
            </a>
            , a fully regulated VASP (Virtual Asset Service Provider), we are
            proud to present B3X – a one-stop solution for investors, traders,
            and beginners alike.`}
        />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          <div className="col-span-1 row-span-1 md:col-span-1 md:row-span-2 flex justify-center items-center flex-col bg-[#16171c] p-[2.3rem] rounded-xl border border-[#ffffff08]">
          <Lottie animationData={CalenderAnimation} loop={true} />
            <div className="text-base mt-[1.5rem] mb-[0.8rem] font-semibold leading-[130%] text-center text-white">
              Build, Test and Launch a Crypto Fund
            </div>
            <div className="leading-[160%] text-center text-[0.9rem] color-[#b7b8be] font-inter">
              Creating a fund on B3X is simple and powerful. Use AI-driven tools
              to design, backtest, and launch your strategy, with full control
              over customization. Attract investors easily and manage your fund
              with real-time performance tracking.
            </div>
          </div>
          <div className="col-span-1 row-span-1 flex justify-center items-center flex-col bg-[#16171c] p-[2.3rem] rounded-xl border border-[#ffffff08]">
            <div className="leading-[0]">
              <Image
                src={"svg/LandingPage/InvestorPlayground.svg"}
                width={25}
                height={25}
              />
            </div>
            <div className="text-base mt-[1.5rem] mb-[0.8rem] font-semibold leading-[130%] text-center text-white">
              An Investors Playground
            </div>
            <div className="leading-[160%] text-center text-[0.9rem] color-[#b7b8be] font-inter">
              With B3X, you can access a diverse range of expertly managed funds
              while fully controlling your assets. AI tools guide you to the
              best options for your goals, supported by real-time performance
              tracking and transparent operations so that you can make smart,
              confident decisions every step of the way.
            </div>
          </div>
          <div className="col-span-1 row-span-1 bg-no-repeat bg-[url('https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e9fd_benefits-top-right-card-bg.svg')] bg-[top_right] bg-cover md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-3 flex justify-center items-center flex-col bg-[#16171c] p-[2.3rem] rounded-xl border border-[#ffffff08]">
            <Lottie animationData={walletAnimation} loop={true} className="mb-20"/>
            <div className="text-base mt-[1.5rem] mb-[0.8rem] font-semibold leading-[130%] text-center text-white">
              Safer Than Your Bank
            </div>
            <div className="leading-[160%] text-center text-[0.9rem] color-[#b7b8be] font-inter">
              B3X keeps your assets secure by letting you hold them yourself.
              With no single point of failure, smart contracts handle everything
              automatically, ensuring full transparency and giving you complete
              control and peace of mind.
            </div>
          </div>
          <div className="px-[6rem] py-[7rem] row-start-3 col-start-1 row-end-4 col-end-2 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 flex flex-col items-center rounded-2xl border-[#ffffff08] bg-[#16171c]">
            <Image
              src="https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e9eb_logo.svg"
              width={175}
              height={175}
              className="relative"
            />
          </div>
          <div className="flex flex-col p-[2.3rem] md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1 bg-no-repeat bg-cover bg-[bottom_right] bg-[#16171c] bg-[url('https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e9fe_benefits-bottom-left-card-bg.svg')] rounded-xl border border-[#ffffff08]">
            <div className="leading-[0]">
              <Image
                src={"svg/LandingPage/BenefitsAiTechnology.svg"}
                width={25}
                height={25}
              />
            </div>
            <div className="text-base mt-[1.5rem] mb-[0.8rem] font-semibold leading-[130%] text-white">
              Intuitive AI Technology
            </div>
            <div className="leading-[160%] text-[0.9rem] color-[#b7b8be] font-inter">
              The Fund Oracle uses AI to select the best fund for users based on
              their criteria. At the same time, our SFSS (Strategy Factory,
              Strategy Selector) technology identifies the top strategies from
              thousands defined by fund managers.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
