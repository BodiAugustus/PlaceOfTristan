// MobileMenu.js
import React, { forwardRef, useState } from "react";
import Link from "next/link";
import ConnectButton from "@/app/ui/ConnectButton";

const MobileMenu = forwardRef(
  ({ connectWallet, userAddress, isLoading }, ref) => {
    const [isActive, setIsActive] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
      setIsActive(!isActive);
    };

    // Expose the toggleMenu function through ref
    React.useImperativeHandle(ref, () => ({
      toggleMenu: toggleMenu,
    }));

    return (
      <div className={`lg:hidden mobile-menu ${isActive ? "active" : ""}`}>
        <ul className="flex items-center justify-end md:gap-24 xs:text-base xs:gap-6 md:text-2xl">
          {/* Mobile Menu Items */}
          <li>
            <Link
              href="#projects"
              className="cursor-pointer inline  active:text-[#0a3d62] transition-all duration-300 hover:scale-105 active:scale-100"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#defi"
              className="cursor-pointer inline active:text-[#0a3d62] transition-all duration-300 hover:scale-105 active:scale-100"
            >
              DeFi
            </Link>
          </li>
          <li>
            <Link
              href="#books"
              className="cursor-pointer inline  active:text-[#0a3d62] transition-all duration-300 hover:scale-105 active:scale-100"
            >
              Books
            </Link>
          </li>
          {/* Connect Button specifically for Mobile */}
          <li>
            <ConnectButton
              isLoading={isLoading}
              connectWallet={connectWallet}
              userAddress={userAddress}
              className="hover:bg-sky-900 text-platinum bg-[#01011d] focus-visible:outline-[#0a3d62] active:bg-[#0a3d62] hover:scale-105 px-4 text-3xl active:scale-100 h-12 py-4 xs:text-lg lg:text-2xl xl:text-4xl 4xl:h-16 5xl:text-4xl 5xl:h-16"
            >
              Connect
            </ConnectButton>
          </li>
        </ul>
      </div>
    );
  }
);

export default MobileMenu;
