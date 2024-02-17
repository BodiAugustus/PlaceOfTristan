"use client";

import { useEffect } from "react";

import { lato } from "./../ui/fonts";
import Image from "next/image";
import XMR from "../../public/xmr.png";
import Link from "next/link";

export default function Redirect() {
  useEffect(() => {
    // Set a timeout to redirect to the homepage after 3 seconds
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 5000); // 3000 milliseconds = 3 seconds

    // Cleanup function to clear the timer if the component unmounts before the timeout finishes
    return () => clearTimeout(timer);
  }, []); // Depend on router to ensure it's available

  return (
    <div
      className={`w-[100vw] h-[100vh] max-w-[2200px] bg-[#01011d] ${lato.className}`}
    >
      <div className="flex flex-col justify-center items-center h-[90%]">
        <Link href="/">
          <Image
            className="mb-4 hover:scale-105 active:scale-100 duration-300 transition-transform cursor-pointer"
            src={XMR}
            alt="Image of Monero."
            height={300}
            width={300}
            priority
          />
        </Link>
        <div className="text-white flex flex-col text-center items-center justify-center xs:text-xl px-4">
          <h2 className="2xl:text-5xl mb-5 font-bold">
            Thanks for reaching out!
          </h2>
          <p className="mb-2">
            You will now be automatically redirected back to the home page in 5
            seconds...
          </p>
          <p className="mb-2">Or just click on the Monero logo above!</p>
          <p>I 💘 XMR.</p>
        </div>
      </div>
    </div>
  );
}
