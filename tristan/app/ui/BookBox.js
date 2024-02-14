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
            In the sprawling landscape of the Bronze Age, a young shepherd boy
            finds himself teetering on the fragile boundary between
            civilization's edge and the untamed wilderness. His humble existence
            is shattered when an invading force storms through his homeland,
            snatching him away to a life of enslavement. Under the iron-fisted
            rule of a notorious and undefeated general known for his ruthless
            tactics, the boy, with his unassuming demeanor and quick-witted
            charm meaneuvers himself into a peculiar position within the
            commander's ranks.
          </p>
          <p>
            As he navigates the treacherous corridors of power, the shepherd boy
            discovers how to survive in the midst of brutality, using his guile
            to earn favor in the eyes of the general. Yet, hidden behind the
            facade of innocence lies a clever mind honed by the unforgiving
            landscapes he once roamed as a shepherd. When the truth about the
            boy's true nature begins to unravel, it's a revelation that arrives
            too late for the general and his army. Through twists of fate and
            the cunning manipulation of circumstances, the general and his
            forces find themselves marching toward their downfall, orchestrated
            by the young shepherd whose true strength lies beyond the constraits
            of his chains.
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
