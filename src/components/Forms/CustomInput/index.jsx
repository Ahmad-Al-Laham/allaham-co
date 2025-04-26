import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { MdClose } from "react-icons/md";
const CustomInput = ({
  icon,
  placeholder,
  type,
  name,
  id,
  value,
  onChange,
  reverseIcon,
  readOnly,
  customStyle,
  options,
  otherOptions,
  select = false,
  setState,
  state,
  containerStyle,
  noInput,
  AdapterOptions,
  AdapterOptionName,
  error,
  errorMessage,
  textArea,
  textAreaRows,
  inputLabel,
  keepOnSelect,
  translatedOptions,
  useStateOption,
}) => {
  const [selectStatus, setSelectStatus] = useState(false);
  const { i18n } = useTranslation();
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setSelectStatus(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  return (
    <div className="flex flex-col justify-center w-full">
      {inputLabel && (
        <p className="font-semibold leading-3 px-1 py-2">{inputLabel}</p>
      )}
      {/* <div className="flex flex-col justify-center rounded-full"> */}
<div
        className={`${
          !noInput &&
          `${
            error
              ? "border-red-500 border-[2px]"
              : "border-transparent border-b-[1px]"
          } bg-white w-full h-full`
        }  px-4 py-3 flex w-full items-center relative ${containerStyle} ${
          reverseIcon && "flex-row-reverse"
        } ${select && "cursor-pointer"}`}
        onClick={() => {
          !keepOnSelect && select && setSelectStatus(!selectStatus);
        }}
      >
        {icon}
        {textArea ? (
          <textarea
            placeholder={placeholder}
            name={name}
            id={id}
            value={value ?? ""}
            onChange={onChange}
            className={`bg-transparent py-1 px-2 w-full outline-none placeholder:text-black placeholder:font-semibold ${customStyle} ${
              select && "cursor-pointer"
            }`}
            rows={textAreaRows ?? 15}
            readOnly={readOnly}
            onClick={() => {
              setSelectStatus(!selectStatus);
            }}
          />
        ) : (
          <input
            type={type}
            //change placeholder color
            className={`bg-transparent py-1 px-2 w-full outline-none placeholder:text-black placeholder:font-semibold ${customStyle} ${
              select && "cursor-pointer"
            }`}
            name={name}
            onChange={onChange}
            placeholder={ placeholder}
            id={id}
            value={value ?? ""}
            readOnly={readOnly}
            onClick={() => {
              setSelectStatus(!selectStatus);
            }}
          />
        )}

        {/* {select && selectStatus && (
          <div
            className="flex justify-end items-center self-center text-med h-[50px] w-[50px]"
            onClick={() => setSelectStatus(false)}
          >
            <MdClose className="hover:rotate-180 hover:scale-125 transition-all duration-300 bg-primary rounded-full p-1" />
          </div>
        )} */}
        {select && (
          <div
            ref={ref} // ?not understant 
            className={`
               ${selectStatus ? "scale-100" : "scale-0"}
             z-40 transition-all duration-300 origin-top absolute left-0 top-14 max-h-[300px] overflow-x-hidden overflow-y-auto rounded-2xl shadow-2xl drop-shadow-2xl bg-secondary backdrop-blur-[21px] text-secondary w-full p-2`}
          >
            {options
              ? options.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className="text-tiny hover:bg-secondary/50 rounded-2xl p-2 transition-all duration-300"
                      onClick={() => {
                        useStateOption
                          ? setState(item)
                          : setState({ ...state, [name]: item }); 
                      }}
                    >
                      {item}
                    </p>
                  );
                })
              : translatedOptions
              ? translatedOptions.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className="text-tiny text-black hover:bg-third/50 rounded-md p-2 transition-all duration-300"
                      onClick={() => {
                        useStateOption
                          ? setState(item)
                          : setState({ ...state, [name]: item.value });
                      }}
                    >
                      {item.lng[i18n.language]}
                    </p>
                  );
                })
              : AdapterOptions
              ? AdapterOptions.ids.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className="text-tiny hover:bg-third/50 text-black rounded-md p-2 z-10 transition-all duration-300 "
                      onClick={() => {
                        useStateOption
                          ? setState(item)
                          : setState({ ...state, [name]: item });
                      }}
                    >
                      {AdapterOptions.entities[item][AdapterOptionName]}
                    </p>
                  );
                })
              : otherOptions}
          </div>
        )}
      </div>
      {/* </div> */}
    </div>
  );
};

export default CustomInput;



//handleClickOutSide it is specification if the click is inside or out side the element 
// the use effect is still waiting for event listner which is click inside or outside the element and its close the dropdown list which i have (like in filter)



//if i have input lable i will put it in this div 
//if there is no input it will show an error message and if i want to change the language it will revers all of the input box or text area
//if i have a text area it will show me a text area other wise it will show me a normal input



// we have either options or otherOptions 
//if we have an options it will either map on thes options or if we want to translate the options it will map on translated options
//  or if we have adapterOptions and that's depnds on what the type of data we have it will map on ids array that's will get the options from there ids