import React, { useContext, useRef } from "react";
import { Form, redirect, useNavigate } from "react-router-dom";

const CreatePost = () => {
  return (
    <Form method="POST" className="sd-form">
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          User ID
        </label>
        <input
          type="text"
          name="userId"
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
          name="title"
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
          name="body"
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
          name="reactions"
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
          name="tags"
          type="text"
          className="form-control"
          id="tags"
          placeholder="Enter tags with space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </Form>
  );
};

export async function createPostAction(data) {
  //
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  console.log(postData);
  postData.tags = postData.tags.split(" ");

  return redirect("/");
}
export default CreatePost;
