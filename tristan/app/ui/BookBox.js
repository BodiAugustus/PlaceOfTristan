import Link from "next/link";
import { lato, playfair } from "./fonts";

export default function BookBox() {
  return (
    <div className="flex flex-col items-center gap-5">
      <div
        className={`w-[25vw] h-[60vh] bg-[#01011d] p-4 border-4 mb-2 border-white rounded-md text-white ${playfair.className}`}
      >
        <h4 className="text-center text-4xl mb-4">Synopsis</h4>
        <div className="flex flex-col gap-4 ">
          <p className="indent-4 first-letter:text-2xl">
            A young shepherd boy living between the no mans land of civilization
            and beyond is taken and made slave by an invading army enroute to
            his homeland.
          </p>
          <p>
            Led by an undefeated general with a penchant for cruelty, this
            unassuming adolescent careens his way into the commanders good
            graces through a witless charm.
          </p>
          <p>
            Finding out only all too late that the little shepherd boy was not
            at all what he had seemed, the unconquerable general and his army
            are led to their doom.
          </p>
        </div>
      </div>

      <h4 className="text-2xl text-white flex gap-2">
        <span className="font-bold">Published By:</span>
        <Link href="https://histriabooks.com/">
          <p className="hover:scale-105 active:scale-100 transition-all duration-300">
            Histria Books, 2024
          </p>
        </Link>
      </h4>
    </div>
  );
}
