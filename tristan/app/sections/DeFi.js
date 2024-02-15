import PaymentForm from "../components/PaymentForm";
import Story from "../components/Story";
import TickerTable from "../ui/TickerTable";
import dynamic from "next/dynamic";
import React from "react";
import { FaTwitter } from "react-icons/fa6";

const TwitterFeed = dynamic(() => import("../ui/TwitterFeed"), {
  ssr: false, // Disable server-side rendering for this component
});

export default function DeFi() {
  return (
    <div
      className="h-[100vh] w-[100vw] md:p-8 max-w-[2200px] mx-auto
      xs:h-[285vh] xs:p-2
      xs3:h-[245vh]
      xs4:h-[240vh]
      sm:h-[215vh]
    md:h-[195vh]
    lg:h-[100vh]"
    >
      <h2
        className="text-center text-white md:pb-5
        xs:text-2xl xs:mb-1
        xs3:text-3xl
        xl:text-5xl 2xl:mb-1
        
      5xl:text-6xl
      "
      >
        DeFi Central
      </h2>
      <div
        className="bg-custom-gradient border-sky-400 border-4 rounded-md flex justify-around items-center h-[80vh] shadow-xl shadow-sky-400
        xs:flex-col xs:h-[270vh]
        xs3:h-[230vh]
        xs4:h-[225vh]
        sm:h-[195vh]
        md:h-[185vh]
        lg:flex-row lg:h-[80vh]
      5xl:h-[75vh]
      "
      >
        <div className="bg-sky-800 border-4 border-sky-400 rounded-md">
          <h3
            className="text-center md:text-4xl text-white p-2 border-b-4 border-sky-400
          xs:text-2xl
          "
          >
            Pay Me 🤑
          </h3>
          <PaymentForm />
        </div>
        <div className="bg-sky-800 rounded-md border-[#00bfff] border-4">
          <h3
            className="flex justify-center items-center gap-4 md:text-4xl p-2 text-white border-b-4 border-[#00bfff]
          xs:text-2xl"
          >
            X - Feed
            <FaTwitter className="text-[#00bfff]" />
          </h3>
          <div>
            <TwitterFeed />
          </div>
        </div>
        <div className="border-4 border-sky-400 rounded-md">
          <h3
            className="text-center md:text-4xl p-2 text-white border-b-4 border-sky-400 bg-sky-800
          
          xs:text-2xl"
          >
            Under Watch 👀
          </h3>
          <TickerTable />
        </div>
      </div>
    </div>
  );
}
