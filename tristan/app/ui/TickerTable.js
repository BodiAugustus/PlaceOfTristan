import Ticker from "../components/Ticker";

export default function TickerTable() {
  return (
    <div className="grid grid-cols-2 gap-3 bg-green-400 w-[30vw] h-[50vh] ">
      <Ticker />
      <Ticker />
      <Ticker />
      <Ticker />
      <Ticker />
      <Ticker />
    </div>
  );
}
