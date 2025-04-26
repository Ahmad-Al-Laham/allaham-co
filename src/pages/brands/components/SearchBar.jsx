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
        // style={{
        //   background:
        //     "linear-gradient(180deg, #0092AD 0%, #094C6C 24.48%, #F7B507 43.23%, #E98005 65.1%, #B34B95 81.25%, #672971 99.48%",
        // }}
        className={`p-[2px] rounded-full flex justify-center bg-white/20  backdrop-blur-sm  items-center w-[100%] `}
      >

          <input
            className={` md:w-[700px] sm:w-[350px]  w-[230px]  h-[40px] outline-none rounded-full bg-transparent text-black "w-full" placeholder:text-black   text-small ${
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
