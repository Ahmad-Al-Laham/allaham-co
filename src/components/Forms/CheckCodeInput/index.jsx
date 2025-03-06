import React from "react";
import rightArrow from "../../../assets/icons/right-arrow-white.svg";
const CheckCodeInput = ({ state, onChange, onSubmit }) => {
  return (
    <div className="flex justify-center items-center w-[300px] md:w-[400px] lg:w-[500px] group">
      <div
        className="w-[75%] h-[55px] bg-white text-black text-smaller flex justify-start items-center transition-all duration-300 rounded-sm translate-x-4  md:translate-x-6 px-4"
        style={{
          clipPath: "polygon(0 0, 100% 0%, 83% 100%, 0% 100%)",
        }}
      >
        <input
          value={state}
          onChange={onChange}
          className="w-[80%] h-full outline-none"
          type="text"
        />
      </div>
      <div
        className="w-[25%] h-[55px] bg-primary text-black text-smaller flex justify-end items-center p-5 -tranlsate-x-4 md:-translate-x-6 group-hover:-translate-x-3 transition-all duration-300 rounded-sm"
        style={{
          clipPath: "polygon(50% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
        onClick={onSubmit}
      >
        <img
          src={rightArrow}
          alt="arrow->"
          className="object-contain w-8 h-8"
        />
      </div>
    </div>
  );
};

export default CheckCodeInput;


//to check what is the type of data i want to input 
//ex: number , password , default(any thing ) ....