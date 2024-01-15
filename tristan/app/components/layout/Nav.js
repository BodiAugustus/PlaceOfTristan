import { GiDrakkar } from "react-icons/gi";
import { lato } from "@/app/ui/fonts";
import Link from "next/link";

export default function Nav() {
  return (
    <nav
      className={`bg-red-300 w-[100vw] h-[12vh] px-8 flex items-center ${lato.className}`}
    >
      <div className="flex justify-arounditems-center w-[100%] bg-white text-4xl">
        <div className="">
          <Link
            href="https://www.theshepherdnovel.com"
            target="_blank"
            referrerPolicy="norefferer"
          >
            <h4 className="flex items-center gap-2 ">
              <span>Tristan</span>
              <GiDrakkar />
              <span>Nettles</span>
            </h4>
          </Link>
        </div>
        <div className="mx-auto">
          <ul className="flex gap-20 ">
            <li>Projects</li>
            <li>DeFi</li>
            <li>Books</li>
          </ul>
        </div>
        <div className="">
          <button>Connect</button>
        </div>
      </div>
    </nav>
  );
}
