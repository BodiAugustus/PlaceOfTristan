export default function PaymentForm() {
  return (
    <form className="bg-green-400 h-[50vh] w-[20vw] flex flex-col items-center justify-around ">
      <h4>Need to make a payment?</h4>
      <div className="flex flex-col items-center">
        <label>Name</label>
        <input />
        <hr />
        <button>Submit</button>
      </div>
    </form>
  );
}
