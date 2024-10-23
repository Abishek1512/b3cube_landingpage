"use client";
import { useState } from "react";

type MobileMenuProps = {
  className?: string;
};

export const MobileMenu = ({ className = "" }: MobileMenuProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <div className="relative w-[50px] h-[50px] cursor-pointer scale-150 z-50 block xl:hidden">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          className="block w-full h-full absolute cursor-pointer opacity-0 z-20"
          aria-label="Toggle menu"
        />

        <div className="absolute inset-0 m-auto w-[18px] h-[8px]">
          <span
            className={`absolute block w-full h-[1.5px] bg-white rounded-sm transition-all duration-200 ease-in-out
                ${isChecked ? "rotate-45 top-[3px]" : "top-0"}
                ${!isChecked ? "hover:w-[20px] lg:group-hover:w-[20px]" : ""}`}
          />
          <span
            className={`absolute block h-[1.5px] bg-white rounded-sm transition-all duration-200 ease-in-out bottom-0
                ${
                  isChecked
                    ? "-rotate-45 bottom-[3px] w-full"
                    : "w-full hover:w-[10px] lg:group-hover:w-[10px]"
                }`}
          />
        </div>
      </div>

      {isChecked && (
        <div
          className={`fixed pt-24 top-0 left-0 w-full transform transition-transform duration-300 ease-in-out ${
            isChecked ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-[#1a1b21] to-[#141418]" />
          <div className="px-4 relative container mx-auto flex flex-col">
            <a
              href="#features"
              className="text-white hover:text-white text-sm font-bold pt-[21px] pb-[25px] border-t border-[#ffffff0a]"
            >
              Features
            </a>
            <a
              href="#benefits"
              className="text-white hover:text-white text-sm font-bold pt-[21px] pb-[25px] border-t border-[#ffffff0a]"
            >
              Benefits
            </a>
            <a
              href="#reward"
              className="text-white hover:text-white text-sm font-bold pt-[21px] pb-[25px] border-t border-[#ffffff0a]"
            >
              Reward Program
            </a>
            <a
              href="#roadmap"
              className="text-white hover:text-white text-sm font-bold pt-[21px] pb-[25px] border-t border-[#ffffff0a]"
            >
              Roadmap
            </a>
            <a
              href="#faq"
              className="text-white hover:text-white text-sm font-bold pt-[21px] pb-[25px] border-t border-[#ffffff0a]"
            >
              FAQ
            </a>
          </div>
        </div>
      )}
    </>
  );
};
