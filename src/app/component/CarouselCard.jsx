"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "../../components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    (<div className="w-full h-full py-20">
      <h2
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        {/* Get to know your iSad. */}
      </h2>
      <Carousel items={cards} />
    </div>)
  );
}

const DummyContent = () => {
  return (<>
    {[...new Array(3).fill(1)].map((_, index) => {
      return (
        (<div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <p
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              The first rule of Apple club is that you boast about Apple club.
            </span>{" "}
            Keep a journal, quickly jot down a grocery list, and take amazing
            class notes. Want to convert those notes to text? No problem.
            Langotiya jeetu ka mara hua yaar is ready to capture every
            thought.
          </p>
          <Image
            src="https://assets.aceternity.com/macbook.png"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
        </div>)
      );
    })}
  </>);
};

const data = [
  {
    name: "Guruprasad Venkatesha",
    title: "C0-Founder/CEO.",
src: 'https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e937/66d9977e72e7dfd970c9e951_Guruprasad-p-500.png',
    content: <DummyContent />,
    orgLogo : ['https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e937/66d9977e72e7dfd970c9e981_b-cube_logo.png',
      'https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e937/66d9977e72e7dfd970c9e947_coin-share.svg']
  },
  {
    name: "Erwan Rouzel",
    title: "Co-Founder/CEO.",    
    src: "https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e937/66d9977e72e7dfd970c9e952_Erwan-p-500.png",
    content: <DummyContent />,
    orgLogo : ['https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e937/66d9977e72e7dfd970c9e981_b-cube_logo.png',
       'https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e937/66d9977e72e7dfd970c9e947_coin-share.svg']
  },
  {
    name: "Jean-Baptiste Dreveton",
    title: "Co-Founder/CEO.",   
     src: "https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e937/66d9977e72e7dfd970c9e953_Jean-Baptiste-p-500.png",
    content: <DummyContent />,
    orgLogo : ['https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e937/66d9977e72e7dfd970c9e981_b-cube_logo.png','https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e937/66d9977e72e7dfd970c9e947_coin-share.svg']
  },

  {
    name: "Antony Raj",
    title: "Co-Founder/CEO.",
    src: "https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e937/66e9639603c2878a6a75b226_Antony%20About-p-500.png",
    content: <DummyContent />,
    orgLogo : ['https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e937/66d9977e72e7dfd970c9e981_b-cube_logo.png','https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e937/6710bbb4e34c5f8a26576420_thoughtworks.svg']
  },
  {
    name: "Balamurugan Ganesan",
    title: "Co-Founder/CEO.",
    src: "https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e937/670011d50c89099700442d2b_bala8-p-500.png",
    content: <DummyContent />,
    orgLogo : ['https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e937/66d9977e72e7dfd970c9e981_b-cube_logo.png','https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e937/67032572eac833823039938c_Falconx.svg'
      , 'https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e937/6710bbfbfc43b33e4c27e8f6_Bank%20Of%20America.svg', 'https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e937/6710bba5fc54860abd8cfb24_BNP%20Paribas.svg'
    ]
  },

  {
    name: "Aditya Soni",
    title: "Co-Founder/CEO.",
    src: "https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e937/66fec71962c7b6918645a5fa_Aditya2-p-500.png",
    content: <DummyContent />,
    orgLogo : ['https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e937/66d9977e72e7dfd970c9e981_b-cube_logo.png','https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e937/67032599503a59020fd99c81_fxdx_new.svg']
  },

  {
    name: "Bragadeesh Jegannathan",
    title: "Co-Founder/CEO.",
    src: 'https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e937/6710bb3e93bbfbd5e9b8331e_Braga%400.5x-p-500.png',
    orgLogo : ['https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e937/66d9977e72e7dfd970c9e981_b-cube_logo.png','https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e937/6710bb9603d512eeaa67c81a_Verizon.svg']
  },
  {
    name: "Mathilde Bobkiewicz",
    title: "Co-Founder/CEO.",
    src: 'https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e937/66d9977e72e7dfd970c9e955_Mathilde.png',
    orgLogo : ['https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e937/66d9977e72e7dfd970c9e981_b-cube_logo.png','https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e937/66d9977e72e7dfd970c9e981_b-cube_logo.png','https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e937/66d9977e72e7dfd970c9e94f_natixis.svg']

  }
];
