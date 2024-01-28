import EmailAuthorForm from "./EmailAuthorForm";
import GetNotified from "./GetNotifiedForm";

export default function AuthorForms() {
  return (
    <div className="bg-[#01011d] h-[65vh] w-[25vw] border-4 border-white rounded-md text-white p-2">
      <div className="bg-sky-900 rounded-md h-full">
        <h4 className="text-center text-4xl mb-0 p-4">Contact Me</h4>
        <EmailAuthorForm />
        <div>
          <GetNotified />
        </div>
      </div>
    </div>
  );
}
