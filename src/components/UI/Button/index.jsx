import React from "react";
import Loader from "../Loader";
const Back = ({ loading, icon, text }) => {
  return (
    <>
      {!loading && icon ? <div className="px-1">{icon}</div> : null}
      {!loading && <p className="px-1">{text}</p>}
    </>
  );
};
const Normal = ({ loading, icon, text }) => {
  return (
    <>
      {!loading && text ? <div className="px-1">{text}</div> : null}
      {!loading && icon ? <div className="px-1">{icon}</div> : null}
    </>
  );
};
const Button = ({
  bgColor,
  borderColor,
  text,
  textColor,
  big,
  icon,
  customStyle,
  onClick,
  loading,
  disabled,
  h,
  w,
  back,
  borderRadius,
  border,
}) => {
  return (
    <button
      style={{
        color:"black",
        borderRadius: borderRadius ?? 27,
        border: border ? "1px solid" : 1,
        borderColor: borderColor,
        width: w ? "100px" : "100px",
        height: h,
        transition: "0.4s",
      }}
      className={`text-center bg-white p-1 py-1 lg:max-w-[280px] flex items-center justify-center text-smaller font-medium ${
        disabled ? "!bg-gray-400" : bgColor
      } ${textColor}  ${loading && "py-3"} cursor-pointer ${customStyle}`}
      onClick={onClick}
      disabled={disabled}
    >
      {back ? (
        <Back text={text} icon={icon} loading={loading} />
      ) : (
        <Normal text={text} icon={icon} loading={loading} />
      )}
      {loading && <Loader big={big} />}
    </button>
  );
};

export default Button;
