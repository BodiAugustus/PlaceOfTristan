import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-[44vh] flex flex-col justify-center items-center text-2xl text-white  ">
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
