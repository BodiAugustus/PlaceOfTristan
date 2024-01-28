"use client";

import { useEffect } from "react";

const TwitterFeed = () => {
  useEffect(() => {
    // Ensure this code runs only in the browser

    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;

    // Insert the script in the DOM
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="twitter-feed-container
     h-[50vh] w-[28vw] overflow-y-scroll bg-white"
    >
      <a
        className="twitter-timeline"
        href="https://twitter.com/tristan_nettles?ref_src=twsrc%5Etfw"
      >
        Tweets by tristan_nettles
      </a>{" "}
    </div>
  );
};

export default TwitterFeed;
