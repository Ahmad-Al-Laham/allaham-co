import React from "react";
import contact from "../../../assets/images/home/contact.png";
import { FaArrowCircleRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Arrow from "../../../assets/icons/Arrow.svg";

const Contact = () => {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  return (
    <div>
      <div
        className="w-full h-[500px] mt-10 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${contact})`,
        }}>
        <div
          className="pb-[5%] bg-gradient-to-b from-black/50 via-black/50 "
          dir={i18n.language === "en" ? "ltr" : "rtl"}>
          <div className="">
            <p className="text-med text-white pt-20 px-[5%] pb-10 sm:text-big">
              {t("contactTitle1")}
              <br />
              {t("contactTitle2")}
            </p>
          </div>
          <div>
            <p className="text-small text-white  px-[5%] pb-[5%] sm:text-med">
              {t("contactdisc1")}
            </p>
          </div>
          <div className={`${i18n.language == 'en' ? "pl-[4%]" : "pr-[5%]"}`}>
          <div
            className={`text-white flex justify-center  items-center gap-x-2 cursor-pointer transition-all duration-300 text-small sm:text-smaller md:text-small w-full max-w-[270px] h-[50px] -translate-y-[50px] translate-x-[12px] bg-primary`}
            dir={i18n.language == "ar" ? "rtl" : "ltr"}
            onClick={() => {
              navigate(`/categories`);
            }}>
            <p className=" flex justify-center group">{t("ContactUs")}</p>
            <img
              src={Arrow}
              alt=""
              className={`transition-all duration-500 ${
                i18n.language == "ar"
                  ? "rotate-180 group-hover:-translate-x-[50%]"
                  : " group-hover:translate-x-[50%]"
              }`}
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
