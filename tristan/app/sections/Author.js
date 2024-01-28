import Image from "next/image";
import AuthorForms from "../components/AuthorForms";
import BookBox from "../ui/BookBox";
import { Button } from "../ui/Button";

export default function Author() {
  return (
    <div className="h-[100vh] w-[100vw] p-8 ">
      <h2 className="text-center text-5xl pb-5 text-white ">Author's Corner</h2>
      <div
        className=" justify-around flex h-[80vh] p-4 items-center border-4 border-white rounded-md bg-custom-gradient2
        "
      >
        <AuthorForms />
        <div className="relative">
          <Image
            src="/the_shepherd_cover_img.jpeg"
            width={350}
            height={400}
            className="relative border-white border-4 rounded-md"
            alt="Cover art for 'The Shepherd - A Bronze Age Tale,' novel of a shepherd boy leading a flock of sheep down an arid looking hill."
          />
          <Button
            className="bg-orange-700 rounded-md shadow-xl shadow-orange-500 text-orange-300 font-bold text-2xl text-center hover:scale-110 active:scale-100 px-4 

           cursor-pointer transition-all absolute z-10 left-28 
           bottom-24"
          >
            Buy Now
          </Button>
        </div>
        <BookBox />
      </div>
    </div>
  );
}
