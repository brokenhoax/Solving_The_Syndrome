import React from "react";
import trending from "../../mocks/trending";
import { PostMasonry } from "../../components/common";
import "../../styles/app.css";
import "../../styles/sassy.scss";

const Blog = () => {
  return (
    <section className="blog font-plex mt-16 mx-8 sm:mx-8 md:mx-16 xl:mx-64 sm:text-lg md:text-xl lg:text-2xl">
      <div className="row">
        <h2 className="header">Trending Posts</h2>
        <PostMasonry posts={trending} columns={3} />
      </div>
    </section>
  );
};

export default Blog;
