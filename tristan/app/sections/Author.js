import Image from "next/image";
import AuthorForms from "../components/AuthorForms";
import BookBox from "../ui/BookBox";
import { Button } from "../ui/Button";

export default function Author() {
  return (
    <div
      id="books"
      className="h-[100vh] w-[100vw] md:p-8 max-w-[2200px] mx-auto 
      custom-xs-448-authorSection
      custom-xs-640-authorSection xs:p-2
      custom-xs3-680-authorSection
      custom-xs4-660-authorSection
      custom-xs4-550-authorSection
      custom-xs5-670-authorSection
      custom-xs5-850-authorSection
      custom-xs6-650-authorSection
      custom-xs6-780-authorSection
      custom-xs8-715-authorSection
      custom-xs8-810-authorSection
      sm:h-[280vh]
      md:h-[215vh]
      lg:h-[120vh]"
    >
      <h2
        className="text-center md:pb-5 text-white 
        xs:text-2xl xs:mb-1
        xs3:text-3xl
        xl:text-5xl xl:mb-0
        5xl:text-6xl
      "
      >
        Author's Corner
      </h2>
      <div
        className=" justify-around flex h-[80vh] p-4 items-center border-4 border-sky-400 rounded-md bg-custom-gradient2 shadow-xl shadow-sky-400
        xs:flex-col custom-xs-448-authorSectionContainer
        custom-xs-640-authorSectionContainer
        custom-xs3-680-authorSectionContainer
        custom-xs4-660-authorSectionContainer
        custom-xs4-550-authorSectionContainer
        custom-xs5-670-authorSectionContainer
        custom-xs5-850-authorSectionContainer
        custom-xs6-650-authorSectionContainer
        custom-xs6-780-authorSectionContainer
        custom-xs8-715-authorSectionContainer
        custom-xs8-810-authorSectionContainer
        xs:w-[95vw] xs:p-2
        sm:h-[260vh]
        md:h-[200vh] 
        lg:h-[100vh] lg:flex-row
        "
      >
        <AuthorForms />
        <div
          className="relative 
       
        "
        >
          <Image
            src="/the_shepherd_cover_img.jpeg"
            width={500}
            height={600}
            className="relative border-orange-600 border-4 rounded-md shadow-orange-400 shadow-xl  block md:hidden"
            alt="Cover art for 'The Shepherd - A Bronze Age Tale,' novel of a shepherd boy leading a flock of sheep down an arid looking hill."
          />
          <Image
            src="/the_shepherd_cover_img.jpeg"
            width={550}
            height={600}
            className="relative border-orange-600 border-4 rounded-md shadow-orange-400 shadow-xl hidden md:block lg:hidden"
            alt="Cover art for 'The Shepherd - A Bronze Age Tale,' novel of a shepherd boy leading a flock of sheep down an arid looking hill."
          />
          <Image
            src="/the_shepherd_cover_img.jpeg"
            width={300}
            height={300}
            className="relative border-orange-600 border-4 rounded-md shadow-orange-400 shadow-xl hidden lg:block xl:hidden"
            alt="Cover art for 'The Shepherd - A Bronze Age Tale,' novel of a shepherd boy leading a flock of sheep down an arid looking hill."
          />
          <Image
            src="/the_shepherd_cover_img.jpeg"
            width={400}
            height={450}
            className="relative border-orange-600 border-4 rounded-md shadow-orange-400 shadow-xl hidden xl:block 2xl:hidden"
            alt="Cover art for 'The Shepherd - A Bronze Age Tale,' novel of a shepherd boy leading a flock of sheep down an arid looking hill."
          />
          <Image
            src="/the_shepherd_cover_img.jpeg"
            width={450}
            height={500}
            className="relative border-orange-600 border-4 rounded-md shadow-orange-400 shadow-xl hidden 2xl:block 4xl:hidden"
            alt="Cover art for 'The Shepherd - A Bronze Age Tale,' novel of a shepherd boy leading a flock of sheep down an arid looking hill."
          />
          <Image
            src="/the_shepherd_cover_img1.jpeg"
            width={500}
            height={550}
            className="relative border-orange-600 border-4 rounded-md shadow-orange-400 shadow-xl hidden 4xl:block"
            alt="Cover art for 'The Shepherd - A Bronze Age Tale,' novel of a shepherd boy leading a flock of sheep down an arid looking hill."
          />
          <Button
            className="bg-orange-700 rounded-md shadow-xl shadow-orange-500 text-orange-300 font-bold text-2xl text-center hover:scale-110 active:scale-100 px-4 py-2 border-4 border-orange-500
           cursor-pointer absolute z-10 left-28 
           bottom-[5.5rem]
           xs:bottom-[4rem] xs:left-[4.5rem]
           xs2:bottom-[4.5rem] xs2:left-[5rem]
           xs3:bottom-[4.8rem] xs3:left-[5.5rem]
           xs4:left-[6rem]
           xs5:bottom-[5.2rem]
           xs6:bottom-[5.5rem] xs6:left-[6.5rem]
           xs8:bottom-[6rem] xs8:left-[7.5rem]
           sm:bottom-[9rem] sm:left-48
           md:bottom-[9.5rem] md:left-52
           lg:bottom-[4.5rem] lg:left-20
           xl:bottom-[6.5rem] xl:left-32
           2xl:bottom-[7.5rem] 2xl:left-40
           3xl:bottom-[8rem] 3xl:left-40
           4xl:bottom-[8.5rem] 4xl:left-44
           5xl:bottom-[8.5rem] 5xl:left-44
           "
            onClick={() => {
              window.open(
                "https://www.amazon.com/Shepherd-Bronze-Age-Tale/dp/1592113842/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1682034884&sr=8-1",
                "_blank"
              );
            }}
          >
            Buy Now
          </Button>
        </div>
        <BookBox />
      </div>
    </div>
  );
}
