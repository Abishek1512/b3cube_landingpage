import Image from 'next/image';
import React from "react";
import FooterEmail from './FooterEmail';

type Props = {}

const Footer = (props: Props) => {

  const menuData = [
    {
      label: "Main",
      values: ["Features", "Benefits", "Reward program", "Roadmap"],
    },
    {
      label: "Products",
      values: ["Perp DEX", "Fund Builder", "Fund Marketplace"],
    },
    {
      label: "Main",
      values: [
        "Team",
        "Blog",
        "FAQs",
        "B3X Academy",
        "Help center",
        "Privacy Policy",
        "T&C",
      ],
    },
    {
      label: "Company",
      values: ["Missio & Vision", "Careers", "Brand"],
    },
    {
      label: "Governance",
      values: ["Dashboard", "Forums"],
    },
    {
      label: "Resources",
      values: ["Whitepaper", "Audit Reports", "Docs"],
    },
    {
      label: "Link",
      values: ["X (Formerly Twitter)", "Telegram", "Discord"],
    },
  ];


  return (
    <footer className="container px-4 mx-auto grid gap-20 mt-20">
      <div className="flex justify-between">
        <Image
          className="z-50"
          width={100}
          height={20}
          src="https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e9eb_logo.svg"
          alt=""
        />
        <div className="flex gap-3">
          <div className="flex items-center justify-center rounded-lg border border-[#ffffff0a] bg-[#ffffff12] w-[40px] h-[40px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
          </div>
          <div className="flex items-center justify-center rounded-lg border border-[#ffffff0a] bg-[#ffffff12] w-[40px] h-[40px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
            </svg>
          </div>
          <div className="flex items-center justify-center rounded-lg border border-[#ffffff0a] bg-[#ffffff12] w-[40px] h-[40px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-discord"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
              <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
              <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" />
              <path d="M7 16.5c3.5 1 6.5 1 10 0" />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-1/2 grid grid-cols-2">
        <div>
          <h6 className="pb-4 text-base font-semibold text-[#ffffff99]">
            Head Office
          </h6>
          <span className="text-white font-semibold">
            Vistra Corporate Services
          </span>
          <span className="text-white font-semibold flex flex-wrap">
            Centre, Wickhams Cay II, Road Town, Tortola, VG1110, British Virgin
            Islands
          </span>
        </div>
        <div>
          <h6 className="pb-4 text-sm font-semibold text-[#ffffff99]">
            Busines Partnerships
          </h6>
          <span className="text-white font-semibold underline">
            Partnership(at)b3x.ai
          </span>
        </div>
      </div>
      <div className="subscription grid gap-8">
        <h6>Subscribe to our newsletter</h6>
        <div>
          <FooterEmail />
        </div>
        <span className="pb-4 text-base font-semibold text-[#ffffff99]">
          By subscribing, I agree to the terms and conditions.
        </span>
      </div>
      <div className="menu-component">
        <div className="flex flex-wrap justify-between gap-20">
          {menuData?.map((menu) => {
            const { label, values } = menu ?? {};
            return (
              <div key={label} className="flex flex-col gap-4">
                <h1 className="text-[#fff9]">{menu.label}</h1>
                {values.map((val) => (
                  <p className="text-white font-semibold" key={val}>
                    {val}
                  </p>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center my-10 text-[#ffffff80]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-copyright"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M14 9.75a3.016 3.016 0 0 0 -4.163 .173a2.993 2.993 0 0 0 0 4.154a3.016 3.016 0 0 0 4.163 .173" />
        </svg>
        <h6>2023 B3X.AI, Inc. All Rights Reserved.</h6>
      </div>
    </footer>
  );
}

export default Footer