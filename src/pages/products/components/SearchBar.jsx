import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SearchBar = (value , page) => {
  const { i18n, t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(value);
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-center items-center mt-4">

        <div
          className={`h-14 ${
            open
              ? "w-[270px] sm:w-[320px] md:w-[900px] shadow-2xl bg-third/20  backdrop-blur-sm px-4"
              : "w-14 bg-transparent px-1"
          } rounded-full transition-all duration-700 flex justify-between items-center `}
        >
          <input
            className={` ${
              open ? "w-full" : "w-0"
            } transition-all duration-700  h-full outline-none rounded-full bg-transparent  text-black placeholder:text-black  text-small ${
              i18n.language != "en" && "text-right"
            }`}
            placeholder={t("SearchProduct")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <MdSearch
            className={`h-full w-auto rounded-full text-med ${
              open ? "text-primary" : "text-white"
            } cursor-pointer`}
            
          />
        </div>

    </div>
  );
};

export default SearchBar;
