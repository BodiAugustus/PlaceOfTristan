"use client";

import { Button } from "../ui/Button";
import { createMessage } from "../lib/actions";

export default function EmailAuthorForm() {
  return (
    <div>
      <h5
        className="text-center text-2xl
        md:text-3xl md:mb-5
        lg:text-2xl lg:mb-0
      5xl:text-3xl
      "
      >
        Send me a message:
      </h5>
      <form
        action={createMessage}
        className="flex flex-col text-center mb-5 p-4  "
      >
        <div
          className="flex flex-col items-start gap-3 justify-start
          md:gap-10
          lg:gap-3
          3xl:gap-5
        5xl:gap-7 
        "
        >
          <div
            className="flex flex-col gap-1 justify-start items-start   w-[100%]
          5xl:w-[82%]
          "
          >
            <label
              htmlFor="email"
              className="text-xl 
            5xl:text-2xl
            "
            >
              Email:
            </label>
            <input
              className="text-[#01011d] w-[100%] rounded-md indent-1
              5xl:text-xl 5xl:w-[50%] "
              id="email"
              name="email"
              type="email"
              placeholder="Your email address here..."
            />
          </div>
          <div
            className="flex flex-col gap-1 justify-start items-start xs:w-[100%] 
            md:w-[75%]
            lg:w-[100%]
            3xl:w-[91%]
            4xl:w-[83%]
          5xl:w-[80%]
          "
          >
            <label
              htmlFor="message"
              className="text-xl
            5xl:text-2xl
            "
            >
              Message:
            </label>
            <textarea
              className="rounded-md indent-1 text-[#01011d] resize-none
              w-[100%] 
               5xl:text-xl
              "
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
            <label
              className="px-2 
              md:px-6
              lg:px-2
            5xl:text-xl 5xl:px-6
            "
            >
              Check the box if you would like to be notified about upcoming
              releases.
            </label>
            <label
              className="custom-checkbox
            5xl:-mb-2
            "
            >
              <input name="emailList" id="emailList" type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
          <Button
            className="bg-sky-800 w-[30%] px-4 py-2 hover:scale-105 hover:bg-sky-600 active:scale-100 active:bg-[#00bfff] h-12
          text-lg mx-auto border-4 border-white
          xs:w-[43%]
          xs4:w-[38%]
          xs5:w-[36%]
          xs6:w-[36%]
          xs8:w-[33%]
          sm:w-[22%]
          md:w-[19%]
          lg:w-[45%]
          xl:w-[35%]
          2xl:w-[30%]
          4xl:w-[24%]
          5xl:text-2xl 5xl:w-[20%] 
          "
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
