import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="custom-xs-448-footer
    custom-xs-640-footer flex flex-col justify-center items-center text-2xl text-white
    custom-xs3-680-footer
    custom-xs5-850-footer
    custom-xs6-780-footer  "
    >
      <Link
        href="#"
        className="neontext neonP  xs:text-4xl
        xs4:text-4xl  md:text-7xl lg:text-8xl cursor-pointer "
      >
        Tristan Nettles
      </Link>
      <div
        className=" w-full text-center 
      xs:translate-y-12
      xs3:translate-y-16
      xs5:translate-y-20
      sm:translate-y-16  "
      >
        <p
          className=" text-sm 
        4xl:text-lg 
        "
        >
          Web3 Developer - DeFi Consultant - Author
        </p>
      </div>
    </footer>
  );
}
