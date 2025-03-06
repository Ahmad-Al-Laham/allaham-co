import React from "react";
import { usePagination, DOTS } from "../../../hooks/usePagination";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  const elementStyle = `w-[40px] h-[40px] md:w-[60px] md:h-[60px] text-center m-auto flex justify-center items-center md:text-[18px] cursor-pointer text-black font-semibold rounded-full`;
  return (
    <div className="flex justify-center items-center rounded p-2 gap-x-2 md:gap-x-4 my-4 ">
      <button
        disabled={currentPage == 1}
        className={`${elementStyle} text-white bg-primary rounded-full ${
          currentPage == 1 && "!text-white/50 !bg-primary/50"
        }`}
        onClick={onPrevious}
      >
        <FaAngleLeft className="text-[20px]" />
      </button>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li key={index} className={elementStyle}>
              &#8230;
            </li>
          );
        }
        return (
          <div key={index} className={`bg-primary p-0.5 ${elementStyle}`}>
            <button
              disabled={pageNumber == currentPage}
              className={`w-full h-full bg-white text-primary rounded-full ${
                pageNumber == currentPage && "!bg-primary !text-white"
              }`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          </div>
        );
      })}
      <button
        className={`${elementStyle} bg-primary text-white ${
          currentPage == lastPage && "!text-white/50 !bg-primary/50"
        }`}
        disabled={currentPage == lastPage}
        onClick={onNext}
      >
        <FaAngleRight className="text-[20px]" />
      </button>
    </div>
  );
};

export default Pagination;
