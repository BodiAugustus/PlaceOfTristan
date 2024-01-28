import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-[44vh] flex flex-col justify-center items-center text-2xl text-white  ">
      <Link
        href="#"
        className="neontext neonP  text-4xl  md:text-7xl lg:text-8xl cursor-pointer "
      >
        Tristan Nettles
      </Link>
      <div className=" w-full text-center translate-y-16  ">
        <p className=" text-sm ">Web3 Developer - DeFi Consultant - Author</p>
      </div>
    </footer>
  );
}
