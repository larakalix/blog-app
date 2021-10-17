import React from "react";
import Head from "next/head";
import Posts from "../components/posts/Posts";
import { Post } from "../interfaces/post";
import { data } from "../data/data";

interface Props {
  posts: Post[];
}

const Home = ({ posts }: Props) => {
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

export function getStaticProps() {
  const posts: Post[] = data;
  return { props: { posts } }
}

export default Home;
