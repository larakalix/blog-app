import React from "react";
import dynamic from 'next/dynamic';
import { PostType } from "@/interfaces/post";
import UndefinedPost from "@/components/posts/types/UndefinedPost";

interface Props {
  type: PostType;
  props: any;
}

const _components: any = {
  Minimal: dynamic(() => import("@/components/posts/types/Minimal")),
  Grid: dynamic(() => import("@/components/posts/types/Grid")),
  Clean: dynamic(() => import("@/components/posts/types/Clean")),
  Lush: dynamic(() => import("@/components/posts/types/Lush")),
};

const PostFactory = ({ type, props }: Props) => {
  const Component = _components[type] ?? UndefinedPost;
  return <Component post={props} />
};

export default PostFactory;
