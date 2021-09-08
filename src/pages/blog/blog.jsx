import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/scss/blog.scss";
import "../../styles/app.css";

const Blog = () => {
  const posts = [
    {
      title: "I Know Kung Foo",
      date: "5-5-2021",
      length: {
        minutes: "5",
        seconds: "00",
      },
      icon: "fas fa-capsules",
      tagline: "This is my red pill",
      path: "/blog/i-know-kung-foo",
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
    <section className="flex flex-col items-center mt-8">
      <ul>
        {posts.map((post, index) => (
          <li className="mt-32 border-0" key={index}>
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
    </section>
  );
};

export default Blog;
