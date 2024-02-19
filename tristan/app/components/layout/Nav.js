"use client";

import { useState } from "react";
import { GiDrakkar } from "react-icons/gi";
import { lato } from "@/app/ui/fonts";
import Link from "next/link";
import ConnectButton from "@/app/ui/ConnectButton";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import icons for the menu

export default function Nav({
  connectWallet,
  userAddress,
  isLoading,
  isMenuOpen,
  setIsMenuOpen,
}) {
  // State to control the menu visibility

  return (
    <nav
      className={`w-[100vw] h-[12vh] px-4 flex navbar items-center justify-between ${lato.className} max-w-[2200px] `}
    >
      <div
        className="flex items-center justify-between xs:w-[100%]
      xs:px-0
      md:px-2 md:w-fit"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-[#0a3d62] hover:scale-105 active:scale-100 transition-transform duration-300
          xs:text-lg
          xs3:text-xl
          xs4:text-2xl
          lg:text-2xl 
          xl:text-4xl 
          4xl:text-4xl 
          5xl:text-5xl "
        >
          <span className="font-bold">Tristan</span>
          <GiDrakkar className="ship-animation" />
          <span className="font-bold">Nettles</span>
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="
          xs:text-4xl
          xs4:text-5xl
          md:text-6xl 
          lg:hidden"
        >
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Desktop Menu */}
      <ul
        className={`hidden lg:flex gap-20 lg:gap-6 xl:gap-20
        2xl:gap-20 xl:text-4xl
        5xl:gap-36 ${
          isMenuOpen ? "flex" : "hidden"
        } flex-col lg:flex-row lg:items-center`}
      >
        <Link
          className="cursor-pointer custom-underline active:text-[#0a3d62] transition-all duration-300 inline-block transform-origin-center-bottom hover:scale-105 active:scale-100 w-[10rem]"
          href="/#projects"
        >
          Projects
        </Link>
        <Link
          className="cursor-pointer custom-underline active:text-[#0a3d62] transition-all duration-300 inline-block transform-origin-center-bottom hover:scale-105 active:scale-100 w-[6rem]"
          href="/#defi"
        >
          DeFi
        </Link>
        <Link
          className="cursor-pointer custom-underline active:text-[#0a3d62] transition-all duration-300 inline-block transform-origin-center-bottom hover:scale-105 active:scale-100 w-[7.5rem]"
          href="/#books"
        >
          Books
        </Link>
      </ul>

      {/* Connect Button - Show on both Mobile and Desktop */}
      <div className="hidden lg:block">
        <ConnectButton
          isLoading={isLoading}
          connectWallet={connectWallet}
          userAddress={userAddress}
          className="hover:bg-sky-900 text-platinum bg-[#01011d] focus-visible:outline-[#0a3d62] active:bg-[#0a3d62] hover:scale-105 px-4 text-3xl active:scale-100 h-14 py-4 lg:text-2xl xl:text-4xl 4xl:h-16 5xl:text-4xl 5xl:h-16"
        >
          Connect
        </ConnectButton>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className={`lg:hidden mobile-menu ${isMenuOpen ? "active" : ""}`}>
          <ul
            className="flex  items-center justify-end 
            md:gap-24 
          xs:text-base xs:gap-8
          md:text-2xl "
          >
            {/* Mobile Menu Items */}
            <Link
              className="cursor-pointer custom-underline active:text-[#0a3d62] transition-all duration-300 hover:scale-105 active:scale-100"
              href="/#projects"
            >
              Projects
            </Link>
            <Link
              className="cursor-pointer custom-underline active:text-[#0a3d62] transition-all duration-300 hover:scale-105 active:scale-100"
              href="/#defi"
            >
              DeFi
            </Link>
            <Link
              className="cursor-pointer custom-underline active:text-[#0a3d62] transition-all duration-300 hover:scale-105 active:scale-100"
              href="/#books"
            >
              Books
            </Link>
            {/* Connect Button specifically for Mobile */}
            <li>
              <ConnectButton
                isLoading={isLoading}
                connectWallet={connectWallet}
                userAddress={userAddress}
                className="hover:bg-sky-900 text-platinum bg-[#01011d] focus-visible:outline-[#0a3d62] active:bg-[#0a3d62] hover:scale-105 px-4 text-3xl active:scale-100 h-12 py-4
                xs:text-lg
            lg:text-2xl
            xl:text-4xl
            4xl:h-16
            5xl:text-4xl 5xl:h-16"
              >
                Connect
              </ConnectButton>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
