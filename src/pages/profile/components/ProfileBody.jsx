import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import first from "../../../assets/images/Profile/first.png";
import second from "../../../assets/images/Profile/second.png";
import third from "../../../assets/images/Profile/third.png";
import choose from "../../../assets/images/Profile/choose.png";
const ProfileBody = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="px-[10%] sm:px-[10%]">
      <div className=" max-w-[1920px] grid md:grid-cols-2">
        <div className="pt-[5%] ">
          <img src={first} alt="" />
        </div>
        <div className=" md:pt-[7%]    items-center">
          <p className="text-fourth text-huge ">01</p>
          <p className="text-black flex-wrap text-small text-center">
            Allaham is an Syrian company producing innovative surfaces and
            solutions for the furniture and interior design industries.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2">
        <div className=" sm:pt-[7%] pb-[8%] order-2 md:order-1 items-center">
          <p className="text-fourth text-huge ">02</p>
          <p className="text-black flex-wrap text-small  text-center">
            We adopt the most beautiful designs and choose the best materials
            for a wonderful, practical and long-lasting experience
          </p>
        </div>
        <div className="pt-[2%] order-1 md:order-2">
          <img src={second} alt="" />
        </div>
      </div>
      <div className="grid md:grid-cols-2  ">
        <div className="pt-[2%]">
          <img src={third} alt="" />
        </div>
        <div className=" items-center md:pt-[7%] pb-[10%] ">
          <p className="text-fourth text-huge ">03</p>
          <p className="text-black  text-small text-center">
            It is highly resistant to stains, which is very appropiate for
            applications such as this, as well as easy to clean.
          </p>
        </div>
      </div>

    </div>
  );
};

export default ProfileBody;
