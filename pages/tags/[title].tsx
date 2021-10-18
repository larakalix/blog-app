import React from "react";
import Head from "next/head";
import { Post, Tag } from "../../interfaces/post";
import Posts from "../../components/posts/Posts";
import { request } from "../../lib/datocms";
import { HOME_QUERY, ONE_TAG, TAGS_QUERY, TAG_POSTS_QUERY } from "../../queries/queries";

interface Props {
  title: string;
  posts: Post[];
}

const Tags = ({ title, posts }: Props) => {
  return (
    <>
      <Head>
        <title>Blog - Post by {title} tag</title>
      </Head>

      <div className="flex justify-center items-center">
        <p className="bg-gray-100 px-10 py-8 rounded-md my-6">
          We found <b>{posts.length} Articles</b> for{" "}
          <span className="capitalize">&quot;{title}&quot;</span>
        </p>
      </div>

      <div className="flex items-center justify-center overflow-hidden">
        <Posts posts={posts} />
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const response = await request({
    query: TAGS_QUERY,
    variables: { limit: 50 },
    preview: false,
  });
  let tags: Post[] = response.allTags;

  const paths = tags.map((tag) => ({
    params: { title: tag.title },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const tag_response = await request({
    query: ONE_TAG,
    variables: { title: params.title },
    preview: false,
  });
  const { id }: Tag = tag_response.tag;

  const response = await request({
    query: TAG_POSTS_QUERY,
    variables: { tagId: id },
    preview: false,
  });
  let posts: Post[] = response.allPosts;
  return { props: { title: params.title, posts } };
}

export default Tags;
