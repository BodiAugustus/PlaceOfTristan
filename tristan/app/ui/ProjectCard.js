import Image from "next/image";
import Filler from "../../public/space.webp";
import { showcase } from "../components/data/data";
import Link from "next/link";
import { lato } from "../ui/fonts";
import { FaGithub } from "react-icons/fa";

const ProjectCard = () => {
  return (
    <>
      {showcase.map((item) => {
        const { id, name, image, description, link, date, github } = item;
        return (
          <div
            key={id}
            className={`text-white bg-sky-400 h-[80vh] w-[20vw] border-4 border-[#00bfff] rounded-md ${lato.className}`}
          >
            <div className="h-[40%] w-[100%] relative">
              <Image
                src={Filler}
                alt="Filler"
                fill
                className="rounded-md border-b-4 border-[#00bfff]"
                sizes="20vw"
              />
            </div>
            <div className="bg-sky-800 h-[60%]">
              <div>
                <h2 className={`text-center p-2 pt-4 text-2xl  `}>
                  {name} | {date}
                </h2>
              </div>
              <div className="bg-[#01011d] m-2 h-[55%] mb-3 indent-2 p-2 rounded-md border-4 border-[#00bfff]">
                <p className="text-lg">{description}</p>
              </div>
              <div className="bg-[#0a3d62] h-[23%] flex gap-8 pl-[7.5%]  items-center ">
                <Link href={github}>
                  <FaGithub className="text-3xl hover:scale-105 active:scale-100 transition-all duration-300 hover:text-[#00bfff] active:text-white" />
                </Link>
                <Link
                  href={link}
                  className="text-xl hover:scale-105 active:scale-100 transition-all duration-300"
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
