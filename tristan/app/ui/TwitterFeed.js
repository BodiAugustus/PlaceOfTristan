"use client";

import { useEffect } from "react";

const TwitterFeed = () => {
  useEffect(() => {
    const scriptId = "twitter-wjs";
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;

    window.twttr = (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
      if (d.getElementById(id)) return t;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);

      t._e = [];
      t.ready = function (f) {
        t._e.push(f);
      };

      return t;
    })(document, "script", "twitter-wjs");

    if (window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load();
    }

    return () => {
      if (window.twttr && window.twttr.widgets) {
        let script = document.getElementById(scriptId);
        if (script) {
          document.body.removeChild(script);
        }
      }
    };
  }, []);

  // useEffect(() => {
  //   // Ensure this code runs only in the browser

  //   const script = document.createElement("script");
  //   script.src = "https://platform.twitter.com/widgets.js";
  //   script.async = true;

  //   // Insert the script in the DOM
  //   document.body.appendChild(script);

  //   return () => {
  //     // Cleanup the script when the component unmounts
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <div
      className="twitter-feed-container
     overflow-y-scroll div-scrollbar bg-white
     xs:w-[80vw] xs:h-[80vh]
     xs4:h-[65vh]
     sm:w-[75vw]
     lg:w-[28vw]
     5xl:w-[28vw]"
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
