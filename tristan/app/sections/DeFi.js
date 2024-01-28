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
    <div className="h-[100vh] w-[100vw] p-8">
      <h2 className="text-center text-5xl text-white pb-5">DeFi Central</h2>
      <div className="bg-custom-gradient border-white border-4 rounded-md flex justify-around items-center h-[80vh]">
        <div className="bg-sky-800 border-4 border-white rounded-md">
          <h3 className="text-center text-4xl text-white p-2 border-b-4 border-white">
            Pay Me 🤑
          </h3>
          <PaymentForm />
        </div>
        <div className="bg-sky-800 rounded-md border-[#00bfff] border-4 ">
          <h3 className="flex justify-center items-center gap-4 text-4xl p-2 text-white border-b-4 border-[#00bfff]">
            X - Feed
            <FaTwitter className="text-[#00bfff]" />
          </h3>
          <div>
            <TwitterFeed />
          </div>
        </div>
        <div className="border-4 border-white rounded-md">
          <h3 className="text-center text-4xl p-2 text-white border-b-4 border-white bg-sky-800">
            Under Watch 👀
          </h3>
          <TickerTable />
        </div>
      </div>
    </div>
  );
}
