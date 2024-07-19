import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { privacyActions } from "../store/privacy";
import { counterActions } from "../store/counter";

const Controllers = () => {
  const dispatch = useDispatch();
  const inputEle = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleAdd = () => {
    const num = Number(inputEle.current.value);
    dispatch(counterActions.add(num));
    inputEle.current.value = "";
  };
  const handleSubstract = () => {
    const num = Number(inputEle.current.value);
    dispatch(counterActions.subtract(num));
    inputEle.current.value = "";
  };

  const handlePrivacyToggle = () => {
    dispatch(privacyActions.privacyToggle());
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          onClick={handleIncrement}
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
        >
          +1
        </button>
        <button
          onClick={handleDecrement}
          type="button"
          className="btn btn-outline-secondary btn-lg px-4"
        >
          -1
        </button>
        <button
          onClick={handlePrivacyToggle}
          type="button"
          className="btn btn-warning btn-lg px-4"
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input ref={inputEle} type="text" />
        <button
          onClick={handleAdd}
          type="button"
          className="btn btn-success btn-lg px-4"
        >
          ADD
        </button>
        <button
          onClick={handleSubstract}
          type="button"
          className="btn btn-danger btn-lg px-4"
        >
          SUBSTRACT
        </button>
      </div>
    </>
  );
};

export default Controllers;
