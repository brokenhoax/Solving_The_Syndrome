import React from "react";
import { MasonryPost } from "./";
import "../../styles/scss/postMasonry.scss";

const PostMasonry = ({ posts, columns, tagsOnTop }) => {
  const style = {
    gridTemplateColumns: `repeat(${columns}, minxmax(275px, 1fr))`,
  };

  return (
    <section style={style} className="masonry flex flex-wrap justify-center ">
      {posts.map((post, index) => (
        <MasonryPost {...{ post, index, tagsOnTop, key: index }} />
      ))}
    </section>
  );
};

export default PostMasonry;
