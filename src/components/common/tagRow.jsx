import React from "react";
import { categoryColors } from "./styles";

export default function TagRow({ tags }) {
  const test = () => {
    console.log(tags);
  };

  test();
  return (
    <div className="tagRow p-1">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="tag p-1 text-xs font-medium m-1 rounded"
          style={{ backgroundColor: categoryColors[tag] }}
        >
          {tag.toUpperCase()}
        </span>
      ))}
    </div>
  );
}
