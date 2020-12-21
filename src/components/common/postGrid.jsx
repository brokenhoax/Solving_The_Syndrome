import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "antd";
import { TagRow } from "./";
import "../../styles/scss/postGrid.scss";

export default function PostGrid({ posts }) {
  const [pageSize, setPageSize] = useState(9);
  const [current, setCurrent] = useState(1);

  const paginatedPosts = useMemo(() => {
    const lastIndex = current * pageSize;
    const firstIndex = lastIndex - setPageSize;

    return posts.slice(firstIndex, lastIndex);
  }, [posts, current, pageSize]);

  return (
    <section>
      {paginatedPosts.map((post, index) => (
        <div className="post-container my-4">
          <h2 className="p-2 bg-blue-800 bg-opacity-50 font-semibold rounded-t-md">
            {post.title}
          </h2>
          <span className="image-date pl-2 text-white">{post.date}</span>
          <figure>
            <Link to={post.link}>
              <TagRow tags={post.categories} />
              <img
                src={require(`../../assets/images/${post.image}`).default}
                alt={post.image}
                className="post-grid-image rounded-lg"
              />
            </Link>
          </figure>
        </div>
      ))}
      <Pagination
        simple
        showSizeChanger
        onShowSizeChange={setPageSize}
        pageSize={pageSize}
        total={posts.length}
        defaultCurrent={current}
        onChange={setCurrent}
        className="test flex justify-end font-bold"
      />
    </section>
  );
}
