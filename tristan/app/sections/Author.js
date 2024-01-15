import Image from "next/image";
import AuthorForms from "../components/AuthorForms";
import BookBox from "../ui/BookBox";

export default function Author() {
  return (
    <div className="h-[100vh] w-[100vw] p-8 ">
      <h2 className="text-center text-5xl ">Author's Corner</h2>
      <div className=" justify-around flex bg-red-400 h-[80vh] p-6 items-center">
        <AuthorForms />
        <div>
          <Image
            src="/the_shepherd_cover_img.jpeg"
            width={350}
            height={400}
            className=""
            alt="Cover art for 'The Shepherd - A Bronze Age Tale,' novel of a shepherd boy leading a flock of sheep down an arid looking hill."
          />
        </div>
        <BookBox />
      </div>
    </div>
  );
}
