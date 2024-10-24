
const TeamCard = () =>{
  return <section className="w-full overflow-hidden flex flex-col items-start justify-start py-0 px-[104px] box-border max-w-[1440px] mx-auto text-center mq450:px-5 mq850:px-[52px]">
  <div className="self-stretch flex flex-col items-center justify-start max-w-full">
    <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 box-border max-w-full">
      <div className="flex flex-col items-center justify-start gap-[1rem] max-w-[840px] mq850:max-w-full">
        <div className="rounded-lg bg-[#CDFE6C] flex flex-col items-start justify-start pt-[7.3px] px-2 pb-2 text-left text-black">
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[0.7px]">
            <a className="[text-decoration:none] font-bold text-xs">
              Our Team
            </a>
          </div>
        </div>
        <h1 className="m-0 w-[302px] relative text-21xl tracking-[-0.3px] leading-[56px] font-bold text-3xl !bg-clip-text [background:linear-gradient(100.51deg,_#fff_9.98%,_#a8abd3_87.41%)] [-webkit-background-clip:text] flex items-center justify-center mq450:text-5xl mq450:leading-[34px] mq850:text-13xl mq850:leading-[45px]">
          Meet Our Team
        </h1>
        <div className="self-stretch flex flex-col items-center justify-start pt-0 px-[5px] pb-[0.8px] text-base text-color-grey-81 font-bcube-landingwebflowio-inter-regular-14">
          <div className="relative tracking-[-0.2px] leading-[25.6px]">
            <p className="m-0">
              Our team, known for its success with b-cube.ai, the
              industry-leading AI trading platform, brings expertise in
              AI,
            </p>
            <p className="m-0">
              hedge funds, software engineering, and compliance. They've
              worked at companies like Morgan Stanley,
            </p>
            <p className="m-0">
              CoinShares, Nokia, and Credit Agricole. Now, they are
              pouring their talents into merging advanced AI, trading, and
            </p>
            <p className="m-0">investing into one single platform.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

}

export default TeamCard
