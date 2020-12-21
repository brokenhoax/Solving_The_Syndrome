import React from "react";
import { MasonryPost } from "./";
import "../../styles/scss/postMasonry.scss";

const PostMasonry = ({ posts, columns, tagsOnTop }) => {
  const style = {
    gridTemplateColumns: `repeat(${columns}, minxmax(275px, 1fr))`,
  };

  return (
    <section className="mt-4 masonry" style={style}>
      {posts.map((post, index) => (
        <MasonryPost {...{ post, index, tagsOnTop, key: index }} />
      ))}
    </section>
  );
};

export default PostMasonry;
