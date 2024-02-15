import ProjectCard from "../ui/ProjectCard";
import Card from "../ui/card";

export default function Projects() {
  return (
    <div
      className="  h-[100vh] w-[100vw] md:p-8 max-w-[2200px] mx-auto
      xs:h-[295vh] xs:p-2
      xs3:h-[255vh]
      sm:h-[270vh]
      md:h-[262vh]
      lg:h-[100vh]
      
      "
    >
      <h2
        className="text-white text-center md:mb-6 
        xs:text-2xl xs:mb-1
        xs3:text-3xl
        xl:text-5xl xl:mb-1
        5xl:text-6xl
    
      
      "
      >
        Featured Projects
      </h2>

      <div
        className="
        xs:grid xs:grid-cols-1 xs:gap-8
        sm:gap-10
     md:grid-ols-1 md:gap-14
      lg:grid lg:grid-cols-3 
      2xl:grid-cols-4 2xl:gap-0
      
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
