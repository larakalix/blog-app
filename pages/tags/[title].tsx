import React from "react";
import Head from "next/head";
import { Post } from "../../interfaces/post";
import Posts from "../../components/posts/Posts";
import { request } from "../../lib/datocms";
import { HOME_QUERY, TAGS_QUERY } from "../../queries/home";

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
//   const response = await request({
//     query: HOME_QUERY,
//     variables: { title: params.title },
//     preview: false,
//   });
  // let post: Post[] = response.allPosts[0];
  let posts: Post[] = [];
  return { props: { title: params.title, posts: [] } };
}

export default Tags;
