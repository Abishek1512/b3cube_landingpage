'use client'
import Image from "next/image";
import SectionHeader from "../SectionHeader";
import Lottie from "lottie-react";
import walletAnimation from './wallet_animation.json'
import CalenderAnimation from './calender_animation.json'
import { Mail } from "lucide-react";
import { useState } from 'react'

export default function Benefits() {

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  function handleEmailSubmit(e) {
    e.preventDefault();
    if(email === ''){
      // Handle error message show
    } else {
      setLoading(true)
      setTimeout(() => {
        setShowSuccessMessage(true);
        setLoading(false);
        setEmail('');
      },[2000])
    }
  }
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
        <div className="lg:bg-[url('https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e9b5_benefits-join-bg-grid.webp')] bg-[50%_100%] bg-no-repeat bg-cover justify-center items-start mt-[9.2rem] pb-9 w-full flex">
                <div className="max-w-lg w-full">
                  <h3 className="mb-12 text-base mt-0 text-white text-center">Enter the email, and join the waitlist for exciting benefits</h3>
                  {showSuccessMessage ? <div className="p-[20px] text-center text-sm text-white">Thank you! Your submission has been received!</div> : <div className="bg-[#141418] border border-[#ffffff1f] rounded-[12px] justify-start items-center p-[0.4rem_0.4rem_0.4rem_1.2rem] flex">
                    <Mail width={25} height={25} className="mr-3"/>
                    <input required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email to join the waitlist" type="email" name="email" className="focus-visible:border:none focus-visible:outline-0 focus-visible:outline-transparent h-[40px] text-white text-base bg-transparent border-0 mb-0 px-0 w-full"/>
                    <button className="border-none text-[0.65rem] p-3 text-nowrap cursor-pointer text-[#040405] bg-[#cdfe6c] rounded-lg font-semibold leading-[1.5] transition-all duration-200 shadow-[inset_0_-2px_#bbe95f]" onClick={(e) => {handleEmailSubmit(e)}}>{!loading ? `Join Beta Testing` : 'Please wait...'}</button>
                  </div>}
                  <div className="mt-8 text-center text-[#e6e6e699] text-[0.8rem]">By subscribing, I agree to the terms and conditions.</div>
                </div>
        </div>
      </div>
    </div>
  );
}
