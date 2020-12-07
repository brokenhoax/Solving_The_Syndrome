import React from "react";
import "../../styles/scss/masonryPost.scss";
import { categoryColors } from "./styles";

const MasonryPost = ({ post, tagsOntop }) => {
  const imageBackground = {
    overflow: `hidden`,
    backgroundImage: `url("${
      require(`../../assets/images/${post.image}`).default
    }")`,
  };

  const style = { ...imageBackground, ...post.style };

  return (
    <a
      className="masonry-post overlay rounded bg-clip-padding overflow-hidden"
      style={style}
      href={post.link}
    >
      <div className="image-text">
        <h2 className="image-title p-2 bg-gray-900 font-semibold">
          {post.title}
        </h2>
        <div className="p-1">
          {post.categories.map((tag, index) => (
            <span
              key={index}
              className="tag p-1 text-xs font-medium m-1 rounded"
              style={{ backgroundColor: categoryColors[tag] }}
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>
        <span className="image-date pl-2 text-white">{post.date}</span>
      </div>
    </a>
  );
};

export default MasonryPost;
