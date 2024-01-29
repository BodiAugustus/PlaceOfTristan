import Bulletpoint from "../components/Bulletpoint";
import Image from "next/image";
import SpaceImg from "./../../public/space.webp";
import Roadmap from "./../../public/roadmap.png";

export default function About() {
  return (
    <div className="h-[100vh] w-[100vw] p-4   ">
      <h2 className="text-5xl text-center text-white mb-5">
        I Build the Future.
      </h2>
      <div className="flex  border-sky-400 rounded-lg border-4 w-[95vw] h-[85vh] mx-auto ">
        <div className="w-[70%] h-[100%] rounded-lg relative ">
          <Image
            className="rounded-bl-lg rounded-tl-lg"
            src={SpaceImg}
            alt="Image of crypto space pioneer building a castle on the moon."
            fill
            sizes="70%"
            priority
          />
        </div>

        <div className="rounded-lg pt-10 relative w-[100%] h-[100%]">
          <Image
            className="rounded-tr-sm rounded-br-sm"
            src={Roadmap}
            alt="My personal roadmap"
            fill
            sizes="100%"
            priority
          />
        </div>
      </div>
    </div>
  );
}
