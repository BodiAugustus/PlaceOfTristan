// Nav.js
import { useRef } from "react";
import { GiDrakkar } from "react-icons/gi";
import { lato } from "@/app/ui/fonts";
import Link from "next/link";
import ConnectButton from "@/app/ui/ConnectButton";
import { BiFilter } from "react-icons/bi";
import MobileMenu from "@/app/ui/MobileMenu"; // Import the MobileMenu component
import { Button } from "@/app/ui/Button";

export default function Nav({
  connectWallet,
  userAddress,
  isLoading,
  isActive,
  setIsActive,
}) {
  // const mobileMenuRef = useRef(null);

  return (
    <nav
      className={`w-[100vw] h-[12vh] px-4 flex navbar items-center justify-between ${lato.className} max-w-[2200px] `}
    >
      <div className="flex items-center justify-between xs:w-[100%] xs:px-0 md:px-2 md:w-fit">
        <div className="flex items-center gap-2 text-[#0a3d62] hover:scale-105 active:scale-100 transition-transform duration-300 xs:text-lg  xs3:text-2xl lg:text-2xl xl:text-4xl 4xl:text-4xl 5xl:text-5xl ">
          <span className="font-bold">Tristan</span>
          <GiDrakkar className="ship-animation" />
          <span className="font-bold">Nettles</span>
        </div>
        <Button
          onClick={() => setIsActive(!isActive)}
          className="xs:text-4xl xs4:text-6xl md:text-6xl lg:hidden hover:scale-105 active:scale-100 "
        >
          <BiFilter className="text-[#0a3d62]" />
        </Button>
      </div>

      {/* Desktop Menu */}
      <ul
        className={`hidden lg:flex gap-20 lg:gap-6 xl:gap-20 2xl:gap-20 xl:text-4xl 5xl:gap-36`}
      >
        <li>
          <Link
            href="/#projects"
            className="cursor-pointer custom-underline active:text-[#0a3d62] transition-all duration-300 inline-block transform-origin-center-bottom hover:scale-105 active:scale-100 w-[10rem]"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/#defi"
            className="cursor-pointer custom-underline active:text-[#0a3d62] transition-all duration-300 inline-block transform-origin-center-bottom hover:scale-105 active:scale-100 w-[6rem]"
          >
            DeFi
          </Link>
        </li>
        <li>
          <Link
            href="/#books"
            className="cursor-pointer custom-underline active:text-[#0a3d62] transition-all duration-300 inline-block transform-origin-center-bottom hover:scale-105 active:scale-100 w-[7.5rem]"
          >
            Books
          </Link>
        </li>
      </ul>
      <ConnectButton
        isLoading={isLoading}
        connectWallet={connectWallet}
        userAddress={userAddress}
        className="hover:bg-sky-900 text-platinum bg-[#01011d] focus-visible:outline-[#0a3d62] active:bg-[#0a3d62] hover:scale-105 px-4 text-3xl active:scale-100 h-14 py-2 lg:text-2xl xl:text-4xl 4xl:h-16 5xl:text-4xl 5xl:h-16 hidden lg:block"
      >
        Connect
      </ConnectButton>

      {/* Mobile Menu */}
      <MobileMenu
        // ref={mobileMenuRef}
        connectWallet={connectWallet}
        userAddress={userAddress}
        isLoading={isLoading}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </nav>
  );
}
