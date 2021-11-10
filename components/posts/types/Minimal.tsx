import React from "react";
import Image from "next/image";
import { Post } from "@/interfaces/post";
import TagBadge from "../TagBadge";
import MarkAsset from "./../../../assets/images/mark.png";

interface Props {
  post: Post;
}

const Minimal = ({ post }: Props) => {
  const { title, slug, thumbnail, author, mark, tags } = post;

  return (
    <>
      {mark && (
        <div className="absolute z-30 -left-3 top-4">
          <Image src={MarkAsset} width={70} height={120} alt="Mark" />
        </div>
      )}
      <div className="relative h-52 shadow-md rounded-md">
        <Image
          className="object-cover filter brightness-110 rounded-md"
          src={thumbnail.url}
          layout="fill"
          alt={title}
          loading="lazy"
        />
      </div>
      <p className="mt-4 text-xs text-gray-500">{author}</p>
      <h1 className="text-gray-800 capitalize font-light text-sm pb-3">
        {title}
      </h1>
    </>
  );
};

export default Minimal;
