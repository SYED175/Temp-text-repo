import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPostList: () => {},
  deletePostList: () => {},
});
const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id != action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [...currPostList, action.payload];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const DEFAULT_POSTLIST = [
    {
      id: "1",
      title: "ABC",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elitonsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint ous",
      reactions: 2,
      userId: "user-3",
      tags: ["Happy", "Success", "Peace"],
    },
    {
      id: "2",
      title: "DEF",
      body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae",
      reactions: 21,
      userId: "user-5",
      tags: ["Surprise", "Shock"],
    },
  ];
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POSTLIST
  );
  const addPostList = (
    userIdElement,
    titleElement,
    bodyElement,
    reactionsElement,
    tagsElement
  ) => {
    const actionObj = {
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        userId: userIdElement.current.value,
        title: titleElement.current.value,
        body: bodyElement.current.value,
        reactions: reactionsElement.current.value,
        tags: tagsElement.current.value.split(" "),
      },
    };
    dispatchPostList(actionObj);
    userIdElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
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
  return (
    <PostListContext.Provider
      value={{
        postList: postList,
        addPostList: addPostList,
        deletePostList: deletePostList,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
