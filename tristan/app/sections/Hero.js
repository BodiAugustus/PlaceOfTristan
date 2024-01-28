"use client";

import HeroCard from "../ui/HeroCard";
import MeshBlob from "../ui/MeshBlob";

import MeshLathe from "../ui/MeshLathe";
import MeshTube from "../ui/MeshTube";

import SaturnWithMoon from "../ui/SaturnWithMoon";
import { playfair } from "./../ui/fonts";

export default function Hero() {
  return (
    <div className={`w-[100vw] h-[88vh] ${playfair.className}  `}>
      <div className="flex justify-center items-center pt-6 relative z-10">
        {/* this div below is for the 3js animation */}
        <div className="absolute left-[-40vw] overflow-visible h-[88vh] w-[100vw] ">
          {" "}
          {/* <MeshTube /> */}
        </div>
        <div className="text-center text-platinum relative">
          <ul className=" mb-8 w-[52vw] ">
            <li className="text-9xl font-bold tracking-wide ">
              Tristan Nettles
            </li>
            <li className="text-5xl mb-2 hover:text-[#00baff] hover:scale-105 transition duration-300 ease-in-out inline-block">
              Full Stack Web3 Developer
            </li>

            <li className="text-5xl mb-2 transition duration-300 ease-in-out hover:text-[#00baff] hover:scale-105 inline-block ">
              DeFi Consultant
            </li>
            <br />
            <li className="text-5xl transition duration-300 ease-in-out hover:text-[#00baff] hover:scale-105 inline-block ">
              Published Author
            </li>
          </ul>
          <HeroCard />
        </div>

        <div className="h-[75vh] w-[40vw] overflow-visible  relative ">
          <div className="h-[100%] w-[100%] absolute inset-0 bg-[url('/galaxy3.png')] bg-cover bg-center">
            <div className="absolute inset-0 z-5">
              {[...Array(10)].map((_, i) => (
                <div key={i} className={`star star-${i + 1}`}></div>
              ))}
            </div>
            <SaturnWithMoon />
          </div>
        </div>
      </div>
    </div>
  );
}
