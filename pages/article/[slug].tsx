import React from "react";
import Head from "next/head";
import Image from "next/image";
import { request } from "../../lib/datocms";
import { Post } from "../../interfaces/post";
import TagBadge from "../../components/posts/TagBadge";
import AuthorAsset from "../../assets/images/author.png";
import { ARTICLE_QUERY, HOME_QUERY } from "../../queries/queries";

interface Props {
  post: Post;
}

const Article = ({
  post: { title, content, tags, thumbnail, author },
}: Props) => {
  return (
    <>
      <Head>
        <title>Blog - {title}</title>
      </Head>

      <div className="flex items-center justify-center mt-6">
        <div className="flex-col w-5/6 md:w-3/5">
          <h1 className="font-normal capitalize text-4xl">{title}</h1>

          <div className="flex space-x-3 my-4">
            <ul className="block">
              {tags.map(({ id, title, mark }) => (
                <TagBadge key={id} {...{ id, title, mark }} />
              ))}
            </ul>
          </div>

          <div className="relative h-80 shadow-md rounded-md">
            <Image
              className="object-cover filter brightness-110 rounded-md"
              src={thumbnail.url}
              layout="fill"
              alt={title}
              loading="lazy"
            />
          </div>

          <div className="flex items-center mt-12 content">
            <p
              className="font-extralight text-base"
              dangerouslySetInnerHTML={{ __html: content }}
            ></p>
          </div>

          <div className="flex flex-col mt-8 border-t pt-4 pb-10">
            <p className="mb-2">Author</p>
            <div className="flex flex-row items-center bg-gray-300 rounded-md px-2 py-3 space-x-4">
              <div className="relative">
                <Image src={AuthorAsset} width={90} height={90} alt="Mark" />
              </div>
              <div className="flex flex-col">
                <p className="mb-1">{author}</p>
                <p className="text-xs">
                  Cupiditate, nulla non officia cumque repudiandae quia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const response = await request({
    query: HOME_QUERY,
    variables: { limit: 10 },
    preview: false,
  });
  let posts: Post[] = response.allPosts;

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const response = await request({
    query: ARTICLE_QUERY,
    variables: { slug: params.slug },
    preview: false,
  });
  let post: Post[] = response.post;
  return { props: { post } };
}

export default Article;
