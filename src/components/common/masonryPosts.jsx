import React from "react";
import "../../styles/scss/masonryPost.scss";
import { categoryColors } from "./styles";

const MasonryPost = ({ post, tagsOntop }) => {
  const imageBackground = {
    backgroundImage: `url("${
      require(`../../assets/images/${post.image}`).default
    }")`,
  };

  const style = { ...imageBackground, ...post.style };

  return (
    <a className="masonry-post overlay" style={style} href={post.link}>
      <div className="flex flex-col image-text h-full w-full p-1 border-box">
        <div className="tags-container">
          {post.categories.map((tag, index) => (
            <span
              key={index}
              className="tag"
              style={{ backgroundColor: categoryColors[tag] }}
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>
        <h2 className="image-title pl-2 w-full bg-gray-900">{post.title}</h2>
        <span className="image-date pl-2">{post.date}</span>
      </div>
    </a>
  );
};

export default MasonryPost;
