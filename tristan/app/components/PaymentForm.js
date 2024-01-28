import { Button } from "../ui/Button";

export default function PaymentForm() {
  return (
    <form className="bg-[#01011d] h-[50vh] w-[28vw] flex flex-col items-center justify-around   text-white p-2">
      <div className="flex flex-col items-center">
        <h3 className="text-3xl pb-2">Want to make a payment?</h3>
        <h4 className="p-2">
          <span className="text-yellow-400">WARNING:</span> Only{" "}
          <span className="text-sky-400">FTM</span> is accepted!
        </h4>
        <p className="text-center pt-2 px-2">
          Just enter in the amount you wish to pay and click send. The funds
          will automatically be sent to the correct wallet address on the Fantom
          Blockchain!
        </p>
      </div>
      <div className="flex flex-col items-center gap-6  ">
        <div>
          <label>Amount: </label>
          <input />
        </div>

        <Button className="bg-sky-800 px-4 py-2 hover:scale-105 hover:bg-sky-600 active:bg-sky-400 active:scale-100">
          Send FTM
        </Button>
      </div>
    </form>
  );
}
