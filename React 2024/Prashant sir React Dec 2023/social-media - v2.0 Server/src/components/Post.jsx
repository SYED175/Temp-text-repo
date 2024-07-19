import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/postlist-context-provider";

const Post = ({ post }) => {
  const { deletePostList } = useContext(PostListContext);
  return (
    <div className="card sd-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            onClick={() => {
              deletePostList(post.id);
            }}
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary sd-reaction">
            {tag}
          </span>
        ))}

        <div className="alert alert-primary sd-alert" role="alert">
          This post has {post.reactions} reactions!
        </div>
      </div>
    </div>
  );
};

export default Post;
