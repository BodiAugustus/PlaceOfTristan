import PaymentForm from "../components/PaymentForm";
import Story from "../components/Story";
import TickerTable from "../ui/TickerTable";

export default function DeFi() {
  return (
    <div className="h-[100vh] w-[100vw] p-8">
      <h2 className="text-center text-5xl">DeFi section</h2>
      <div className="bg-red-400 flex justify-around items-center h-[80vh]">
        <div>
          <h3 className="text-center text-4xl">Payments</h3>
          <PaymentForm />
        </div>
        <div className="bg-green-400 ">
          <h3 className="text-center text-4xl">News</h3>
          <div>
            <Story />
            <Story />
            <Story />
            <Story />
          </div>
        </div>
        <div>
          <h3 className="text-center text-4xl">Hot Tickers</h3>
          <TickerTable />
        </div>
      </div>
    </div>
  );
}
