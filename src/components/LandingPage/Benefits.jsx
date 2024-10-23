'use client'
import Image from "next/image";
import SectionHeader from "../SectionHeader";

export default function Benefits() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center gap-[2.4rem]">
      <SectionHeader
         primaryButtonText="Benefits"
         title="Not Your Typical DeFi Platform"
         description={`            From the founders of 
            <a href="https://bcube-landing.webflow.io/" aria-current="page" className="underline">
              b-cube.ai
            </a>
            , a fully regulated VASP (Virtual Asset Service Provider), we are
            proud to present B3X – a one-stop solution for investors, traders,
            and beginners alike.`}
         />
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 row-span-2 flex justify-center items-center flex-col bg-[#16171c] p-[2.4rem] rounded-xl border border-[#ffffff08]">
            <div data-w-id="a33b0875-c492-72aa-5615-b8713f0a6389" data-animation-type="lottie" data-src="https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e9e9_Illustration_Build%2C-Test-and-Launch-a-Crypto-Fund.json" data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="6.75" data-duration="0">
              <Image src="svg/LandingPage/BenefitsFund.svg" width={300} height={300} alt="Animation" />
              </div>
                <div className="text-base mt-[1.5rem] mb-[0.8rem] font-semibold leading-[130%] text-center text-white">Build, Test and Launch a Crypto Fund</div>
                <div className="leading-[160%] text-center text-base color-[#b7b8be] font-inter">Creating a fund on B3X is simple and powerful. Use AI-driven tools to design, backtest, and launch your strategy, with full control over customization. Attract investors easily and manage your fund with real-time performance tracking.</div>
            </div>
            <div className="flex justify-center items-center flex-col bg-[#16171c] p-[2.4rem] rounded-xl border border-[#ffffff08]">
                <div className="leading-[0]">
                    <Image src={'svg/LandingPage/InvestorPlayground.svg'} width={25} height={25}/>
                </div>
                <div className="text-base mt-[1.5rem] mb-[0.8rem] font-semibold leading-[130%] text-center text-white">An Investors Playground</div>
                <div className="leading-[160%] text-center text-base color-[#b7b8be] font-inter">With B3X, you can access a diverse range of expertly managed funds while fully controlling your assets. AI tools guide you to the best options for your goals, supported by real-time performance tracking and transparent operations so that you can make smart, confident decisions every step of the way.</div>
            </div>
            <div className="bg-no-repeat bg-[url('https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e9fd_benefits-top-right-card-bg.svg')] bg-[top_right] bg-cover col-span-1 row-span-3 flex justify-center items-center flex-col bg-[#16171c] p-[2.4rem] rounded-xl border border-[#ffffff08]">
                <Image src="svg/LandingPage/BenefitsSafer.svg" width={300} height={300} alt="Animation" />
                <div className="text-base mt-[1.5rem] mb-[0.8rem] font-semibold leading-[130%] text-center text-white">Safer Than Your Bank</div>
                <div className="leading-[160%] text-center text-base color-[#b7b8be] font-inter">B3X keeps your assets secure by letting you hold them yourself. With no single point of failure, smart contracts handle everything automatically, ensuring full transparency and giving you complete control and peace of mind.</div>
            </div>
            <div className="px-[7rem] py-[8rem] col-start-2 col-end-3 row-start-2 row-end-3 flex flex-col rounded-2xl border-[#ffffff08] bg-[#16171c]">
                <Image src="https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e9eb_logo.svg" width={150} height={150} className="relative"/>
            </div>
            <div className="flex flex-col p-[2.4rem] col-span-2 row-span-1 bg-no-repeat bg-cover bg-[bottom_right] bg-[#16171c] bg-[url('https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e9fe_benefits-bottom-left-card-bg.svg')] rounded-xl border border-[#ffffff08]">
            <div className="leading-[0]">
                    <Image src={'svg/LandingPage/BenefitsAiTechnology.svg'} width={25} height={25}/>
                </div>
                <div className="text-base mt-[1.5rem] mb-[0.8rem] font-semibold leading-[130%] text-white">Intuitive AI Technology</div>
                <div className="leading-[160%] text-base color-[#b7b8be] font-inter">The Fund Oracle uses AI to select the best fund for users based on their criteria. At the same time, our SFSS (Strategy Factory, Strategy Selector) technology identifies the top strategies from thousands defined by fund managers.</div>
            </div>
        </div>
      </div>
    </div>
  );
}
