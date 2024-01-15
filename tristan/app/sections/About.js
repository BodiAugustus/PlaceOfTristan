import Bulletpoint from "../components/Bulletpoint";

export default function About() {
  return (
    <div className="h-[100vh] w-[100vw] p-4">
      <h2 className="text-5xl text-center">About Me</h2>
      <div className="flex justify-around items-center mt-20">
        <div className="bg-red-400 h-[50vh] w-[40vw] ">
          <p>IMG</p>
        </div>
        <div>
          <Bulletpoint />
          <Bulletpoint />
          <Bulletpoint />
          <Bulletpoint />
        </div>
      </div>
    </div>
  );
}
