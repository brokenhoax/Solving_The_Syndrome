import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/scss/blog.scss";
import "../../styles/app.css";
import headshot from "../../assets/headshot.png";

const Blog = () => {
  const posts = [
    {
      title: "I Know Kung Foo",
      date: "5-5-2021",
      length: {
        minutes: "5",
        seconds: "00",
      },
      icon: "fas fa-mug-hot",
      tagline: "This is my red pill",
      path: "/blog/i-know-kung-foo",
    },
    {
      title: "Ready Set Go",
      date: "6-3-2021",
      length: {
        minutes: "10",
        seconds: "00",
      },
      icon: "fas fa-mug-hot",
      tagline: "You gontta start somewhere.",
      path: "/blog/ready-set-go",
    },
  ];

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?lang=js&amp;skin=desert";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <section className="flex items-center justify-center mt-32">
      <div className="inline-flex flex-col items-center space-x-4">
        <div className="inline-flex items-center w-full pb-6 ml-8">
          <img src={headshot} class="rounded-full h-16" alt="Logo"></img>
          <div className="ml-4 font-semibold text-base">
            <div>Andrew Kraus</div>
            <div className="pb-0.5 text-red-400">@brokenhoax</div>
          </div>
        </div>
        <ul>
          {posts.map((post, index) => (
            <li className="border-0 mt-6" key={index}>
              <Link
                to={post.path}
                className="text-4xl font-semibold text-red-400 hover:text-white"
              >
                {post.title}
              </Link>
              <div className="leading-7">
                <div className="flex items-center">
                  <div className="text-lg text-red-400">{post.tagline}</div>
                  <i className={`${post.icon} px-2 text-gray-400`}></i>
                  <p className="text-red-400">{post.length.minutes} Minutes</p>
                </div>
                <div className="text-sm text-gray-400 font-semibold">
                  {post.date}
                </div>
              </div>
            </li>
          ))}
          <li></li>
        </ul>
      </div>
    </section>
  );
};

export default Blog;
