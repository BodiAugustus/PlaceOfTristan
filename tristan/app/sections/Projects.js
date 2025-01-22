import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <div
      id="projects"
      className="  h-[100vh] w-[100vw] md:p-8 max-w-[2200px] mx-auto
      custom-xs-448-projectSection xs:p-2
      custom-xs-640-projectSection
      custom-xs-660-projectSection
      custom-xs3-680-projectSection
      custom-xs4-550-projectSection 
      custom-xs5-670-projectSection
      custom-xs5-850-projectSection
      custom-xs6-650-projectSection
      custom-xs6-780-projectSection
      custom-xs8-810-projectSection
      sm:h-[270vh]
      md:h-[262vh]
      lg:h-[100vh]
      
      "
    >
      <h2
        className="text-white text-center md:mb-6 
        xs:text-2xl xs:mb-1
        xs3:text-3xl
        xl:text-5xl xl:mb-5 2xl:mb-3
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
