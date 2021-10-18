import React from "react";
import Head from "next/head";
import Posts from "../components/posts/Posts";
import { Post } from "../interfaces/post";
import { data } from "../data/data";
import { request } from "../lib/datocms";
import { HOME_QUERY } from "../queries/home";

interface Props {
  posts: Post[];
}

const Home = ({ posts }: Props) => {
  console.log('Posts', posts)
  return (
    <div className="p-4 md:p-20">
      <Head>
        <title>Blog - Ivan Lara</title>
        <meta name="description" content="Blog App by Ivan Lara with NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center overflow-hidden">
        <Posts posts={posts} />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await request({
    query: HOME_QUERY,
    variables: { limit: 10 },
    preview: false,
  });
  let posts: Post[] = response.allPosts;
  return { props: { posts: posts } };
}

export default Home;
