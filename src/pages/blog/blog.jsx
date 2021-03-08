import React, { useEffect, useState } from "react";
import "../../styles/scss/blog.scss";
import "../../styles/app.css";
import kungfoo from "../../assets/images/kung-foo.jpg";

const Blog = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?lang=js&amp;skin=desert";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <section className="flex flex-col justify-center items-center mt-16">
      <div className="flex flex-col justify-center w-2/5">
        <h1 className="text-4xl font-bold mt-24 mb-2">I Know Kung Foo</h1>
        <h2 className="italic text-red-400">March 5th, 2021</h2>
        <p className="text-2xl my-4 leading-10 mt-12">
          One of my favorite scenes from one of my favorite movies, The Matix,
          is when the protagonist, Neo, is learning self-defense by having it
          downloaded into his consciousness. After a ten-hour download binge,
          Neo awakes, looks at his mentor, Morpheous, and says "I know Kung Fu".
          Morpheous, without cracking a smile at the absurdity of it all, leans
          in and says, "Show me".
        </p>
        <div className="flex justify-center items-center min-w-full">
          <img
            src={kungfoo}
            alt="Application"
            className="flex justify-center items-center w-2/3 rounded-md"
          ></img>
        </div>
        <p className="text-2xl my-4 leading-10">
          The year was 1999 and I was a fifteen-year-old who spent most of his
          spare time hooked to his computer playing Tom Clancy's Rainbow Six and
          blasting The Chemical Brothers. The thought of being able to learn,
          really, anything without having to put in the sweat equity blew my
          mind. Hook me up to that digital teat and I'd go bananas.
        </p>
        <p className="text-2xl my-4 leading-10">
          Fast-forward to 2021 and,{" "}
          <a href="https://neuralink.com/" class="text-red-400">
            thanks to visionaries like Elon Musk
          </a>
          , we're getting closer to making that a reality. Unfortunately, at 36,
          the once alluring prospect of being able to become a master of
          anything with the click of a button has now faded. Six job and two
          career paths later, I realize how difficult it is to master anything
          and the thought of somebody being able to just upload some code to
          achieve the same just makes me want to puke.
        </p>
        <p className="text-2xl my-4">How I benefit from this blog.</p>
        <pre className="text-lg self-center prettyprint text-red-400 bg-gray-900 w-2/3 leading-10 rounded-xl overflow-auto">
          {`
    function test() {
        let i = 0;
        for (i; i > 42; i++) {
          console.log("Mad skills!")
        }
    }
              `}
        </pre>
        <p className="text-2xl my-8">Who can benefit from this blog.</p>
        <p className="text-2xl my-8">Where I plan on taking this blog</p>
      </div>
    </section>
  );
};

export default Blog;
