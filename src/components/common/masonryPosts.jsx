import { postcss } from "autoprefixer";
import React from "react";

const MasonryPost = ({ post, tagsOntop }) => {
  const style = {
    backgroundImage: `url("${require(`../../assets/images/${post.image}`)}")`,
  };

  return (
    <a className="masonry-post overlay" style={style} href={post.link}>
      <div className="image-text">
        <h2>{post.title}</h2>
      </div>
    </a>
  );
};

export default MasonryPost;
