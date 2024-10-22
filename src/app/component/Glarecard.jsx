
import { GlareCard } from "../../components/ui/glare-card";

export function GlareCardDemo() {
  return (
    (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <GlareCard className="flex flex-col items-center justify-center bg-[#24358E]">
      <p className="font-bold text-white text-lg">Invite a friend</p>
        <p className="font-normal text-base text-neutral-200 mt-4 p-6">
            Send your referral link or code
        </p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
      <p className="font-bold text-white text-lg">Deposit & Trade</p>
        <p className="font-normal text-base text-neutral-200 mt-4 p-6">
        Your referral must deposit at least $100 and make two trades
        </p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center bg-[#F2F1F4] ">
        <p className="font-bold text-black text-lg">Get Rewarded</p>
        <p className="font-normal text-base text-black mt-4 p-6">
        The B3X tokens will be deposited into your wallet!
        </p>
      </GlareCard>
    </div>)
  );
}
