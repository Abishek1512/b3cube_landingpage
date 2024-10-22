'use client'
import Image from "next/image";
import InvestorPlayground from '../../../public/svg/LandingPage/InvestorPlayground.svg'

export default function Benefits() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center gap-[2.4rem]">
        <div className="flex flex-col items-center gap-[2.4rem] max-w-[580px]">
          <div className="bg-[#cdfe6c] font-sora text-black text-xs rounded-lg px-3 py-2 font-medium leading-tight inline-block w-fit">
            Benefits
          </div>
          <h1 className="font-sora text-4xl text-center tracking-tight mt-0 mb-0 font-normal leading-snug bg-gradient-to-r from-white to-[#A8ABD3] bg-clip-text text-transparent">
            Not Your Typical DeFi Platform
          </h1>
          <p className="color-[#cfced1] text-base text-center tracking-tight mb-0 font-normal leading-relaxed">
            From the founders of{" "}
            <a href="https://bcube-landing.webflow.io/" aria-current="page" className="underline">
              b-cube.ai
            </a>
            , a fully regulated VASP (Virtual Asset Service Provider), we are
            proud to present B3X – a one-stop solution for investors, traders,
            and beginners alike.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8">
            <div className="col-span-1 row-span-2 flex justify-center items-center flex-col bg-[#16171c] p-[2.4rem] rounded-xl border border-[#ffffff08]">
                <div className="text-base mt-[1.5rem] mb-[0.8rem] font-semibold leading-[130%] text-center">Build, Test and Launch a Crypto Fund</div>
                <div className="leading-[160%] text-center text-base color-[#b7b8be]">Creating a fund on B3X is simple and powerful. Use AI-driven tools to design, backtest, and launch your strategy, with full control over customization. Attract investors easily and manage your fund with real-time performance tracking.</div>
            </div>
            <div className="flex justify-center items-center flex-col bg-[#16171c] p-[2.4rem] rounded-xl border border-[#ffffff08]">
                <div className="leading-[0]">
                    <Image src={InvestorPlayground} width={25} height={25}/>
                </div>
                <div className="text-base mt-[1.5rem] mb-[0.8rem] font-semibold leading-[130%] text-center">An Investors Playground</div>
                <div className="leading-[160%] text-center text-base color-[#b7b8be]">With B3X, you can access a diverse range of expertly managed funds while fully controlling your assets. AI tools guide you to the best options for your goals, supported by real-time performance tracking and transparent operations so that you can make smart, confident decisions every step of the way.</div>
            </div>
            <div className="bg-no-repeat bg-[url('https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e9fd_benefits-top-right-card-bg.svg')] bg-[top_right] bg-auto col-span-1 row-span-3 flex justify-center items-center flex-col bg-[#16171c] p-[2.4rem] rounded-xl border border-[#ffffff08]">
                <div className="text-base mt-[1.5rem] mb-[0.8rem] font-semibold leading-[130%] text-center">Safer Than Your Bank</div>
                <div className="leading-[160%] text-center text-base color-[#b7b8be]">B3X keeps your assets secure by letting you hold them yourself. With no single point of failure, smart contracts handle everything automatically, ensuring full transparency and giving you complete control and peace of mind.</div>
            </div>
            <div className="p-24 col-start-2 col-end-3 row-start-2 row-end-3 flex flex-col rounded-2xl border-[#ffffff08] bg-[#16171c]">
                <Image src="https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e9eb_logo.svg" width={100} height={100} />
            </div>
        </div>
      </div>
    </div>
  );
}
