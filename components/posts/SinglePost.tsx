import React from "react";
import Link from "next/link";
import { PostProps, PostType } from "../../interfaces/post";
import PostFactory from "@/factory/PostFactory";

const SinglePost = ({
  title,
  slug,
  thumbnail,
  author,
  mark,
  tags,
  type = PostType.Minimal,
}: PostProps) => {
  return (
    <div className="relative my-2 p-2 justify-center overflow-hidden cursor-pointer">
      <Link href={`/article/${encodeURIComponent(slug)}`}>
        <a>
          <PostFactory
            type={type}
            props={{ title, slug, thumbnail, author, mark, tags }}
          />
        </a>
      </Link>
    </div>
  );
};

export default SinglePost;
