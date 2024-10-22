'use client'
import {useState} from "react";
import FaqCard from "../../app/component/FaqCard";
import styles from "./Landing.module.css";
import SectionHeader from "../SectionHeader";

function FaqList() {
  const [activeAccordions, setActiveAccordions] = useState([]);

  const accordionData = [
    {
      title: "Do I Need to Know How to Code to Build a Fund on B3X?",
      content:
        "No, you don’t need to know how to code. B3X’s AI-powered Fund Builder lets you easily create and manage crypto funds through a simple, user-friendly interface.",
    },
    {
      title: "Does B3X Share Its Order Books with Other Platforms?",
      content: `Yes, B3X currently uses Injective's shared order book for greater liquidity. This will change in Q2 of 2025; we’ll launch our custom DEX with up to 20x leverage, offering fast, low-cost trading with full control of your assets.`,
    },
    {
      title: "What is a DEX?",
      content:
        "A DEX, or Decentralized Exchange, is a platform that allows users to trade cryptocurrencies directly with each other without needing a central authority. It ensures greater security and transparency by leveraging blockchain technology.",
    },
    {
      title: "What is a Crypto Fund?",
      content: `A <strong>Crypto Fund</strong> is a managed portfolio of digital assets. Fund managers use various strategies to trade and grow the assets in the fund, allowing investors to participate without managing the trades themselves.`,
    },
    {
        title: 'What is our Fund Oracle?',
        content: `Our Fund Oracle is an AI-powered tool that automatically adjusts your investment allocations based on market conditions and your preferences. It helps minimize risk and maximize returns, making investing more efficient and adaptive.`,
    },
    {
        title: 'What is the Max Leverage on B3X?',
        content: 'The maximum leverage available on B3X is 20x. This allows traders to amplify their positions significantly, increasing potential profits, but it also comes with higher risk.'
    },
    {
        title: 'Who are the Founding Team of B3X?',
        content: `The B3X founding team includes the same experts behind B-Cube, a leading AI platform for advanced trading strategies. They bring extensive experience in AI, trading, and blockchain technology to the B3X platform.`
    },
    {
        title: 'What’s the Difference Between a DEX and a CEX?',
        content: `A DEX is decentralized, meaning users trade directly with each other, maintaining control of their assets. A CEX, or Centralized Exchange, acts as an intermediary, holding users' funds and managing trades on their behalf.`,
    },
    {
        title: 'How Secure is B3X?',
        content: `B3X prioritizes security through self-custody of assets, decentralized infrastructure, and smart contract automation. Users maintain full control over their assets, reducing the risks associated with centralized exchanges.`
    },
    {
        title: 'How Can I Earn with B3X?',
        content: `You can earn with B3X by trading with leverage, investing in AI-powered managed crypto funds, and utilizing the Fund Oracle for optimized, adaptive strategies. The platform also offers rewards programs, providing multiple ways to grow your assets securely and effectively.`
    },
    {
        title: 'Does B3X Support 3rd-party Logins?',
        content: `Yes, B3X makes it easier to access decentralized finance by allowing users to log in with familiar options like Google or Apple. This simplifies the process for everyone, whether you're new or experienced, while keeping your assets secure.`
    }
  ];

  const toggleAccordion = (index) => {
    if (activeAccordions.includes(index)) {
      // Remove from active if it was already open
      setActiveAccordions(activeAccordions.filter((i) => i !== index));
    } else {
      // Otherwise, open it
      setActiveAccordions([...activeAccordions, index]);
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <SectionHeader
        primaryButtonText="Our FAQ"
        title="Frequently asked questions"
        description="All your questions answered."
      />
      <div className="mt-10">
      {accordionData.map((item, index) => (
        <FaqCard
          key={index}
          title={item.title}
          content={item.content}
          index={index}
          isOpen={activeAccordions.includes(index)}
          toggleAccordion={toggleAccordion}
          styles={styles}
        />
      ))}
      </div>
    </div>
  );
}

export default FaqList;
