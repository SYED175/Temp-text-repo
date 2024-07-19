import Post from "./Post";
import { PostListContext } from "../store/postlist-context-provider";
import { useContext } from "react";

const PostList = () => {
  const { postList } = useContext(PostListContext);
  return (
    <div>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
