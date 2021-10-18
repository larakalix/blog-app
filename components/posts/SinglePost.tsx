import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tag, Thumbnail } from "../../interfaces/post";
import TagBadge from "./TagBadge";
import MarkAsset from "./../../assets/images/mark.png";

interface Props {
  id: string;
  title: string;
  slug: string;
  thumbnail: Thumbnail;
  author: string;
  mark: boolean;
  tags: Tag[];
}

const SinglePost = ({ title, slug, thumbnail, author, mark, tags }: Props) => {
  return (
    <div className="relative my-2 p-2 w-1/2 min-w-[20rem] justify-center overflow-hidden sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/5 cursor-pointer">
      <Link href={`/article/${encodeURIComponent(slug)}`}>
        <a>
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
          <div className="flex space-x-3 my-4">
            <ul className="block">
              {tags.map(({ id, title, mark }) => (
                <TagBadge key={id} {...{ id, title, mark }} />
              ))}
            </ul>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default SinglePost;
