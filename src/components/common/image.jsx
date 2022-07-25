import React, { useState } from "react";

export default function Image(props) {
  const [image, showImage] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center pt-4">
      {image && (
        <button className="">
          <img
            onClick={() => showImage((image) => !image)}
            className="rounded-md inline-flex items-center justify-center w-1/2"
            src={props.image}
            alt={props.message}
          ></img>
        </button>
      )}
      {!image && (
        <button className="">
          <img
            onClick={() => showImage((image) => !image)}
            className="rounded-md"
            src={props.image}
            alt={props.message}
          ></img>
        </button>
      )}
      <button
        onClick={() => showImage((image) => !image)}
        className="flex items-center py-2 space-x-2"
      >
        <i className={`fas fa-camera ${image ? "text-lg" : "text-sm"}`}></i>
        <div className={`${image ? "text-sm" : "text-xs"}`}>
          {props.message}
        </div>
      </button>
    </div>
  );
}
