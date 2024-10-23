import React from 'react'
import SectionHeader from '../SectionHeader'
import Check from '../../../public/icons/check_icon.svg'
import TokenImage from '../../../public/images/token_image.webp'
import Image from 'next/image'
import Commmunity from "../../../public/images/Like-minded Community.webp"
import Voting from "../../../public/images/voting.webp";
import Liquidity from "../../../public/images/liquidity.webp";
import Lowfees from "../../../public/images/lowfees.webp";
import StackingBenefit from "../../../public/images/stacking-benefits.webp";

type Props = {}

function Page({}: Props) {
  return (
    <div className="container mx-auto gap-10">
      <SectionHeader
        primaryButtonText="B3X Token"
        arrowButtonText="Buy B3X Token"
        title="Introducing the B3X Token"
        description="Meet the B3X token, the powerhouse of B3X. It drives transactions, unlocks rewards, and gives users a voice in governance. It is designed to spearhead opportunities and growth in our expanding ecosystem."
        isArrowButtonVisible
      />
      <div className="min-h-screen text-white p-4 md:p-8">
        <div className="mx-auto relative">
          {/* Grid Layout */}
          <div className="flex flex-col md:flex-row max-lg:flex-wrap lg:flex-row lg:space-x-4">
            {/* Governance Card */}
            <div className="order-1 xl:order-2 lg:order-2 md:w-full lg:w-1/3 relative grid grid-rows-3 w-full">
              {/* Center Token Display - Full width on mobile, centered on larger screens */}
              <div className="row-span-6 flex justify-center items-center py-12 lg:py-0 order-first lg:order-none col-span-1 lg:col-span-1 ">
                <div className="relative max-w-[250px] max-h-[250px]">
                  <Image src={TokenImage} alt="" />
                </div>
              </div>
              <div></div>
              <div className="row-span-6 text-center p-6 rounded-lg bg-opacity-10  ">
                <div className="flex justify-center mb-4">
                  <Check className="text-white" />
                </div>
                <h2 className="text-base font-bold mb-4">Liquidity Mining</h2>
                <p className="text-gray-400 text-sm max-w-[380px] mx-auto color-[#fff9]">
                  <span className="text-gray-500">(coming soon)</span>
                  <br />
                  B3X tokens are used to incentivize liquidity providers. Users
                  who supply liquidity to the platform's pools can earn B3X
                  tokens as rewards.
                </p>
              </div>
              <div className="max-lg:hidden token-vertical-line line-is-left w-[1px]"></div>
              <div className="max-lg:hidden token-vertical-line line-is-right w-[1px]"></div>
              <div className="hidden max-lg:block token-horizontal-line h-[1px]"></div>
            </div>

            {/* Transaction Fees Card */}
            <div className="order-2 xl:order-1 lg:order-1 lg:w-1/3 grid grid-rows-3 w-full">
              <div className="row-span-6 text-center p-6 rounded-lg bg-opacity-10 ">
                <div className="flex justify-center mb-4">
                  <Check className="text-white" />
                </div>
                <h2 className="text-base font-bold mb-4">Governance</h2>
                <p className="text-gray-400 text-sm max-w-[380px] mx-auto color-[#fff9]">
                  B3X token holders participate in the governance of the B3X
                  platform. They can vote on proposals that affect the
                  platform's development and operation, such as protocol
                  upgrades and parameter changes.
                </p>
              </div>
              <div className="max-lg:hidden token-horizontal-line h-[1px]"></div>

              {/* Staking Card */}
              <div className="row-span-6 text-center p-6 rounded-lg bg-opacity-10 ">
                <div className="flex justify-center mb-4">
                  <Check className="text-white" />
                </div>
                <h2 className="text-base font-bold mb-4">Staking</h2>
                <p className="text-gray-400 text-sm max-w-[380px] mx-auto color-[#fff9]">
                  Users can stake B3X tokens to earn attractive rewards. In
                  return, they earn 15% of the DEX's trading fees, proposal fees
                  on the DAO, and the protocol fee charged to the Fund managers.
                </p>
              </div>
              <div className="hidden max-lg:block token-horizontal-line h-[1px]"></div>
            </div>

            {/* Liquidity Mining Card */}
            <div className="order-3 xl:order-3 lg:order-3 lg:w-1/3 grid grid-rows-3 w-full">
              <div className="row-span-6 text-center p-6 rounded-lg bg-opacity-10 ">
                <div className="flex justify-center mb-4">
                  <Check className="text-white" />
                </div>
                <h2 className="text-base font-bold mb-4">Transaction Fees</h2>
                <p className="text-gray-400 text-sm max-w-[380px] mx-auto color-[#fff9]">
                  Fund managers use B3X tokens to pay Protocol and DAO proposal
                  fees on the B3X platform.
                </p>
              </div>
              <div className="max-lg:hidden token-horizontal-line h-[1px]"></div>

              {/* Staking Card */}
              <div className="row-span-6 text-center p-6 rounded-lg bg-opacity-10 ">
                <div className="flex justify-center mb-4">
                  <Check className="text-white" />
                </div>
                <h2 className="text-base font-bold mb-4">
                  Incentives and Rewards
                </h2>
                <p className="text-gray-400 text-sm max-w-[380px] mx-auto color-[#fff9] lg:min-h-[120px] xl:min-h-[80px]">
                  B3X tokens can be used for various incentive programs to
                  attract and retain users and liquidity on the platform.
                </p>
              </div>
              <div className="hidden max-lg:block token-horizontal-line h-[1px]"></div>
            </div>
          </div>
        </div>
        <div className="my-20 max-lg:hidden token-horizontal-line h-[1px] w-1/3 mx-auto"></div>
        <div className="flex justify-between mt-8">
          <div className="flex flex-col items-center gap-8">
            <Image src={Commmunity} width={40} height={40} alt=""></Image>
            <h1 className="font-bold">Like-minded Community</h1>
          </div>
          <div className="flex flex-col items-center gap-8">
            <Image src={Voting} width={40} height={40} alt=""></Image>
            <h1 className="font-bold">Voting Power</h1>
          </div>
          <div className="flex flex-col items-center gap-8">
            <Image src={Liquidity} width={40} height={40} alt=""></Image>
            <h1 className="font-bold">Liquidity Mining</h1>
          </div>
          <div className="flex flex-col items-center gap-8">
            <Image src={Lowfees} width={40} height={40} alt=""></Image>
            <h1 className="font-bold">Low Fees</h1>
          </div>
          <div className="flex flex-col items-center gap-8">
            <Image src={StackingBenefit} width={40} height={40} alt=""></Image>
            <h1 className="font-bold">Staking Benefits</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page