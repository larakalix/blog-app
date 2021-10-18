import React from "react";
import { Post, Tag } from "../../interfaces/post";
import SinglePost from "./SinglePost";
import TagBadge from "./TagBadge";

interface Props {
  tags: Tag[];
  posts: Post[];
}

const Posts = ({ tags, posts }: Props) => {
  return (
    <>
      <div className="hidden xl:flex flex-wrap xl:justify-items-start xl:max-w-[15rem]">
        <ul className="block">
          {tags.map(({ id, title, mark }) => (
            <TagBadge key={id} {...{ id, title, mark }} />
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap justify-center mt-2 overflow-hidden">
        {posts.map(({ id, title, slug, thumbnail, author, mark, tags }) => (
          <SinglePost
            key={id}
            {...{ id, title, slug, thumbnail, author, mark, tags }}
          />
        ))}
      </div>
    </>
  );
};

export default Posts;
