import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/logos/logo.svg";

export const SearchBar = () => {
  const { i18n, t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-center items-center mt-4">
      <div
        // style={{
        //   background:
        //     "linear-gradient(180deg, #0092AD 0%, #094C6C 24.48%, #F7B507 43.23%, #E98005 65.1%, #B34B95 81.25%, #672971 99.48%",
        // }}
        className={`p-[2px] rounded-lg flex justify-center items-center ${
          open && "shadow-lg drop-shadow-lg"
        }  transition-all duration-700`}>
        <div
          className={`h-14 ${
            open
              ? "w-[150px] sm:w-[320px] md:w-[275px] bg-secondary/80 px-4"
              : "w-14 bg-transparent px-1"
          } rounded-full transition-all duration-700 flex justify-between items-center `}>
          <input
            className={` ${
              open ? "w-full" : "w-0"
            } transition-all duration-700  h-full outline-none rounded-full bg-transparent text-primary placeholder:text-primary placeholder:font-medium font-medium text-small ${
              i18n.language != "en" && "text-right"
            }`}
            placeholder={t("search")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div
            className={`${
              !open
                ? " bg-black/40 shadow-2xl backdrop-blur-md rounded-full p-[8px]"
                : "shadow-none bg-transparent"
            }`}>
            {!open ? (
              <MdSearch
                className={`h-[40px] w-[40PX] rounded-full text-med  text-white cursor-pointer`}
                onClick={() => {
                  if (searchTerm.length == 0) setOpen(!open);
                  else {
                    sessionStorage.setItem("searchUrl", searchTerm);
                    navigate(`/products/${searchTerm}`);
                  }
                }}
              />
            ) : (
              <img
                src={Logo}
                alt="Logo BIM"
                className="h-[80px] w-[100px] cursor-pointer translate-y-1 "
                onClick={() => {
                  if (searchTerm.length == 0) setOpen(!open);
                  else {
                    sessionStorage.setItem("searchUrl", searchTerm);
                    navigate(`/products/${searchTerm}`);
                  }
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
