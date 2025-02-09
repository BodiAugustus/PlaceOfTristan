"use client";

import HeroCard from "../ui/HeroCard";
import SaturnWithMoon from "../ui/SaturnWithMoon";
import { playfair } from "./../ui/fonts";

export default function Hero({
  connectWallet,
  userAddress,
  currentNetworkId,
  isActive,
}) {
  return (
    <div
      className={`${
        isActive
          ? "invisible h-auto"
          : `w-[100vw] h-auto ${playfair.className}  max-w-[2200px] z-0`
      }`}
    >
      <div className="flex  justify-center items-center xs:relative z-10 xs:pt-4 xl:pt-24">
        {/* this div below is for the 3js animation */}

        <div
          className={`${
            isActive
              ? "hidden"
              : "text-center text-platinum relative max-w-[850px] mx-auto xs:absolute xs:z-20 custom-xs-448-heroList custom-xs-560-heroList custom-xs4-550-heroList md:pt-0 xs2:-mt-12"
          }  lg:visible
        xl:-mt-28`}
        >
          <ul
            className=" mb-8 flex flex-col items-center
            xs:gap-0 custom-xs-448-heroListText
            custom-xs-640-heroListText
            xs2:mb-8 
            xs4:gap-1
            xs6:mb-10
          sm:gap-1
          lg:gap-0 
          2xl:mb-12 2xl:gap-2 "
          >
            <li
              className=" font-bold tracking-wide mb-4
              xs:text-4xl
              xs3:text-5xl
              
              sm:text-7xl
              md:text-8xl 
              lg:text-7xl
              xl:text-7xl
              2xl:text-8xl
           "
            >
              Tristan Nettles
            </li>
            <li
              className="text-5xl mb-2 hover:text-[#00baff] hover:scale-105 transition duration-300 ease-in-out inline-block
              xs:text-2xl xs:mb-0
              xs3:text-3xl xs3:tracking-tight
              sm:text-4xl
              md:text-5xl
            lg:text-4xl
            xl:text-4xl
            2xl:text-5xl
            4xl:text-6xl
            5xl:text-7xl"
            >
              Full Stack Web3 Developer
            </li>

            <li
              className="text-5xl -mb-2 transition duration-300 ease-in-out hover:text-[#00baff] hover:scale-105 inline-block
              xs:text-2xl xs:-mb-6
              xs3:text-3xl 
              sm:text-4xl
              md:text-5xl
             lg:text-4xl
            xl:text-4xl
            2xl:text-5xl
            4xl:text-6xl
            5xl:text-7xl "
            >
              DeFi Consultant
            </li>
            <br />
            <li
              className="text-5xl transition duration-300 ease-in-out hover:text-[#00baff] hover:scale-105 inline-block
              xs:text-2xl
              xs3:text-3xl 
              sm:text-4xl
             lg:text-4xl
            xl:text-4xl 
            2xl:text-5xl
            4xl:text-6xl
            5xl:text-7xl"
            >
              Published Author
            </li>
          </ul>
          <HeroCard
            connectWallet={connectWallet}
            userAddress={userAddress}
            currentNetworkId={currentNetworkId}
          />
        </div>

        <div
          className={`${
            isActive
              ? "hidden"
              : "h-[75vh] max-w-[850px]  relative p-4 w-[40vw] mx-auto overflow-hidden"
          } xs:relative lg:static  xs:w-[95vw] xs3:w-[95vw] lg:w-[40vw] xl:w-[37vw] 2xl:w-[40vw] 3xl:w-[40vw] 4xl:w-[40vw] 5xl:w-[40vw]`}
        >
          <div className="absolute inset-0 bg-[url('/galaxy3.png')] bg-cover bg-center">
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
