export default function Hero() {
  return (
    <div className="w-[100vw] h-[88vh]">
      <div className="flex justify-around items-center pt-10">
        <div className="  text-center ">
          <div className="bg-red-400 mb-8">
            <h1 className="text-7xl">Tristan Nettles</h1>
            <h2 className="text-5xl">Full Stack Web3 Developer</h2>

            <h2 className="text-5xl">DeFi Consultant</h2>
            <h2 className="text-5xl">Published Author</h2>
          </div>
          <div className="bg-yellow-400 h-[30vh] flex flex-col justify-center items-center">
            <div className="">
              <h2>DeFi</h2>
              <h2>Hello, Not Connected - Connect to MetaMask</h2>
              <h2> Currently on Fantom Network</h2>
            </div>
          </div>
        </div>

        <div className="bg-red-400 h-[75vh] w-[40vw]">
          <h2 className="h-[100%] w-[100%]">pic</h2>
        </div>
      </div>
    </div>
  );
}
