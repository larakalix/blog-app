import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import MarkAsset from "./../../assets/images/mark.png";

interface Props {
  id: string;
  title: string;
  slug: string;
  thumbnail: string;
  author: string;
  mark: boolean;
}

const SinglePost = ({ id, title, slug, thumbnail, author, mark }: Props) => {
  return (
    <div className="relative my-2 p-2 w-1/2 overflow-hidden sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/5 cursor-pointer hover:brightness-110">
      <Link href={`/article/${encodeURIComponent(slug)}`}>
        <a>
          {mark && (
            <div className="absolute z-30 -left-3 top-4">
              <Image src={MarkAsset} width={70} height={120} alt="Mark" />
            </div>
          )}
          <div className="relative h-52 shadow-md rounded-md">
            <Image
              className="object-cover filter brightness-90 rounded-md"
              src={thumbnail}
              layout="fill"
              alt={title}
            />
          </div>
          <p className="mt-4 text-xs text-gray-500">{author}</p>
          <h1 className="text-gray-800 capitalize font-light text-sm pb-3">
            {title}
          </h1>
        </a>
      </Link>
    </div>
  );
};

export default SinglePost;
