import React from "react";
import { TagRow } from "./";
import "../../styles/scss/masonryPost.scss";

export default function MasonaryPost({ post, tagsOntop }) {
  const imageBackground = {
    backgroundPosition: `left top`,
    borderRadius: `15px`,
    padding: "2px",
    backgroundImage: `url("${
      require(`../../assets/images/${post.image}`).default
    }")`,
  };

  const style = { ...imageBackground, ...post.style, ...post.style };

  return (
    <main className="masonry-post bg-clip-content" style={style}>
      <a href={post.link} className="bg-light-blue-600 bg-opacity-50">
        <div className="image-text">
          <h2 className="p-2 bg-blue-800 bg-opacity-50 font-semibold">
            {post.title}
          </h2>
          <span className="image-date pl-2 text-white">{post.date}</span>
          <TagRow tags={post.categories} />
        </div>
      </a>
    </main>
  );
}
