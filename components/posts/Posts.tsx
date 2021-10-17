import { Post } from "../../interfaces/post";
import SinglePost from "./SinglePost";

interface Props {
    posts: Post[];
}

const Posts = ({ posts }: Props) => {
  return (
    <div className="flex flex-wrap -mx-1 overflow-hidden">
      {posts.map(({ id, title, slug, thumbnail, author, mark }) => (
        <SinglePost
          key={id}
          {...{ id, title, slug, thumbnail, author, mark }}
        />
      ))}
    </div>
  );
};

export default Posts;
