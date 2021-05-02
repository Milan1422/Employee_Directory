import React, { useRef } from "react";

export default function Search({ handleChange }) {
  const inputRef = useRef();

  return (
    <div className="d-flex justify-content-center p-5">
      <input
        type="text"
        className="form-control col-2"
        placeholder="Search Employee Name"
        ref={inputRef}
        onChange={() => handleChange(inputRef.current.value)}
      ></input>
    </div>
  );
};