import React, { useState } from "react";
import TagBadge from "./TagBadge";
import SinglePost from "./SinglePost";
import { Post, PostType, Tag } from "@/interfaces/post";

interface Props {
  tags: Tag[];
  posts: Post[];
}

const Posts = ({ tags, posts }: Props) => {
  const [state, setState] = useState(PostType.Minimal);

  return (
    <>
      <div className="hidden xl:flex flex-wrap xl:justify-items-start xl:max-w-[15rem]">
        <ul className="block">
          {tags.map(({ id, title, mark }) => (
            <TagBadge key={id} {...{ id, title, mark }} />
          ))}
        </ul>
      </div>
      <div>
        <div>
          <ul className="flex items-center space-x-3">
            {Object.keys(PostType).map((type) => (
              <li
                key={type}
                className="cursor-pointer shadow-sm rounded-md p-3 bg-pink-500 text-white w-24 text-xs text-center"
                onClick={() => setState(type as PostType)}
              >
                {type}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {posts.map(({ id, title, slug, thumbnail, author, mark, tags }) => (
            <SinglePost
              key={id}
              {...{
                id,
                title,
                slug,
                thumbnail,
                author,
                mark,
                tags,
                type: state,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Posts;
