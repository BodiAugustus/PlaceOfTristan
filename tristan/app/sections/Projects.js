import Card from "../ui/card";

export default function Projects() {
  return (
    <div className="h-[100vh] w-[100vw] p-8">
      <h2 className="text-center text-5xl mb-10">Recent Projects</h2>
      <div className="flex gap-14 justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
