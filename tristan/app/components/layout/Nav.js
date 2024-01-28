import { GiDrakkar } from "react-icons/gi";
import { lato } from "@/app/ui/fonts";
import Link from "next/link";
import { Button } from "@/app/ui/Button";

export default function Nav() {
  return (
    <nav
      className={` w-[100vw] h-[12vh] px-8 flex navbar items-center ${lato.className}`}
    >
      <div className="flex text-[#0a3d62] justify-arounditems-center w-[100%]   text-4xl">
        <div className="hover:scale-105 active:scale-100 transition-transform duration-300">
          <Link
            href="https://www.theshepherdnovel.com"
            target="_blank"
            referrerPolicy="norefferer"
          >
            <h4 className="flex items-center gap-2 ">
              <span className="font-bold ">Tristan</span>
              <GiDrakkar className="ship-animation" />
              <span className="font-bold ">Nettles</span>
            </h4>
          </Link>
        </div>
        <div className="mx-auto">
          <ul className="flex gap-20">
            <li className="cursor-pointer custom-underline active:text-[#0a3d62] transition-all duration-300 inline-block transform-origin-center-bottom hover:scale-105  active:scale-100 w-[10rem] ">
              Projects
            </li>
            <li className="cursor-pointer custom-underline active:text-[#0a3d62] transition-all duration-300 inline-block transform-origin-center-bottom hover:scale-105  active:scale-100  w-[6rem]">
              DeFi
            </li>
            <li className="cursor-pointer custom-underline active:text-[#0a3d62] transition-all duration-300 inline-block transform-origin-center-bottom hover:scale-105  active:scale-100  w-[7.5rem]">
              Books
            </li>
          </ul>
        </div>

        <div>
          <Button className="hover:bg-[#3a5f85] text-platinum bg-[#01011d] focus-visible:outline-[#0a3d62] active:bg-[#0a3d62] hover:scale-105 px-4 py-6 text-3xl active:scale-100">
            Connect
          </Button>
        </div>
      </div>
    </nav>
  );
}
