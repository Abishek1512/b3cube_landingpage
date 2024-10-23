import B3xLogo from "../../../../public/images/b3xlogo.svg";
import { MobileMenu } from "./MobileMenu";
import { ScrollHeader } from "./ScrollHeader";


function Navbar() {
  return (
    <ScrollHeader>
      <div className="container mx-auto">
        <div className="flex justify-between py-6">
          <div className="flex gap-20">
            <B3xLogo className="z-50 items-center h-full" />
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
                className="px-6 py-2 text-sm flrx justify-center items-center bg-[#141418] font-semibold text-white border border-[#222225] rounded-lg hover:bg-gray-800 transition-colors shadow-inset-bottom"
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
            <MobileMenu />
          </div>
        </div>
      </div>
    </ScrollHeader>
  );
}

export default Navbar;
