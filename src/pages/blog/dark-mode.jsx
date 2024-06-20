import React, { useEffect } from "react";
import "../../styles/scss/blog.scss";
import "../../styles/app.css";
import kungfoo from "../../assets/images/kung-foo.jpg";

const DarkMode = () => {
  return (
    <section className="flex flex-col items-center mt-8">
      <div className="w-1/3">
        <h1 className="self-center text-5xl font-bold mt-24 mb-2">
          Dark Mode is Stupid Easy
        </h1>
        <h2 className="italic text-red-400">June 20th, 2024</h2>
        <p className="text-xl my-8 leading-10 mt-12">
          ...
        </p>
      </div>
    </section>
  );
};

export default DarkMode;
