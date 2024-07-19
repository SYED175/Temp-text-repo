import { createContext, useReducer, useState, useEffect } from "react";

export const PostListContext = createContext({
  postList: [],
  addPostList: () => {},
  deletePostList: () => {},
  addPosts: () => {},
  fetching: Boolean,
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id != action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPostList = (post) => {
    const actionObj = {
      type: "ADD_POST",
      payload: post,
    };
    dispatchPostList(actionObj);
  };
  const addPosts = (posts) => {
    const actionObj = {
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts: posts,
      },
    };
    dispatchPostList(actionObj);
  };
  const deletePostList = (postId) => {
    const actionObj = {
      type: "DELETE_POST",
      payload: {
        postId,
      },
    };
    dispatchPostList(actionObj);
  };

  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setFetching(true);
    fetch("https://dummyjson.com/posts", signal)
      .then((res) => res.json())
      .then((data) => {
        addPosts(data.posts);
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);
  console.log("hiiiiiii");
  return (
    <PostListContext.Provider
      value={{
        postList: postList,
        addPostList: addPostList,
        deletePostList: deletePostList,
        addPosts: addPosts,
        fetching: fetching,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
