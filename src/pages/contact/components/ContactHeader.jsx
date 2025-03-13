import React from "react";
import contact from "../../../assets/images/home/contact.png";
const ContactHeader = () => {
  return (
    <div>
      <div
        className="w-full h-[100vh] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${contact})`,
        }}
      >
        <div className="text-huge grid grid-cols-1 pt-[22%] bg-gradient-to-b from-black/60 pb-[22%]   ">
          <p className="flex justify-center text-white items-center font-bold ">
            CONTACT
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
