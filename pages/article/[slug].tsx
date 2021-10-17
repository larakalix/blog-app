import React from "react";
import Head from "next/head";
import Image from "next/image";
import { data } from "../../data/data";
import { Post } from "../../interfaces/post";
import TagBox from "../../components/posts/Tag";
import AuthorAsset from "../../assets/images/author.png";

interface Props {
  post: Post;
}

const Article = ({ post: { title, tags, thumbnail, author } }: Props) => {
  return (
    <>
      <Head>
        <title>Blog - {title}</title>
      </Head>

      <div className="flex items-center justify-center mt-6">
        <div className="flex-col w-5/6 md:w-3/5">
          <h1 className="font-normal capitalize text-4xl">{title}</h1>

          <div className="flex space-x-3 my-4">
            {tags.map(({ title, mark }) => (
              <TagBox key={title} {...{ title, mark }} />
            ))}
          </div>

          <div className="relative h-80 shadow-md rounded-md">
            <Image
              className="object-cover filter brightness-90 rounded-md"
              src={thumbnail}
              layout="fill"
              alt={title}
            />
          </div>

          <div className="flex items-center mt-12">
            <p className="font-extralight text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde sed
              officia, omnis suscipit repellat veritatis, tenetur blanditiis
              assumenda, excepturi iusto sit reprehenderit enim tempora. Eum
              velit vitae ratione nobis officiis totam tenetur. Iure distinctio
              necessitatibus voluptas autem fugit enim corrupti, rem ipsum harum
              inventore et aliquid! Blanditiis, ipsam. Laborum praesentium
              voluptatibus, expedita culpa delectus nobis mollitia vero, fugiat
              voluptatum dolor incidunt veritatis, placeat ut quos corrupti
              numquam eligendi accusantium ipsam quisquam sequi error porro ex
              obcaecati doloribus. Cupiditate, nulla non officia cumque
              repudiandae quia. Deserunt similique incidunt quam iste? Quos,
              recusandae ducimus dolorum eos veniam molestiae magnam quam
              voluptas enim?
            </p>
          </div>

          <div className="flex flex-col mt-8 border-t pt-4 pb-10">
            <p className="mb-2">Author</p>
            <div className="flex flex-row items-center bg-gray-300 rounded-md px-2 py-3 space-x-4">
              <div className="relative">
                <Image src={AuthorAsset} width={90} height={90} alt="Mark" />
              </div>
              <div className="flex flex-col">
              <p className="mb-1">{author}</p>
              <p className="text-xs">Cupiditate, nulla non officia cumque repudiandae quia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const posts = data;

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const post: Post = data.filter((p) => p.slug === params.slug)[0];
  return { props: { post } };
}

export default Article;
