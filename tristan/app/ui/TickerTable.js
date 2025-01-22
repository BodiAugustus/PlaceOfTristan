"use client";

import useSWR from "swr";
import Ticker from "../components/Ticker";

// Updated fetcher for Dex Screener
const fetcher = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Fetch failed with status: ${res.status}`);
    }

    const json = await res.json();
    // Assuming the first pair is the one you're interested in.

    const priceUsd = json.pairs[0]?.priceUsd;
    return priceUsd ? parseFloat(priceUsd).toFixed(4) : null;
  } catch (error) {
    console.error("Error fetching data from Dex Screener", error);
    return null; // Return null or appropriate fallback
  }
};

// Hook to fetch crypto data from Dex Screener
export const useCryptoData = (tokenAddress) => {
  // Construct the URL using the token address
  const URL = `https://api.dexscreener.com/latest/dex/tokens/${tokenAddress}`;

  const { data, error } = useSWR(URL, fetcher, {
    refreshInterval: 10000, // Adjust the interval as needed
  });

  if (error) {
    console.error("Error in useCryptoData:", error);
  }

  return { data, error };
};

export default function TickerTable() {
  const ftm = useCryptoData("0x4E15361FD6b4BB609Fa63C81A2be19d873717870");
  const equal = useCryptoData("0x3Fd3A0c85B70754eFc07aC9Ac0cbBDCe664865A6");
  const wigo = useCryptoData("0xE992bEAb6659BFF447893641A378FbbF031C5bD6");
  const beets = useCryptoData("0xF24Bcf4d1e507740041C9cFd2DddB29585aDCe1e");
  const brush = useCryptoData("0x85dec8c4B2680793661bCA91a8F129607571863d");
  const gmftm = useCryptoData("0x454d4BaE7c2adab588d837aFF4Db16Db19d46A33");
  const kirby = useCryptoData("0x97bdAfe3830734acF12Da25359674277fcc33729");
  const boo = useCryptoData("0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE");

  return (
    <div
      className="grid grid-cols-2  bg-sky-800 w-[28vw] h-[50vh] p-2 rounded
      xs:w-[80vw]
      sm:w-[75vw]
      lg:w-[28vw]
      xl:h-[65vh]
      2xl:h-[60vh]
    5xl:w-[28vw]
    "
    >
      <Ticker crypto={ftm} symbol="FTM" />
      <Ticker crypto={equal} symbol="EQUAL" />
      <Ticker crypto={wigo} symbol="WIGO" />
      <Ticker crypto={beets} symbol="BEETS" />
      <Ticker crypto={brush} symbol="BRUSH" />
      <Ticker crypto={gmftm} symbol="GMFTM" />
      <Ticker crypto={kirby} symbol="KIRBY" />
      <Ticker crypto={boo} symbol="BOO" />
    </div>
  );
}

// import Ticker from "../components/Ticker";
// import useSWR from "swr";

// const fetcher = async (url) => {
//   try {
//     const res = await fetch(url);

//     if (!res.ok) {
//       throw new Error(`Fetch failed with status: ${res.status}`);
//     }

//     const json = await res.json();
//     return json.market_data.current_price.usd ?? null;
//   } catch (error) {
//     console.error("Error fetching data", error);
//   }
// };

// export const useCryptoData = (cryptoSymbol) => {
//   const URL = `https://api.coingecko.com/api/v3/coins/${cryptoSymbol}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`;

//   const { data, error } = useSWR(URL, fetcher, {
//     refreshInterval: 1000000,
//   });

//   if (error) {
//     console.error("Error in cryptoData:", error);
//   }

//   return { data, error };
// };

// export default function TickerTable() {
//   const ftm = useCryptoData("fantom");
//   const equal = useCryptoData("equalizer-dex");
//   const solid = useCryptoData("solidlydex");
//   const toka = useCryptoData("wen-4");
//   const xmr = useCryptoData("monero");
//   const xai = useCryptoData("xai-blockchain");
//   const btc = useCryptoData("bitcoin");
//   const eth = useCryptoData("ethereum");

//   return (
//     <div
//       className="grid grid-cols-2  bg-sky-800 w-[28vw] h-[50vh] p-2 rounded
//       xs:w-[80vw]
//       sm:w-[75vw]
//       lg:w-[28vw]
//       xl:h-[65vh]
//       2xl:h-[60vh]
//     5xl:w-[28vw]
//     "
//     >
//       <Ticker crypto={ftm} symbol="FTM" />
//       <Ticker crypto={equal} symbol="EQUAL" />
//       <Ticker crypto={solid} symbol="SOLID" />
//       <Ticker crypto={toka} symbol="TOKA" />
//       <Ticker crypto={xmr} symbol="XMR" />
//       <Ticker crypto={xai} symbol="XAI" />
//       <Ticker crypto={btc} symbol="BTC" />
//       <Ticker crypto={eth} symbol="ETH" />
//     </div>
//   );
// }
