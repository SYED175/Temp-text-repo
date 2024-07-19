import React, { useContext, useRef } from "react";
import { PostListContext } from "../store/postlist-context-provider";

const CreatePost = () => {
  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const { addPostList } = useContext(PostListContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    addPostList(
      userIdElement,
      titleElement,
      bodyElement,
      reactionsElement,
      tagsElement
    );
  };

  return (
    <form className="sd-form" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          User ID
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userid"
          placeholder="Enter your user id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={titleElement}
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          ref={bodyElement}
          rows={4}
          type="text"
          className="form-control"
          id="body"
          placeholder="Tell use more..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reactions Count
        </label>
        <input
          ref={reactionsElement}
          type="number"
          className="form-control"
          id="reactions"
          placeholder="Total reactions to this post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          Tags
        </label>
        <input
          ref={tagsElement}
          type="text"
          className="form-control"
          id="userid"
          placeholder="Entertags with space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
