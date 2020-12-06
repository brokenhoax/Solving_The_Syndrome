import React from "react";
import trending from "../../mocks/trending";
import { PostMasonry } from "../../components/common";
import "../../styles/app.css";
import "../../styles/scss/blog.scss";

const trendingConfig = {
  1: {
    gridArea: "1 / 2 / 3 / 3",
  },
};

const mergeStyles = function (posts, config) {
  posts.forEach((post, index) => {
    post.style = config[index];
  });
};

mergeStyles(trending, trendingConfig);

const Blog = () => {
  return (
    <section className="font-plex mt-16 mx-8 sm:mx-8 md:mx-16 xl:mx-64 sm:text-lg md:text-xl lg:text-2xl">
      <div>
        <h2 className="header">Trending Posts</h2>
        <PostMasonry posts={trending} columns={3} />
      </div>
    </section>
  );
};

export default Blog;
