import Link from "next/link";
import { lato, playfair } from "./fonts";

export default function BookBox() {
  return (
    <div className="flex flex-col items-center gap-5 pt-4">
      <div
        className={`w-[25vw] h-[60vh] bg-[#01011d] p-2 border-4 mb-2 border-sky-400 rounded-md text-white ${lato.className}
        xs:w-[85vw] xs:h-[65vh]
        sm:w-[75vw]
        lg:w-[25vw]
        `}
      >
        <h4
          className="text-center text-4xl mb-5
          xs:text-2xl
          xs3:mb-2
          md:pt-2
        5xl:text-5xl 
        "
        >
          Synopsis
        </h4>
        <div
          className="flex flex-col gap-4 bg-white text-[#01011d] p-2 rounded-md border-4 border-sky-800 overflow-y-scroll h-[85%] div-scrollbar
        5xl:text-xl
        "
        >
          <p className="indent-4 first-letter:text-2xl ">
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
          <p className="indent-4 first-letter:text-2xl ">
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

      <h4
        className="text-2xl text-white flex gap-2
      
      "
      >
        <span
          className="font-bold
          xs:text-sm
          lg:text-base
          2xl:text-2xl
        5xl:text-3xl
        "
        >
          Published By:
        </span>
        <Link href="https://histriabooks.com/">
          <p
            className="hover:scale-105 active:scale-100 transition-all duration-300
            xs:text-sm
            lg:text-base
            2xl:text-2xl
          5xl:text-3xl
          "
          >
            Histria Books, 2024
          </p>
        </Link>
      </h4>
    </div>
  );
}
