import { Button } from "../ui/Button";

export default function GetNotified() {
  return (
    <div>
      <h5 className="text-center text-2xl">
        Stay Informed about upcoming releases
      </h5>
      <form className="flex flex-col text-center mb-5 p-4">
        <div className="flex flex-col items-center gap-5">
          <div className="flex gap-5 justify-center">
            <label>Email</label>
            <input className="" />
          </div>
          <Button
            className="bg-[#00bfff] w-[30%] px-4 py-2 hover:scale-105 hover:bg-sky-600 active:scale-100 active:bg-[#00bfff]
          text-lg"
          >
            submit
          </Button>
        </div>
      </form>
    </div>
  );
}
