"use client";
import Image from "next/image";
import {useState} from "react";
import styles from "./Landing.module.css";
import FaqCard from "../../app/component/FaqCard";
import SectionHeader from "../SectionHeader";
import withFadeInUpAnimation from "../../app/HOC/withFadeInUpAnimation";

const SecondarySection = () => {
  const [activeSection, setActiveSection] = useState("FundBuilder");
  const [fade, setFade] = useState(true);
  const handleSectionClick = (e, section) => {
    e.preventDefault();
    setFade(false);
    setTimeout(() => {
      setFade(true);
      setActiveSection(section);
    }, [350]);
  };
  return(
    <>
          <div className="flex mb-16 ml-auto mr-auto flex-col">
            <div className="border border-white/10 rounded-xl justify-center items-center mb-12 ml-auto mr-auto p-1 inline-flex">
              <a
                className={`hover:bg-gradient-to-r hover:from-[#ffffff0d] hover:to-[#a8abd308] bg-[#ddd0] rounded-lg p-[0.9rem] font-medium transition-all duration-300 cursor-pointer ${
                  activeSection === "FundBuilder" ? styles.activeTab : null
                }`}
                onClick={e => handleSectionClick(e, "FundBuilder")}
              >
                Fund Builder
              </a>
              <a
                className={`hover:bg-gradient-to-r hover:from-[#ffffff0d] hover:to-[#a8abd308] bg-[#ddd0] rounded-lg p-[0.9rem] font-medium transition-all duration-300 cursor-pointer ${
                  activeSection == "FundMarketPlace" ? styles.activeTab : null
                }`}
                onClick={e => handleSectionClick(e, "FundMarketPlace")}
              >
                Fund MarketPlace
              </a>
              <a
                className={`hover:bg-gradient-to-r hover:from-[#ffffff0d] hover:to-[#a8abd308] bg-[#ddd0] rounded-lg p-[0.9rem] font-medium transition-all duration-300 cursor-pointer ${
                  activeSection == "FundOracle" ? styles.activeTab : null
                }`}
                onClick={e => handleSectionClick(e, "FundOracle")}
              >
                Fund Oracle
              </a>
              <a
                className={`hover:bg-gradient-to-r hover:from-[#ffffff0d] hover:to-[#a8abd308] bg-[#ddd0] rounded-lg p-[0.9rem] font-medium transition-all duration-300 cursor-pointer ${
                  activeSection == "DEX" ? styles.activeTab : null
                }`}
                onClick={e => handleSectionClick(e, "DEX")}
              >
                DEX for Derivatives
              </a>
            </div>
            <div
              className={`flex ${styles.sectionContent} ${
                fade ? styles.active : ""
              }`}
            >
              {activeSection === "FundBuilder" ? <FundBuilder /> : null}
              {activeSection === "FundMarketPlace" ? <FundMarketPlace /> : null}
              {activeSection === "FundOracle" ? <FundOracle /> : null}
              {activeSection === "DEX" ? <Dex /> : null}
            </div>
          </div>
    </>
  )
}

const AnimatedSecondarySection = withFadeInUpAnimation(SecondarySection);

export default function Features() {

  const [activeAccordions, setActiveAccordions] = useState([]);

  const toggleAccordion = (index) => {
    if (activeAccordions.includes(index)) {
      setActiveAccordions(activeAccordions.filter((i) => i !== index));
    } else {
      setActiveAccordions([...activeAccordions, index]);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center gap-[2.4rem]">
        <div className="flex flex-col items-center gap-[2.4rem] max-w-[644px]">
         <SectionHeader
         primaryButtonText="Features"
         title="Everyone's Favorite App"
         description="For the investor seeking ease of use, the Fund Manager seeking new horizons, and the trader craving advanced tools."
         />
        </div>
        <div className="hidden md:block container">
        <AnimatedSecondarySection delay={500}/>
        </div>
        <div className="block md:hidden container">
        {accordionData.map((item, index) => (
        <FaqCard
          key={index}
          title={item.title}
          content={item.content}
          index={index}
          isOpen={activeAccordions.includes(index)}
          toggleAccordion={toggleAccordion}
          styles={styles}
          renderHtmlContent={true}
        />
      ))}
        </div>
      </div>
    </>
  );
}

const FundBuilder = () => {
  return(
    <>
      <div className="pl-6 pr-6 pb-6 md:p-0 grid md:gap-[6.5rem] md:grid-cols-[383px_1fr] auto-cols-fr xl:gap-[5rem] xl:grid-cols-[38%_1fr]">
        <div className="flex flex-col items-start justify-center">
          <div className="text-white/60 text-lg tracking-tight mb-8 leading-relaxed">
            <div className="text-white">
              Build & Grow Your Investment Fund:{" "}
            </div>
            <span className="font-inter">Design, test, and launch advanced trading strategies using our
            intuitive crypto fund builder. Leverage AI integration and automated
            trading for superior performance.</span>
          </div>
          <div className="grid gap-6 grid-cols-2 grid-rows-[auto_auto] auto-cols-fr mb-16 self-center md:self-start">
            <div className="flex justify-start items-center gap-[0.8rem] text-body-s font-medium leading-[140%]">
              <div className="leading-[0]">
                <Image
                  src={'/svg/LandingPage/BackTestingTool.svg'}
                  width={20}
                  height={20}
                  alt="BackTesting"
                />
              </div>
              <div>Backtesting Tools</div>
            </div>
            <div className="flex justify-start items-center gap-[0.8rem] text-body-s font-medium leading-[140%]">
              <div className="leading-[0]">
                <Image
                  src={'/svg/LandingPage/BackTestingTool.svg'}
                  width={20}
                  height={20}
                  alt="BackTesting"
                />
              </div>
              <div>Performance Metrics</div>
            </div>
            <div className="flex justify-start items-center gap-[0.8rem] text-body-s font-medium leading-[140%]">
              <div className="leading-[0]">
                <Image
                  src={'/svg/LandingPage/BackTestingTool.svg'}
                  width={20}
                  height={20}
                  alt="BackTesting"
                />
              </div>
              <div>AI Integration</div>
            </div>
            <div className="flex justify-start items-center gap-[0.8rem] text-body-s font-medium leading-[140%]">
              <div className="leading-[0]">
                <Image
                  src={'/svg/LandingPage/BackTestingTool.svg'}
                  width={20}
                  height={20}
                  alt="BackTesting"
                />
              </div>
              <div>Automated Trading</div>
            </div>
          </div>
          <div className="hidden cursor-pointer hover:bg-[#e5e5e5] md:flex justify-start items-center gap-4 bg-white text-[#333333] text-sm text-center rounded-lg px-4 py-1 font-semibold transition-all duration-400 shadow-inner">
            <div>Join the Beta Test</div>
            <div className="leading-[0] flex justify-center items-center bg-[#333333] rounded-lg w-[44px] h-[44px]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4688 6.50309L5.99883 2.03309L7.17717 0.854759L13.6588 7.33643L7.17717 13.8181L5.99883 12.6398L10.4688 8.16976H0.3255V6.50309H10.4688Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <Image
            src="https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e964/66e83e27f1bec74496ef4ba3_Fund%20Builder.PNG"
            width={700}
            height={200}
            alt=""
          />
        </div>
      </div>
    </>     
  );
};

const FundMarketPlace = () => {
  return (
    <>
      <div className="pl-6 pr-6 pb-6 md:p-0 grid md:gap-[6.5rem] md:grid-cols-[383px_1fr] auto-cols-fr xl:gap-[5rem] xl:grid-cols-[38%_1fr]">
        <div className="flex flex-col items-start justify-center">
          <div className="text-white/60 text-lg tracking-tight mb-8 leading-relaxed">
            <div className="text-white">
              Join Carefully Crafted Investment Funds:{" "}
            </div>
            <span className="font-inter">Utilize B3X’s Fund Oracle for real-time, adaptive investment
            management. Mitigate risks with AI-driven insights and customize
            your portfolio with precision.</span>
          </div>
          <div className="grid gap-6 grid-cols-2 grid-rows-[auto_auto] auto-cols-fr mb-16 self-center md:self-start">
            <div className="flex justify-start items-center gap-[0.8rem] text-body-s font-medium leading-[140%]">
              <div className="leading-[0]">
                <Image
                  src={'/svg/LandingPage/BackTestingTool.svg'}
                  width={20}
                  height={20}
                  alt="BackTesting"
                />
              </div>
              <div>Self Custody</div>
            </div>
            <div className="flex justify-start items-center gap-[0.8rem] text-body-s font-medium leading-[140%]">
              <div className="leading-[0]">
                <Image
                  src={'/svg/LandingPage/BackTestingTool.svg'}
                  width={20}
                  height={20}
                  alt="BackTesting"
                />
              </div>
              <div>Advanced Analytics</div>
            </div>
            <div className="flex justify-start items-center gap-[0.8rem] text-body-s font-medium leading-[140%]">
              <div className="leading-[0]">
                <Image
                  src={'/svg/LandingPage/BackTestingTool.svg'}
                  width={20}
                  height={20}
                  alt="BackTesting"
                />
              </div>
              <div>Widely Accessible</div>
            </div>
            <div className="flex justify-start items-center gap-[0.8rem] text-body-s font-medium leading-[140%]">
              <div className="leading-[0]">
                <Image
                  src={'/svg/LandingPage/BackTestingTool.svg'}
                  width={20}
                  height={20}
                  alt="BackTesting"
                />
              </div>
              <div>Trusted Management</div>
            </div>
          </div>
          <div className="hidden cursor-pointer hover:bg-[#e5e5e5] md:flex justify-start items-center gap-4 bg-white text-[#333333] text-sm text-center rounded-lg px-4 py-1 font-semibold transition-all duration-400 shadow-inner">
            <div>Join the Beta Test</div>
            <div className="leading-[0] flex justify-center items-center bg-[#333333] rounded-lg w-[44px] h-[44px]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4688 6.50309L5.99883 2.03309L7.17717 0.854759L13.6588 7.33643L7.17717 13.8181L5.99883 12.6398L10.4688 8.16976H0.3255V6.50309H10.4688Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <Image
            src="https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e964/66e83e28a079bb7c5b4e4c12_Fund%20Landing%20page%202.PNG"
            width={700}
            height={200}
          />
        </div>
      </div>
    </>
  );
};

const FundOracle = () => {
  return (
    <>
      <div className="pl-6 pr-6 pb-6 md:p-0 grid md:gap-[6.5rem] md:grid-cols-[383px_1fr] auto-cols-fr xl:gap-[5rem] xl:grid-cols-[38%_1fr]">
        <div className="flex flex-col items-start justify-center">
          <div className="text-white/60 text-lg tracking-tight mb-8 leading-relaxed">
            <div className="text-white">
              Optimize Your Portfolio with Intelligent Fund Management:{" "}
            </div>
            <span className="font-inter">You’ll never get lost in our Fund Marketplace. Simply define your
            criteria and let the AI select the best expert-managed funds for
            you. Benefit from self-custody, precise performance metrics, and
            straightforward entry into diverse AI-driven strategies.</span>
          </div>
          <div className="grid gap-6 grid-cols-2 grid-rows-[auto_auto] auto-cols-fr mb-16 self-center md:self-start">
            <div className="flex justify-start items-center gap-[0.8rem] text-body-s font-medium leading-[140%]">
              <div className="leading-[0]">
                <Image
                  src={'/svg/LandingPage/BackTestingTool.svg'}
                  width={20}
                  height={20}
                  alt="BackTesting"
                />
              </div>
              <div>Fully Adaptive</div>
            </div>
            <div className="flex justify-start items-center gap-[0.8rem] text-body-s font-medium leading-[140%]">
              <div className="leading-[0]">
                <Image
                  src={'/svg/LandingPage/BackTestingTool.svg'}
                  width={20}
                  height={20}
                  alt="BackTesting"
                />
              </div>
              <div>Risk Mitigation</div>
            </div>
            <div className="flex justify-start items-center gap-[0.8rem] text-body-s font-medium leading-[140%]">
              <div className="leading-[0]">
                <Image
                  src={'/svg/LandingPage/BackTestingTool.svg'}
                  width={20}
                  height={20}
                  alt="BackTesting"
                />
              </div>
              <div>Uses Live Data</div>
            </div>
            <div className="flex justify-start items-center gap-[0.8rem] text-body-s font-medium leading-[140%]">
              <div className="leading-[0]">
                <Image
                  src={'/svg/LandingPage/BackTestingTool.svg'}
                  width={20}
                  height={20}
                  alt="BackTesting"
                />
              </div>
              <div>User Controlled</div>
            </div>
          </div>
          <div className="hidden hover:bg-[#e5e5e5] cursor-pointer md:flex justify-start items-center gap-4 bg-white text-[#333333] text-sm text-center rounded-lg px-4 py-1 font-semibold transition-all duration-400 shadow-inner">
            <div>Join the Beta Test</div>
            <div className="leading-[0] flex justify-center items-center bg-[#333333] rounded-lg w-[44px] h-[44px]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4688 6.50309L5.99883 2.03309L7.17717 0.854759L13.6588 7.33643L7.17717 13.8181L5.99883 12.6398L10.4688 8.16976H0.3255V6.50309H10.4688Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <Image
            src="https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e964/66e83e273adb0752a05d8c4d_Fund%20Oracle.PNG"
            width={700}
            height={200}
          />
        </div>
      </div>
    </>
  );
};

const Dex = () => {
  return (
    <>
      <div className="pl-6 pr-6 pb-6 md:p-0 grid md:gap-[6.5rem] md:grid-cols-[383px_1fr] auto-cols-fr xl:gap-[5rem] xl:grid-cols-[38%_1fr]">
        <div className="flex flex-col items-start justify-center">
          <div className="text-white/60 text-lg tracking-tight mb-8 leading-relaxed">
            <div className="text-white">
              Decentralised Exchange For Derivatives and Options:{" "}
            </div>
            <span className="font-inter">We've built a perpetual futures & options DEX using Injective's
            shared order book SDK with up to 20x leverage. In Q2 2025, we’ll
            launch our custom multi-chain DEX on Injective, Base, Monad, and
            Arbitrum, enabling perpetual futures and options trading.</span>
          </div>
          <div className="grid gap-6 grid-cols-2 grid-rows-[auto_auto] auto-cols-fr mb-16 self-center md:self-start">
            <div className="flex justify-start items-center gap-[0.8rem] text-body-s font-medium leading-[140%]">
              <div className="leading-[0]">
                <Image
                  src={'/svg/LandingPage/BackTestingTool.svg'}
                  width={20}
                  height={20}
                  alt="BackTesting"
                />
              </div>
              <div>Low Fees</div>
            </div>
            <div className="flex justify-start items-center gap-[0.8rem] text-body-s font-medium leading-[140%]">
              <div className="leading-[0]">
                <Image
                  src={'/svg/LandingPage/BackTestingTool.svg'}
                  width={20}
                  height={20}
                  alt="BackTesting"
                />
              </div>
              <div>High Liquidity</div>
            </div>
            <div className="flex justify-start items-center gap-[0.8rem] text-body-s font-medium leading-[140%]">
              <div className="leading-[0]">
                <Image
                  src={'/svg/LandingPage/BackTestingTool.svg'}
                  width={20}
                  height={20}
                  alt="BackTesting"
                />
              </div>
              <div>Lightning Fast</div>
            </div>
            <div className="flex justify-start items-center gap-[0.8rem] text-body-s font-medium leading-[140%]">
              <div className="leading-[0]">
                <Image
                  src={'/svg/LandingPage/BackTestingTool.svg'}
                  width={20}
                  height={20}
                  alt="BackTesting"
                />
              </div>
              <div>Powerful Security</div>
            </div>
          </div>
          <div className="hidden hover:bg-[#e5e5e5] cursor-pointer md:flex justify-start items-center gap-4 bg-white text-[#333333] text-sm text-center rounded-lg px-4 py-1 font-semibold transition-all duration-400 shadow-inner">
            <div>Join the Beta Test</div>
            <div className="leading-[0] flex justify-center items-center bg-[#333333] rounded-lg w-[44px] h-[44px]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4688 6.50309L5.99883 2.03309L7.17717 0.854759L13.6588 7.33643L7.17717 13.8181L5.99883 12.6398L10.4688 8.16976H0.3255V6.50309H10.4688Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <Image
            src="https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e964/66e83e2c2e58e2df3640ecc7_Price%20chart.svg"
            width={700}
            height={200}
          />
        </div>
      </div>
    </>
  );
};


const accordionData = [
  {
    title: 'Fund Builder',
    content: <FundBuilder />
  },
  {
    title: 'Fund Marketplace',
    content: <FundMarketPlace />
  },
  {
    title: 'Fund Oracle',
    content: <FundOracle />
  },
  {
    title: 'DEX for Derivatives',
    content: <Dex />
  }
] 