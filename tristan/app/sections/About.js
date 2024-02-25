import Image from "next/image";
import SpaceImg from "../../public/space.webp";
import Roadmap from "../../public/roadmap.png";
import Roadmap2 from "../../public/roadmapMini.png";

export default function About() {
  return (
    <div
      className="h-[100vh] w-[100vw] md:p-4    max-w-[2200px]
      xs:p-2 custom-xs-448-aboutSection
      custom-xs-640-aboutSection
      md:h-[140vh]
    lg:h-[130vh]

    xl:h-[105vh]
    2xl:h-[100vh]"
    >
      <h2
        className=" text-center text-white md:mb-3
        xs:text-2xl xs:mb-1
        xs3:text-3xl
        xl:text-5xl xl:pt-6
      5xl:text-6xl
      "
      >
        I Help Build the Future.
      </h2>
      <div
        className="flex flex-col  border-sky-400 rounded-lg border-4 w-[95vw] h-[85vh] mx-auto shadow-xl shadow-sky-400
       xs:h-[115vh]
        md:h-[130vh]
        lg:h-[115vh]

        xl:flex-row xl:h-[85vh]
      5xl:w-[90vw] "
      >
        <div
          className="w-[100%]
          xl:w-[70%] xs:h-[60%] md:h-[100%] rounded-lg relative 
        "
        >
          <Image
            className="rounded-bl-lg rounded-tl-lg "
            src={SpaceImg}
            alt="Image of crypto space pioneer building a castle on the moon."
            fill
            sizes="70%"
          />
        </div>

        <div
          className="rounded-lg pt-10 relative w-[100%] h-[100%]
        lg:h-[120%]
        xl:h-[100%]
        "
        >
          <Image
            className="rounded-tr-sm rounded-br-sm md:hidden"
            src={Roadmap2}
            alt="My personal roadmap"
            fill
            sizes="100%"
          />
          <Image
            className="rounded-tr-sm rounded-br-sm hidden md:block"
            src={Roadmap}
            alt="My personal roadmap"
            fill
            sizes="100%"
          />
        </div>
      </div>
    </div>
  );
}
