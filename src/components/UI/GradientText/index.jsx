import React from "react";

const GradientText = ({ text, customStyle }) => {
  return (
    <p
      style={{
        background: " linear-gradient(316deg, #DDB26E 0%, #161535 100%)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        WebkitTextFillColor: "transparent",
      }}
      className={customStyle}
    >
      {text}
    </p>
  );
};

export default GradientText;
