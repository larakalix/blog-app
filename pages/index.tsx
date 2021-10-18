import React from "react";
import Head from "next/head";
import Posts from "../components/posts/Posts";
import { Post, Tag } from "../interfaces/post";
import { request } from "../lib/datocms";
import { HOME_QUERY, TAGS_QUERY } from "../queries/queries";

interface Props {
  tags: Tag[];
  posts: Post[];
}

const Home = ({ tags, posts }: Props) => {
  return (
    <div className="p-4 md:p-20">
      <Head>
        <title>Blog - Ivan Lara</title>
        <meta name="description" content="Blog App by Ivan Lara with NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-items-start overflow-hidden">
        <Posts {...{ tags, posts }} />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const tags_response = await request({
    query: TAGS_QUERY,
    variables: { limit: 50 },
    preview: false,
  });
  let tags: Post[] = tags_response.allTags;

  const response = await request({
    query: HOME_QUERY,
    variables: { limit: 10 },
    preview: false,
  });
  let posts: Post[] = response.allPosts;
  return { props: { tags, posts } };
}

export default Home;
