import React, { forwardRef } from "react";
import Link from "next/link";
import ConnectButton from "@/app/ui/ConnectButton";
import { ImCross } from "react-icons/im";

const MobileMenu = forwardRef(
  ({ connectWallet, userAddress, isLoading, setIsActive, isActive }, ref) => {
    const toggleMenu = () => {
      setIsActive(!isActive);
    };

    React.useImperativeHandle(ref, () => ({
      toggleMenu,
    }));

    return (
      <div
        className={` ${
          isActive
            ? "flex items-center justify-center bg-black bg-opacity-100 h-[100vh] fixed inset-0 mobileMenu-390-780"
            : "hidden"
        }  lg:hidden`}
      >
        <div className="bg-[#01011d] p-4  max-w-sm mx-auto w-full h-[100vh] z-50 lg:hidden">
          {/* Mobile Menu Items */}
          <div>
            <ImCross
              className="text-red-500"
              onClick={() => {
                setIsActive(false);
              }}
            />
          </div>
          <ul
            className="space-y-4 text-center text-white flex flex-col  items-center xs:gap-8 xs:pt-6 
          xs6:gap-20
          "
          >
            <li>
              <Link
                href="/#projects"
                className="xs:text-4xl font-medium"
                onClick={() => {
                  setIsActive(false);
                }}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/#defi"
                className="xs:text-4xl font-medium"
                onClick={() => {
                  setIsActive(false);
                }}
              >
                DeFi
              </Link>
            </li>
            <li>
              <Link
                href="/#books"
                className="xs:text-4xl font-medium"
                onClick={() => {
                  setIsActive(false);
                }}
              >
                Books
              </Link>
            </li>
            <li>
              <ConnectButton
                isLoading={isLoading}
                connectWallet={connectWallet}
                userAddress={userAddress}
                className="hover:bg-sky-400 text-[#01011d] bg-white focus-visible:outline-[#0a3d62] active:bg-[#0a3d62] hover:scale-105 px-4 xs:text-4xl font-bold active:scale-100 h-16 block lg:hidden"
              >
                Connect
              </ConnectButton>
            </li>
          </ul>
        </div>
      </div>
    );
  }
);

export default MobileMenu;
