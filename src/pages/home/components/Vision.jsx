import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ourVision from "../../../assets/images/home/ourVision.png";
import Arrow from "../../../assets/icons/Arrow5.svg";
const Vision = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div
      dir={i18n.language == "ar" ? "rtl" : "ltr"}
      className="grid grid-cols-1 lg:grid-cols-2 gap-5  px-[10%] py-[5%] ">
      <div>
        <img src={ourVision} alt="" />
      </div>
      <div>
        <p className="text-big font-bold ">{t("visionTitle")}</p>
        <p className="text-small pt-[12%]">{t("visionDesciption")}</p>
        <div className="text-primary flex group pt-[20px] ">
          <button
            className="flex text-primary  text-small font-bold hover:underline max-w-[50%] sm:max-w-max  cursor-pointer"
            onClick={() => {
              navigate("/profile");
            }}>
            {t("OurProfile")}
          </button>
          <img
            src={Arrow}
            alt=""
            className={`transition-all duration-500 pl-[10px] ${
              i18n.language == "ar"
                ? "rotate-180 group-hover:-translate-x-[50%]"
                : " group-hover:translate-x-[50%]"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Vision;
