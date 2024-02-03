"use client";

import { Button } from "../ui/Button";
import { createMessage } from "../lib/actions";

export default function EmailAuthorForm() {
  return (
    <div>
      <h5 className="text-center text-2xl">Send me a message:</h5>
      <form
        action={createMessage}
        className="flex flex-col text-center mb-5 p-4 "
      >
        <div className="flex flex-col items-start gap-4 justify-start">
          <div className="flex gap-8  w-[100%]">
            <label htmlFor="email" className="text-xl">
              Email:
            </label>
            <input
              className="text-black w-[60%] rounded-md indent-1"
              id="email"
              name="email"
              type="email"
              placeholder="Your email here..."
            />
          </div>
          <div className="flex gap-1  w-[100%] ">
            <label htmlFor="message" className="text-xl">
              Message:
            </label>
            <textarea
              className="rounded-md indent-1 text-black resize-none"
              name="message"
              id="message"
              required
              minLength={3}
              maxLength={2200}
              rows={5}
              cols={22}
              placeholder="Your message here..."
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <label className="px-2 ">
              Check the box if you would like to be notified about upcoming
              releases.
            </label>
            <label class="custom-checkbox">
              <input name="emailList" id="emailList" type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>
          <Button
            className="bg-sky-800 w-[30%] px-4 py-2 hover:scale-105 hover:bg-sky-600 active:scale-100 active:bg-[#00bfff]
          text-lg mx-auto border-4 border-white"
          >
            submit
          </Button>
        </div>
      </form>
    </div>
  );
}
