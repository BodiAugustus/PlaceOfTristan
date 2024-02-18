require("dotenv").config(); // If you're using dotenv to manage your environment variables

const CHAIN_ID = process.env.NEXT_PUBLIC_TARGET_CHAIN_ID_PRODUCTION;

const NETWORKS = {
  //This is a mapping using the chainId
  1: "Ethereum Main Network",
  3: "Ropsten Test Network",
  4: "Rinkeby Test Network",
  5: "Goerli Test Network",
  42: "Kovan Test Network",
  56: "Binance Smart Chain",
  137: "Polygon",
  250: "Fantom Network",
  900: "Solana",
  1000: "Tron",
  1337: "Ganache",
  43114: "Avalanche",
  11155111: "Sepolia",
};

export default function HeroCard({
  userAddress,
  currentNetworkId,
  connectWallet,
}) {
  const currentNetwork = NETWORKS[currentNetworkId];

  const desiredNetwork = CHAIN_ID;
  const isCorrectNetwork = currentNetworkId === desiredNetwork;
  return (
    <div
      className="flex flex-col flex-1 items-center justify-start w-full h-[35vh] mx-auto 
      sm:pt-5
      md:pt-10
      lg:pt-0
     
      "
    >
      <div
        className={`p-3 justify-end items-start flex-col rounded-xl   
        xs:w-[90%] xs:h-[70%]
        xs:z-20 
        xs2:w-[95%] xs2:h-[80%] 
        xs6:h-[65%]
        sm:w-[80%] md:h-[70%] 
        lg:w-[75%] 
        xl:w-[72%]
        2xl:w-[70%]
        3xl:w-[65%] xl:h-[100%]
        5xl:w-[65%]
        ${
          isCorrectNetwork && userAddress ? "card-color" : "bg-custom-gradient2"
        }`}
      >
        <div className="flex justify-between flex-col w-full h-full">
          <div className="flex justify-between items-start">
            <div
              className="w-12 h-12 rounded-full border-2 border-white flex justify-center items-center text-white tracking-wide defi-card
                  sm:w-16 sm:h-16
                  md:w-20 md:h-20 
                  lg:w-14 lg:h-14 
                  2xl:w-16 2xl:h-16
                  4xl:w-16 4xl:h-16
                  5xl:w-20 5xl:h-20"
            >
              <h4
                className="md:text-xl
              5xl:text-2xl"
              >
                DeFi{" "}
              </h4>
            </div>

            {!isCorrectNetwork && (
              <div
                className="bg-red-400 px-2 w-[80%] sm:w-[70%] mx-2 rounded-lg text-white 
                sm:text-2xl 
                
                lg:w-[80%] lg:text-base lg:mb-2 
                xl:text-xl xl:p-2
              4xl:text-2xl"
              >
                <div>Wrong network,</div>
                <div>
                  Connect to: {` `}
                  {/* <strong>TEST</strong>{" "} */}
                  <strong>{NETWORKS[desiredNetwork]}</strong>{" "}
                </div>
              </div>
            )}

            {isCorrectNetwork && !userAddress && (
              <div
                className="bg-yellow-400 px-2 w-[80%] sm:w-[70%] mx-2 rounded-lg text-white 
                sm:text-2xl 
                lg:w-[80%] lg:text-base lg:mb-2 
                xl:text-xl xl:p-2
               4xl:text-2xl"
              >
                <div className="">Unconnected,</div>
                <div className="">
                  Connect to: {` `}
                  <strong className="">MetaMask</strong>{" "}
                  {/* Update as needed */}
                </div>
              </div>
            )}
            {isCorrectNetwork && userAddress && (
              <div
                className="bg-sky-400 px-2 w-[80%] sm:w-[70%] mx-2 rounded-lg text-white 
                sm:text-2xl 
                lg:w-[80%] lg:text-base lg:mb-2 
                xl:text-xl xl:p-2
               4xl:text-2xl"
              >
                <div className="">Welcome friend,</div>
                <div className="">
                  It's a beautiful day to {` `}
                  <strong className="">DeFi</strong>! {/* Update as needed */}
                </div>
              </div>
            )}

            {/* <div
              className="bg-red-400 px-2 w-[80%] sm:w-[70%] mx-2 rounded-lg text-white md:text-xl lg:w-[80%] lg:text-base lg:mb-2 xl:text-xl
            xl:p-2"
            >
              <div className="">Wrong network,</div>
              <div className="">
                Connect to: {` `}
                <strong className="">FNTOM</strong>
              </div>
            </div> */}
          </div>

          <div>
            {userAddress ? (
              <p
                className="text-white font-light text-sm text-center relative 
            xs:-top-4 sm:text-2xl
            ms:text-xl 
            md:text-2xl 
            lg:text-base 
            xl:text-xl xl:-top-10
            
            "
              >
                <strong className="4xl:text-3xl">
                  {" "}
                  Hello,{" "}
                  {`${userAddress.slice(0, 4)}...${userAddress.slice(38)}`}
                </strong>
              </p>
            ) : (
              <p
                className="text-white font-light text-sm text-center relative 
            sm:-top-4 sm:text-2xl
            ms:text-xl 
            md:text-2xl 
            lg:text-base 
            xl:text-xl xl:-top-10"
              >
                <strong className="4xl:text-3xl">Hello, Guest</strong>
              </p>
            )}
            {isCorrectNetwork ? (
              <p
                className="text-white font-medium text-md relative top-2 text-center ms:text-lg 
                md:text-2xl mt-0 
                lg:text-sm 
                xl:text-lg xl:top-3
              4xl:text-3xl 4xl:top-3
              5xl:top-2"
              >
                Currently on:{" "}
                <span
                  className="md:text-2xl 
                  lg:text-sm 
                  xl:text-xl text-white
                4xl:text-3xl"
                >
                  {currentNetwork}
                </span>
              </p>
            ) : (
              <p
                className="text-white font-medium text-md relative top-2 text-center ms:text-lg 
                md:text-2xl mt-0 
                lg:text-sm 
                xl:text-lg xl:top-3
              4xl:text-3xl 4xl:top-2"
              >
                Currently on:{" "}
                <span
                  className="md:text-xl lg:text-sm xl:text-xl text-white
                4xl:text-2xl 4xl:top-2"
                >
                  {isCorrectNetwork ? currentNetwork : currentNetwork}
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
