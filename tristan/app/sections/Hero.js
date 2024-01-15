"use client";

import HeroCard from "../ui/HeroCard";
import MeshBlob from "../ui/MeshBlob";

import MeshLathe from "../ui/MeshLathe";
import MeshTube from "../ui/MeshTube";

import SaturnWithMoon from "../ui/SaturnWithMoon";
import { playfair } from "./../ui/fonts";

export default function Hero() {
  return (
    <div className={`w-[100vw] h-[88vh] ${playfair.className} `}>
      <div className="flex justify-center items-center pt-6 relative">
        <div className="absolute left-[-40vw] overflow-visible h-[88vh] w-[100vw]">
          {" "}
          <MeshTube />
        </div>
        <div className="  text-center text-gray-200  ">
          <div className=" mb-8 w-[52vw] ">
            <h1 className="text-9xl font-bold tracking-wide">
              Tristan Nettles
            </h1>
            <h2 className="text-5xl mb-2">Full Stack Web3 Developer</h2>

            <div>
              <h2 className="text-5xl mb-2">DeFi Consultant</h2>
              <h2 className="text-5xl">Published Author</h2>
            </div>
          </div>
          <HeroCard />
        </div>

        <div className="h-[75vh] w-[40vw] overflow-visible ">
          <h2 className="h-[100%] w-[100%]">
            <SaturnWithMoon />
          </h2>
        </div>
      </div>
    </div>
  );
}
