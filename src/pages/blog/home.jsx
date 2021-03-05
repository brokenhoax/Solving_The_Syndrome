import React from "react";
import { featured } from "../../mocks/featured";
import { trending } from "../../mocks/trending";
import { PostMasonry, MasonryPost, PostGrid } from "../../components/common";
import "../../styles/app.css";
import "../../styles/scss/home.scss";

const trendingConfig = {
  0: {
    gridArea: "1 / 1/ 2 / 3",
    height: "300px",
  },
  1: {
    height: "300px",
  },
  3: {
    height: "630px",
    marginLeft: "30px",
    width: "630px",
  },
};

const featuredConfig = {
  0: {
    gridArea: "1 / 1/ 2 / 3",
    height: "300px",
  },
  1: {
    height: "300px",
  },
  3: {
    height: "630px",
    marginLeft: "30px",
    width: "630px",
  },
};

const mergeStyles = function (posts, config) {
  posts.forEach((post, index) => {
    // post.style = config[index];
    post.author = "Andrew Kraus";
    post.description = "Lorem ipsum dolar sit amet, consecetur etc. etc. etc.";
    console.log(post);
  });
};

const recentPosts = [...trending, ...featured, ...featured];

mergeStyles(featured, featuredConfig);
mergeStyles(trending, trendingConfig);

// const lastPost = featured.pop()
const lastFeatured = featured.pop();

export default function Home() {
  return (
    <main>
      <section className="container font-plex">
        <div>
          <section className="flex flex-col mt-24">
            <MasonryPost post={lastFeatured} tagsOnTop={true} columns={3} />
            <PostMasonry posts={featured} tagsOnTop={true} columns={3} />
          </section>
        </div>
      </section>
      <section className="container font-plex">
        <div>
          <section className=" ">
            <PostGrid posts={recentPosts} />
          </section>
        </div>
      </section>
    </main>
  );
}
