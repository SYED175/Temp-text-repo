import { useRef } from "react";

const Search = ({ handleSubmit }) => {
  const searchDisplay = useRef();

  return (
    <div>
      <input
        ref={searchDisplay}
        className="form-control sd-form"
        placeholder="Type to search..."
      />
      <button
        className="btn btn-success sd-btn"
        onClick={() => {
          handleSubmit(searchDisplay);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
