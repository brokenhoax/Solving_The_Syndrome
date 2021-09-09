import React, { useEffect, useState } from "react";
import "../../styles/scss/blog.scss";
import "../../styles/app.css";
import kungfoo from "../../assets/images/kung-foo.jpg";

const CleanCode = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?lang=js&amp;skin=desert";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <section className="flex flex-col items-center mt-8">
      <div className="w-1/3">
        <h1 className="self-center text-4xl font-bold mt-24 mb-2">
          I Know Kung Foo
        </h1>
        <h2 className="italic text-red-400">March 5th, 2021</h2>
        <p className="text-xl my-8 leading-10 mt-12">
          One of my favorite scenes from one of my favorite movies, The Matix,
          is when the protagonist, Neo, is learning Kung Fu by downloading it to
          his consciousness. After a ten-hour download binge, Neo awakes, looks
          at his mentor, Morpheous, and says "I know Kung Fu". Morpheous,
          without cracking a smile, leans in and says, "Show me".
        </p>
        <div className="flex flex-col items-center">
          <img
            src={kungfoo}
            alt="Application"
            className="w-3/5 rounded-lg"
          ></img>
        </div>
        <p className="text-xl my-8 leading-10">
          The year was 1999 and I was a fifteen-year-old who spent most of his
          spare time hooked to his computer terrorizing chat rooms and trying to
          squeeze every last drip of RAM out of my PC so I could play Tom
          Clancy's Rainbow Six. The thought of being able to learn anything
          without having to put in the sweat equity blew my mind. Hook me up to
          that digital teat and I'd go bananas.
        </p>
        <p className="text-xl my-8 leading-10">
          Fast-forward to 2021, and
          <a href="https://neuralink.com/" class="text-red-400">
            {" "}
            we're getting closer to making that a reality.
          </a>{" "}
          I never would have thought that, by age 36, the idea of somebody being
          able to just download some code to achieve a life's work would make me
          want to puke. Think about a world where anybody could be whatever they
          wanted to be without having to actually earn their way. Who would we
          look up to anymore? What would we strive for and why would we even
          try? In the Matrix, what makes Neo superior to his enemy is his
          anomoly or, as others might say, his God-given ability. He's the oNe.
          What does that make everyone else?
        </p>
        <p className="text-xl my-8 leading-10">
          Thankfully, like Neo, most of us are given a choice in life. Take the
          blue pill, and play it safe, or take the red pill, and step into the
          unknown. There's nothing unknown about a world where anyone can be
          anything. Every challenge, every adventure would be as thrilling as
          tic-tac-toe.
        </p>
        <div className="flex flex-col items-center">
          <pre className="w-full text-sm prettyprint text-red-400 bg-gray-900 leading-10 rounded-lg overflow-auto">
            {`
    function life() {
        let chance = Math.floor(Math.random() * 10) + 1;
        if ( chance > 5 ) {
          return console.log ("You live!") 
        } else {
          return console.log ("You die!")
        }
    }
              `}
          </pre>
        </div>
        <p className="text-xl my-8 leading-10">
          Herein lies the philosophy behind "Solving the Syndrome". This is my
          red pill. This is a place where I will venture into the unknown. Along
          the way, I hope to learn and grow and overcome my biggest fear. My
          biggest fear is not living up to my own potential. I'm okay with
          knowing my potential is limited, but I'm not okay with never finding
          my limit. I think that's where I'm fortunate. I could be comfortable
          but I wouldn't be well. I could be happy but I wouldn't be satisfied.
        </p>
        <p className="text-xl my-8 leading-10">
          This blog is dual purpose. Over the past year, I've learned to code
          and have been fortunate enough to land my first developer job with a
          start-up out of Chicago. In a way, Cypher was right when he said
          "Ignorance is bliss". It seems that the more I learn, the more I
          realize how little I know. This blog will serve as a reminder to me of
          how far I've come and it is meant to serve others as well. There's
          limitless resources available that can help you learn to code;
          however, I have yet to find one that chronicles how and what one
          learns to code as they learn. In time, I hope to look back on my
          earlier posts and admire my naivety and enthusiasm. I hope you do,
          too.
        </p>
      </div>
    </section>
  );
};

export default CleanCode;
