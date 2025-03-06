import React, { useEffect } from "react";

const TextSkelaton = ({ rowsNumber, spacing }) => {
  let rows = rowsNumber ?? 7;
  let rowsArray = [];
  for (let i = 0; i < rows; i++) {
    rowsArray.push(
      <div key={i} className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 " />
    );
  }
  return (
    <div
      role="status"
      className={`animate-pulse w-full px-[4%] ${spacing ?? "space-y-2"}`}
    >
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48" />
      {/* <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" /> */}
      {rowsArray}
    </div>
  );
};

export default TextSkelaton;
