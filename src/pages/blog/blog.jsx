import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/scss/blog.scss";
import "../../styles/app.css";
import headshot from "../../assets/headshot.jpg";

const Blog = () => {
  const posts = [
    {
      title: "Dark Mode",
      date: "5-5-2021",
      length: {
        minutes: "5",
        seconds: "00",
      },
      icon: "fas fa-mug-hot",
      mugs: 1,
      tagline: "Dark mode is stupid easy.",
      path: "/blog/dark-mode",
    },
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

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?lang=js&amp;skin=desert";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section id="blog" className="flex justify-center items-center">
      <div className="container flex flex-col px-8">
        {/* Author Data */}
        <div className="flex items-center justify-start pt-16 md:pt-20 pb-6">
          <img src={headshot} className="rounded-full h-16 w-16" alt="Logo"></img>
          <div className="ml-4 font-semibold text-base">
            <div>Andrew Kraus</div>
            <div className="pb-0.5 text-red-400">@brokenhoax</div>
          </div>
        </div>
        {/* Posts */}
        <ul className="flex flex-col items-start">
          {posts.map((post, index) => (
            <li className="mb-2 w-full pt-8" key={index}>
              <Link
                to={post.path}
                className="min-w-full text-2xl md:text-4xl font-semibold hover:text-red-400"
              >
                {/* Title */}
                <div className="font-bold">{post.title}</div>
                <div className="flex items-center justify-between text-sm md:text-lg">
                  {/* Tagline */}
                  <div className="text-red-400">{post.tagline}</div>
                  {/* Minutes */}
                  <div className="flex items-center ">
                    <i className={`${post.icon} px-2`}></i>
                    <p>{post.length.minutes} Minutes</p>
                  </div>
                </div>
                <div className="text-sm font-semibold">
                  {post.date}
                </div>
              </Link>
              <hr className="mt-8 border-b border-gray-700"></hr>
            </li>
          ))}
          <li></li>
        </ul>
      </div>
    </section>
  );
};

export default Blog;
