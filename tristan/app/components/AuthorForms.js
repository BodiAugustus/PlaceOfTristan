import EmailAuthorForm from "./EmailAuthorForm";

export default function AuthorForms() {
  return (
    <div
      className="bg-[#01011d] h-[65vh] border-4 border-sky-400 rounded-md text-white p-2
      xs:w-[85vw] custom-xs-448-authorSectionContainerForm
      custom-xs-640-authorSectionContainerForm
      custom-xs4-660-authorSectionContainerForm
      custom-xs4-550-authorSectionContainerForm
      xs5:h-[70vh]
      xs6:h-[65vh]
      xs8:h-[70vh]
      sm:w-[75vw] 
      md:w-[75vw] md:h-[50vh]
      lg:w-[25vw]
      xl:h-[90vh]
      2xl:h-[75vh]
      5xl:w-[28vw]
    "
    >
      <div
        className="bg-sky-900 rounded-md h-full
      "
      >
        <h4
          className="text-center xs:text-2xl mb-0 p-4
          sm:pt-8
          md:pt-12 md:text-5xl
          lg:pt-8 lg:text-4xl
          xl:pt-4
          3xl:pt-16
          5xl:text-5xl 4xl:pt-20
        "
        >
          Contact Me
        </h4>
        <EmailAuthorForm />
      </div>
    </div>
  );
}
