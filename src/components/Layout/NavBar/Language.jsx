import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import lang from "../../../assets/icons/lang.svg";

import {
  MdLanguage,
  MdRadioButtonChecked,
  MdRadioButtonUnchecked,
} from "react-icons/md";
export default function Dropdown() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  };

  return (
    <div className="rounded-md">
      <div className="relative">
        <div
          style={{ WebkitTapHighlightColor: "transparent" }}
          className="p-0 m-0 relative text-black text-center cursor-pointer"
          onClick={() => setOpen(!open)}>
          {i18n.language == "en" ? (
            <div className="relative h-[50px] w-[50px] text-white font-semibold text-smaller">
              <div className="h-[30px] w-[30px] bg-fourth/70  absolute top-0 left-0  flex justify-center items-center border border-solid border-black">
                ع
              </div>
              <div className="h-[30px] w-[30px] bg-fourth/70  absolute  bottom-0 right-0 flex justify-center items-center border border-solid border-black">
                EN
              </div>
            </div>
          ) : (
            <div className="relative h-[50px] w-[50px] text-white font-semibold text-smaller ">
              <div className="h-[30px] w-[30px] bg-fourth/70  absolute  top-0 left-0 flex justify-center items-center border border-solid border-black">
                EN
              </div>
              <div className="h-[30px] w-[30px] bg-fourth/70  absolute bottom-0 right-0 flex justify-center items-center border border-solid border-black">
                ع
              </div>
            </div>
          )}
        </div>

        <div
          ref={ref}
          onClick={() => setOpen(!open)}
          className={`${open ? "scale-100" : "scale-0"} absolute z-10 mt-4 ${
            i18n.language == "en"
              ? "origin-top-right  right-0"
              : "origin-top-left left-0"
          } top-7 bg-black/80 rounded-lg shadow-2xl transition-all duration-300 p-4 space-y-2 text-third font-medium text-smaller w-40`}>
          <div
            className="flex justify-start items-center cursor-pointer"
            onClick={() => {
              changeLanguage("en");
            }}>
            <div className="px-2">
              {i18n.language === "en" ? (
                <MdRadioButtonChecked size={24} />
              ) : (
                <MdRadioButtonUnchecked size={24} />
              )}
            </div>
            <p>{t("English")}</p>
          </div>

          <div
            className="flex justify-start items-center cursor-pointer"
            onClick={() => {
              changeLanguage("ar");
            }}>
            <div className="px-2">
              {i18n.language === "ar" ? (
                <MdRadioButtonChecked size={24} />
              ) : (
                <MdRadioButtonUnchecked size={24} />
              )}
            </div>
            <p>{t("Arabic")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
