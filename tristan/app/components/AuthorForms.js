import EmailAuthorForm from "./EmailAuthorForm";
import GetNotified from "./GetNotifiedForm";

export default function AuthorForms() {
  return (
    <div className="bg-green-400 h-[60vh] w-[20vw]">
      <h4 className="text-center text-4xl">Get in Touch</h4>
      <EmailAuthorForm />
      <div>
        <GetNotified />
      </div>
    </div>
  );
}
