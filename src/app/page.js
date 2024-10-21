import { Card } from "@/components/ui/card";
import Image from "next/image";
import Features from "./component/LandingPage/features";
import Benefits from "./component/LandingPage/Benefits";
export default function Home() {
  return (
    <>
    {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"> */}
      <Features />
      <Benefits />
    {/* </div> */}
    </>
  );
}
