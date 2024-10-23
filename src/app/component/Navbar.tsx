"use client"

import { useState, useEffect } from 'react'
import B3xLogo from '../../../public/images/b3xlogo.svg'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
   const [isChecked, setIsChecked] = useState(false);
   const [loaded, setLoaded] = useState(false);

   useEffect(() => {
     setLoaded(true);
   }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`left-0 right-0 bg-transparent fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/70 backdrop-blur-md" : "bg-transparent"
      } ${loaded ? "opacity-100" : "opacity-0"}`}
    >
      <div className=" container mx-auto">
        <div className="flex justify-between py-6">
          <div className="flex gap-20">
            <B3xLogo className="z-50 items-center h-full"/>
            <div className="flex gap-x-20">
              <div className="flex items-center z-50">
                <nav className="hidden xl:flex text-white gap-x-5 font-inter">
                  <a
                    href="#features"
                    className="text-white hover:text-white text-sm"
                  >
                    Features
                  </a>
                  <a
                    href="#benefits"
                    className="text-white hover:text-white text-sm"
                  >
                    Benefits
                  </a>
                  <a
                    href="#reward"
                    className="text-white hover:text-white text-sm"
                  >
                    Reward program
                  </a>
                  <a
                    href="#roadmap"
                    className="text-white hover:text-white text-sm"
                  >
                    Roadmap
                  </a>
                  <a
                    href="#faq"
                    className="text-white hover:text-white text-sm"
                  >
                    FAQ
                  </a>
                </nav>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-9">
            <div className="hidden lg:flex items-center gap-x-3">
              <a
                href="#"
                className="text-sm text-white px-6 font-sora font-semibold"
              >
                Coin Sale
              </a>

              <a
                href="/whitepaper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 text-sm flrx justify-center items-center bg-[#141418] font-semibold text-white border border-[#222225] rounded-lg hover:bg-gray-800 transition-colors shadow-inset-bottom "
              >
                White paper
              </a>

              <a
                href="#"
                className="text-sm pr-1 pl-4 py-1 font-semibold text-[#040405] inset-bottom-dark bg-white rounded-lg hover:opacity-90 transition-opacity flex items-center gap-x-2"
              >
                Join the Beta Test
                <div className="w-[44px] h-[44px] bg-[#040405] text-white flex justify-center items-center rounded-lg">
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4688 6.50309L5.99883 2.03309L7.17717 0.854759L13.6588 7.33643L7.17717 13.8181L5.99883 12.6398L10.4688 8.16976H0.3255V6.50309H10.4688Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </a>
            </div>
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
                      ${
                        !isChecked
                          ? "hover:w-[20px] lg:group-hover:w-[20px]"
                          : ""
                      }`}
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
          </div>
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
              href="#features"
              className="text-white hover:text-white text-sm font-bold pt-[21px] pb-[25px] border-t border-[#ffffff0a]"
            >
              Benefits
            </a>
            <a
              href="#features"
              className="text-white hover:text-white text-sm font-bold pt-[21px] pb-[25px] border-t border-[#ffffff0a]"
            >
              Reward Program
            </a>
            <a
              href="#features"
              className="text-white hover:text-white text-sm font-bold pt-[21px] pb-[25px] border-t border-[#ffffff0a]"
            >
              Roundmap
            </a>
            <a
              href="#features"
              className="text-white hover:text-white text-sm font-bold pt-[21px] pb-[25px] border-t border-[#ffffff0a]"
            >
              FAQ
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
