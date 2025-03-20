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
        <div className=" md:pt-[21%]    items-center">
          <p className="text-fourth text-huge font-extrabold pl-[15px] ">01</p>
          <p className="text-black flex-wrap text-smaller sm:text-small text-center">
          {t("profile1")}
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2">
        <div className=" sm:pt-[20%] pb-[8%] order-2 md:order-1 items-center">
          <p className="text-fourth text-huge font-extrabold pl-[15px]">02</p>
          <p className="text-black flex-wrap text-smaller sm:text-small   text-center">
          {t("profile2")}
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
        <div className=" items-center md:pt-[20%]  ">
          <p className="text-fourth text-huge font-extrabold pl-[15px]">03</p>
          <p className="text-black text-smaller  sm:text-small text-center">
          {t("profile3")}
          </p>
        </div>
      </div>

    </div>
  );
};

export default ProfileBody;
