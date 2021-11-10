import React from "react";
import Image from "next/image";
import { Post } from "@/interfaces/post";

interface Props {
  post: Post;
}

const Grid = ({ post }: Props) => {
  const { title, slug, thumbnail, author, mark, tags } = post;

  return (
    <div className="relative rounded-md">
      <div className="grid grid-cols-2 gap-2">
        <div className="relative h-24 shadow-md rounded-md">
          <Image
            className="object-cover filter brightness-110 rounded-md"
            src={thumbnail.url}
            layout="fill"
            alt={title}
            loading="lazy"
          />
        </div>
        <div>
          <p className="mt-0 text-xs text-gray-500">{author}</p>
          <h1 className="text-gray-800 capitalize font-light text-sm">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Grid;
