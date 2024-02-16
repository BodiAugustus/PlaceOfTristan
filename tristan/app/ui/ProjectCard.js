import Image from "next/image";
import { useEffect, useState } from "react";
import { showcase } from "../components/data/data";
import Link from "next/link";
import { lato } from "../ui/fonts";
import { FaGithub } from "react-icons/fa";

const ProjectCard = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 1500);
    };

    // Check screen size on mount
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      {showcase.map((item, index) => {
        // Add logic to skip rendering the last item if isLargeScreen is false
        if (!isLargeScreen && index === showcase.length - 1) {
          return null;
        }

        const { id, name, image, description, link, date, github } = item;
        return (
          <div
            key={id}
            className={`text-white bg-sky-400 md:h-[80vh]  border-4 border-[#00bfff] rounded-md ${lato.className} shadow-xl shadow-sky-400 mx-auto
            xs:w-[90vw] xs:h-[90vh]
            xs3:h-[78vh]
            sm:w-[65vw]
            md:w-[75vw]
            lg:w-[28.5vw]
            xl:w-[25vw]
            2xl:w-[20vw] 2xl:h-[80vh]
            `}
          >
            <div className="h-[40%] w-[100%] relative">
              <Image
                src={image}
                alt={description}
                fill
                className="rounded-md border-b-4 border-[#00bfff]"
                sizes="20vw"
              />
            </div>
            <div
              className="bg-sky-800 h-[60%]
            
            "
            >
              <div>
                <h2
                  className={`text-center p-2 pt-4 text-2xl
                  md:text-4xl
                  lg:text-4xl
                  xl:text-3xl
                5xl:text-4xl  `}
                >
                  {name} | {date}
                </h2>
              </div>
              <div
                className="bg-[#01011d] m-2 h-[55%] mb-3 indent-2 p-2 md:p-3 md:mx-3 
                lg:p-2 rounded-md border-4 border-[#00bfff]
              "
              >
                <p
                  className="text-lg
                  xs:text-base
                  xs4:text-lg
                  md:text-2xl
                  lg:text-base
                  2xl:h-[50%]
                4xl:text-2xl 
                "
                >
                  {description}
                </p>
              </div>
              <div
                className="bg-[#0a3d62] h-[23%] flex gap-8 pl-[7.5%]  items-center
                xs:h-[19%]
                xs2:h-[22%]
                xs4:h-[20%]
                xs5:h-[23%]
                xs6:h-[19%]
                xs8:h-[26%]
                sm:h-[25%]
                md:h-[31%] md:gap-16
                lg:h-[24%] lg:gap-8
                xl:h-[18%]
                2xl:h-[22%]
                3xl:h-[27%]
                4xl:h-[31%]
              5xl:gap-12 5xl:h-[29%]"
              >
                <Link href={github}>
                  <FaGithub
                    className="text-3xl hover:scale-105 active:scale-100 transition-all duration-300 hover:text-[#00bfff] active:text-white
                    xs4:text-4xl
                    sm:text-5xl
                    md:text-6xl
                    lg:text-3xl
                  4xl:text-5xl
                  "
                  />
                </Link>
                <Link
                  href={link}
                  className="text-xl hover:scale-105 active:scale-100 transition-all duration-300
                  xs4:text-2xl
                  sm:text-3xl
                  md:text-4xl 
                  xl:text-2xl
                  4xl:text-2xl
                  5xl:text-3xl"
                >
                  See for Yourself &#x2192;
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectCard;
