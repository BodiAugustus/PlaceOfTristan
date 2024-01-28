import ProjectCard from "../ui/ProjectCard";
import Card from "../ui/card";

export default function Projects() {
  return (
    <div
      className="  h-[100vh] w-[100vw] p-8
      
      "
    >
      <h2
        className="text-white text-center mb-6 text-5xl
    
      
      "
      >
        Featured Projects
      </h2>

      <div
        className="
      md:grid md:grid-cols-2
      lg:grid-cols-4 ml-10
      "
      >
        <ProjectCard />
      </div>
    </div>
    // <div className="h-[100vh] w-[100vw] p-8">
    //   <h2 className="text-center text-5xl mb-10">Recent Projects</h2>
    //   <div className="flex gap-14 justify-center">
    //     <Card />
    //     <Card />
    //     <Card />
    //     <Card />
    //   </div>
    // </div>
  );
}
