import React from "react";
import { MasonryPost } from "./";

const PostMasonry = ({ posts, columns, tagsOnTop }) => {
  return (
    <section
      className="masonry"
      style={{ gridTemplateColumns: `repeat(${columns}, minxmax(275px, 1fr))` }}
    >
      {posts.map((post, index) => (
        <MasonryPost {...{ post, index, tagsOnTop, key: index }} />
      ))}
    </section>
  );
};

export default PostMasonry;
