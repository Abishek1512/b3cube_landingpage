'use client'
import Image from 'next/image';
import React, { useState } from "react";

type Props = {}

const Footer = (props: Props) => {

    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle subscription logic here
      console.log("Submitted email:", email);
    };

  return (
    <footer className="container px-4 mx-auto grid gap-20">
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
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 p-2 bg-[#1a1a1a] rounded-xl max-w-md w-full border border-gray-800"
          >
            <div className="flex items-center flex-1 gap-2">
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="w-full bg-transparent text-gray-300 placeholder-gray-400 focus:outline-none text-sm"
                required
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-[#c2f84d] text-black font-semibold rounded-lg text-sm hover:bg-[#b3e747] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
        <span className="pb-4 text-base font-semibold text-[#ffffff99]">
          By subscribing, I agree to the terms and conditions.
        </span>
      </div>
    </footer>
  );
}

export default Footer