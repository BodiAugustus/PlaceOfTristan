"use client";

import Ticker from "../components/Ticker";
import useSWR from "swr";

const fetcher = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Fetch failed with status: ${res.status}`);
    }

    const json = await res.json();
    return json.market_data.current_price.usd ?? null;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};

export const useCryptoData = (cryptoSymbol) => {
  const URL = `https://api.coingecko.com/api/v3/coins/${cryptoSymbol}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`;

  const { data, error } = useSWR(URL, fetcher, {
    refreshInterval: 1000000,
  });

  if (error) {
    console.error("Error in cryptoData:", error);
  }

  return { data, error };
};

export default function TickerTable() {
  const ftm = useCryptoData("fantom");
  const equal = useCryptoData("equalizer-dex");
  const solid = useCryptoData("solidlydex");
  const toka = useCryptoData("wen-4");
  const xmr = useCryptoData("monero");
  const xai = useCryptoData("xai-blockchain");

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
      <Ticker crypto={solid} symbol="SOLID" />
      <Ticker crypto={toka} symbol="TOKA" />
      <Ticker crypto={xmr} symbol="XMR" />
      <Ticker crypto={xai} symbol="XAI" />
      <Ticker crypto={xmr} symbol="XMR" />
      <Ticker crypto={xai} symbol="XAI" />
    </div>
  );
}
