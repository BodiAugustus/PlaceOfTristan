"use client";

import { Button } from "../ui/Button";
import { createMessage } from "../lib/actions";
import { useState } from "react";

export default function EmailAuthorForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div>
      <h5 className="text-center text-2xl">Send me a message:</h5>
      <form
        action={createMessage}
        className="flex flex-col text-center mb-5 p-4 "
      >
        <div className="flex flex-col items-center gap-5">
          <div className="flex gap-5 justify-center">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" />
          </div>
          <div className="flex gap-5 justify-center ">
            <label htmlFor="message">Message</label>
            <input
              id="message"
              name="message"
              type="text"
              minLength={3}
              maxLength={2200}
            />
          </div>
          <Button
            className="bg-[#00bfff] w-[30%] px-4 py-2 hover:scale-105 hover:bg-sky-600 active:scale-100 active:bg-[#00bfff]
          text-lg"
          >
            submit
          </Button>
        </div>
      </form>
    </div>
  );
}
