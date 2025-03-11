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
        <div className=" md:pt-[7%]  flex text-center items-center">
          <p className="text-fourth text-huge ">01</p>
          <p className="text-black flex-wrap text-small">
            Allaham is an Syrian company producing innovative surfaces and
            solutions for the furniture and interior design industries.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2">
        <div className=" sm:pt-[7%] pb-[8%] order-2 md:order-1 flex text-center items-center">
          <p className="text-fourth text-huge ">02</p>
          <p className="text-black flex-wrap text-small">
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
        <div className="flex text-center items-center md:pt-[7%] pb-[10%] ">
          <p className="text-fourth text-huge ">03</p>
          <p className="text-black  text-small">
            It is highly resistant to stains, which is very appropiate for
            applications such as this, as well as easy to clean.
          </p>
        </div>
      </div>
      <div>
        <div className="text-black bold text-big px-[5%]">
          <p className="text-small sm:text-med">
            why choose Allaham Trading co:{" "}
          </p>
        </div>
        <div className="grid grid-cols-3  sm:grid-cols-3 my-[5%]">
          <div className="text-primary  ">
            <p className=" bg-third text-center w-[100%]  items-center justify-center  flex text-smaller sm:text-small md:text-small rounded   h-[65%] ">
              is the perfect technology for your Kitchen
            </p>
          </div>
          <div>
            <img src={choose} alt="" className="h-[100%] W-[100%]" />
          </div>
          <div>
            <p className=" bg-primary bg-gradient-to-t from-black/60 text-center w-[100%]  items-center justify-center  flex text-smaller sm:text-small md:text-small rounded   h-[65%] ">
              ideal technology for your kitchen, as its characteristics render
              it ideal for day-to-day usage
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBody;
