import React from "react";
import Image from "next/image";
import { Post } from "@/interfaces/post";
import TagBadge from "../TagBadge";
import MarkAsset from "./../../../assets/images/mark.png";

interface Props {
  post: Post;
}
const Clean = ({ post }: Props) => {
  const { title, slug, thumbnail, author, mark, tags } = post;

  return (
    <div className="relative rounded-md flex justify-between  space-x-5">
      <div className="relative h-24 w-24 shadow-md rounded-md">
        <Image
          className="object-cover filter brightness-110 rounded-md"
          src={thumbnail.url}
          layout="fill"
          alt={title}
          loading="lazy"
        />
      </div>
      <div className="w-2/3">
        <p className="text-xs text-gray-500">{author}</p>
        <h1 className="text-gray-600 capitalize font-light text-sm">{title}</h1>
      </div>
    </div>
  );
};

export default Clean;
