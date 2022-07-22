import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/scss/blog.scss";
import "../../styles/app.css";
import headshot from "../../assets/headshot.png";

const Blog = () => {
  const posts = [
    {
      title: "React Components",
      date: "5-5-2021",
      length: {
        minutes: "5",
        seconds: "00",
      },
      icon: "fas fa-mug-hot",
      mugs: 1,
      tagline: "DRY your code with React components.",
      path: "/blog/react-components",
    },
    {
      title: "Figma Slider",
      date: "7-14-2022",
      length: {
        minutes: "15",
        seconds: "00",
      },
      icon: "fas fa-mug-hot",
      mugs: 3,
      tagline: "Create a slider in Figma.",
      path: "/blog/figma-slider",
    },
    {
      title: "Ready Set Go",
      date: "6-3-2021",
      length: {
        minutes: "10",
        seconds: "00",
      },
      icon: "fas fa-mug-hot",
      mugs: 2,
      tagline: "You gotta start somewhere.",
      path: "/blog/ready-set-go",
    },
  ];

  const test = () => {
    let i;
    let n = 2;
    [...Array(n)].map((elementInArray, index) => (
      <div className="" key={i}>
        {" "}
        Whatever needs to be rendered repeatedly{" "}
      </div>
    ));
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?lang=js&amp;skin=desert";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <section className="flex items-center justify-center min-w-full">
      <div className="flex flex-col w-full md:w-700 px-8">
        {/* Author Data */}
        <div className="flex items-center w-full pt-16 md:pt-20 pb-6">
          <img src={headshot} className="rounded-full h-16" alt="Logo"></img>
          <div className="ml-4 font-semibold text-base">
            <div>Andrew Kraus</div>
            <div className="pb-0.5 text-red-400">@brokenhoax</div>
          </div>
        </div>
        {/* Posts */}
        <ul className="flex flex-col items-start mt-4">
          {posts.map((post, index) => (
            <li className="mb-2 w-full" key={index}>
              <Link
                to={post.path}
                className="text-2xl md:text-4xl font-semibold text-red-400 hover:text-white"
              >
                {post.title}
              </Link>
              <div className="leading-7">
                <div className="flex items-center justify-between text-red-400 text-sm md:text-lg">
                  <div>{post.tagline}</div>
                  <div className="flex items-center">
                    <i className={`${post.icon} px-2 text-gray-400`}></i>
                    <p>{post.length.minutes} Minutes</p>
                  </div>
                </div>
                <div className="text-sm text-gray-400 font-semibold">
                  {post.date}
                </div>
              </div>
              <hr className="mt-4 border-b border-gray-200 border-dotted"></hr>
            </li>
          ))}
          <li></li>
        </ul>
      </div>
    </section>
  );
};

export default Blog;
