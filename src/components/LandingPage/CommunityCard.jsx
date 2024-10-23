export default function CommunityCard() {
  return (
    <div className="container mx-auto">
      <div className="rounded-[20px] p-20 bg-[100%_0%] bg-cover bg-[url('https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9ea4f_cta2_bg-1024.svg')]">
        <div className="lg:max-w-[675px] max-w-[480px]">
          <div className="text-[40px] leading-[140%] tracking-[-0.3px] lg:max-w-[460px] max-w-[350px] text-left mb-5 bg-gradient-to-r from-white to-[#A8ABD3] bg-clip-text text-transparent">
            Join the community and start trading
          </div>
          <p className="text-left tracking-[-0.2px] leading-[160%] mb-7 text-base text-[#cfced1]">
            The B3X platform’s development and expansion will be guided by a
            comprehensive roadmap, divided into quarterly milestones.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:w-[480px] w-[225px] gap-8 text-center">
          <a className="w-full p-[.4rem_.4rem_.4rem_1.6rem] cursor-pointer font-medium bg-[#cdfe6c] text-sm text-[#040405] text-center flex items-center justify-start rounded-xl gap-6 shadow-button-inset">
            Join Beta Testing{" "}
            <div className="w-[44px] h-[44px] flex items-center justify-center rounded-[8px] bg-[white]">
              <svg
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7801 5.66786L6.31005 1.19786L7.48839 0.0195312L13.9701 6.5012L7.48839 12.9829L6.31005 11.8045L10.7801 7.33453H0.636719V5.66786H10.7801Z"
                  fill="#040405"
                ></path>
              </svg>
            </div>
          </a>
          <a className="cursor-pointer w-full text-white bg-white/10 border border-white/10 rounded-[12px] p-4 font-medium no-underline relative overflow-hidden shadow-[inset_0_-2px_#ffffff3d]">
          Join the community
          </a>
        </div>
      </div>
    </div>
  );
}
