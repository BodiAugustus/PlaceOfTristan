import { cryptoPrices } from "../ui/TickerTable";

export default function Ticker({ crypto, symbol }) {
  if (!crypto) {
    return <div>Loading...</div>;
  }
  return (
    <div
      className=" bg-[#01011d] text-white flex justify-around items-center
    xs:text-sm
    md:text-2xl
    lg:text-xl
    5xl:text-xl "
    >
      <h4>{symbol}</h4>
      <p>${crypto.data}</p>
    </div>
  );
}
