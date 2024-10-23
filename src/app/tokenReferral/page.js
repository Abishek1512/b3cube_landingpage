import { GlareCardDemo } from "../component/Glarecard";

const TokenReferral = () => {
  return (

    <div className="b3x-ttokens-referral container mx-auto px-8 py-12 my-16 flex flex-col md:flex-col lg:flex-row items-center justify-between bg-[#101115] md:gap-3 gap-7">
      <div className="text-center md:text-left self-start mb-4 md:mb-0 w-full ">
        <h4 className="text-2xl font-bold"> Get $10 worth of B3X Tokens!</h4>
        <p className="my-9">
          Earn $10 in B3X tokens by referring friends! B3X tokens offer
          governance rights, lower trading fees, and access to exclusive
          rewards, making them valuable for both traders and investors.
        </p>

        <div className="cursor-pointer hover:bg-[#e5e5e5] w-fit flex justify-start items-center gap-4 bg-white text-black text-sm text-center rounded-lg px-4 py-1 font-semibold transition-all duration-400 shadow-inner">
          <div>Join the Beta Test</div>
          <div className="leading-[0] flex justify-center items-center bg-black rounded-lg w-[44px] h-[44px]">
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
      <div className="md:ml-4 w-full">
        <GlareCardDemo />
      </div>
    </div>
  );
};


export default TokenReferral