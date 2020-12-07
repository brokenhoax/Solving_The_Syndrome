import React from "react";
import trending from "../../mocks/trending";
import featured from "../../mocks/featured";
import { PostMasonry, MasonryPost } from "../../components/common";
import "../../styles/app.css";
import "../../styles/scss/blog.scss";

const lastFeatured = featured.pop();

const Blog = () => {
  return (
    <section className="container font-plex">
      <div>
        <section className="flex flex-col mt-8">
          <PostMasonry posts={featured} tagsOnTop={true} />
        </section>
      </div>
    </section>
  );
};

export default Blog;
