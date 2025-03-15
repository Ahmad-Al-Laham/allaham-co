import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Drawer from "./Drawer";
import LinkElement from "./LinkElement";
import { MdDehaze } from "react-icons/md";
import { handleScroll } from "../../../helpers/scroll";
import { NavElement } from "../../../data/navData";
import Logo from "../../../assets/logos/logo.svg";
import { NavElement2 } from "../../../data/navData";
import { SearchBar } from "./SearchBar.jsx";
import { useNavigate } from "react-router-dom";
import Language from "./Language.jsx";
import { MdSearch } from "react-icons/md";
const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [header, setHeader] = useState(false);
  const [selectedLink, setSelectedLink] = useState("home");
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const listenScrollEvent = (event) => {
    if (document.documentElement.scrollTop < 40) {
      //not understand
      setHeader(false);
    } else if (document.documentElement.scrollTop > 40) {
      setHeader(true);
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", listenScrollEvent);
    return () => {
      document.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <>
      <div className="h-[110px] w-full absolute ">
        <div
          dir={i18n.language == "en" ? "ltr" : "rtl"}
          className={`fixed max-w-[1920px] w-full top-0 left-1/2 -translate-x-1/2 z-50 flex justify-between items-center gap-x-2 sm:gap-x-6 px-[5%] transition-all duration-300 px-[3%] ${
            header
              ? " bg-black/40 shadow-2xl backdrop-blur-md"
              : "shadow-none bg-transparent"
          }`}
        >
          <div>
            <SearchBar />
          </div>
          
            <div className="flex justify-between gap-14">
            <div
              className={`flex justify-center items-center gap-x-8 2xl:gap-x-12 max-md:hidden ${i18n.language == "en" ? "pl-[50px] ": "pr-[50px]"} !text-white`}
              dir={i18n.language == "en" ? "ltr" : "rtl"}
            >
              {NavElement.map((e, index) => {
                return (
                  <LinkElement
                    key={index}
                    name={t(e.name)}
                    link={e.link}
                    selectedLink={selectedLink}
                    header={header}
                    styled={"max-lg:hidden text-white "}
                  />
                );
              })}
            </div>
            <img
              src={Logo}
              alt="Logo BIM"
              className="h-[80px] w-[100px] cursor-pointer translate-y-1 "
              onClick={() => {
                navigate("/");
              }}
            />
            <div
              className="flex justify-center items-center gap-x-8 2xl:gap-x-12  max-md:hidden !text-white"
              dir={i18n.language == "en" ? "ltr" : "rtl"}
            >
              {NavElement2.map((e, index) => {
                return (
                  <LinkElement
                    key={index}
                    name={t(e.name)}
                    link={e.link}
                    selectedLink={selectedLink}
                    header={header}
                    styled={"max-lg:hidden text-white "}
                  />
                );
              })}
            </div>

            <div className="flex justify-center items-center gap-x-2 sm:gap-x-6">
              <div
                onClick={() => setMobileOpen(true)}
                className="cursor-pointer text-black flex justify-center items-center gap-x-2 lg:hidden"
              >
                <MdDehaze size={24} />
              </div>
            </div>
            </div>
          <div className={`${i18n.language == "en" ? "pl-[10px]" : "pr-[10px]"}`}>
            <Language />
            </div>
        </div>
      </div>

      <Drawer isOpen={mobileOpen} setIsOpen={setMobileOpen}>
        {NavElement.map((e) => (
          <LinkElement
            key={e.link}
            name={t(e.name)}
            link={e.link}
            selectedLink={selectedLink}
            styled={"!text-white"}
            onClick={() => {
              setMobileOpen(false);
              handleScroll(e.link);
              setSelectedLink(e.link);
            }}
          />
        ))}
        {NavElement2.map((e) => (
          <LinkElement
            key={e.link}
            name={t(e.name)}
            link={e.link}
            selectedLink={selectedLink}
            styled={"!text-white"}
            onClick={() => {
              setMobileOpen(false);
              handleScroll(e.link);
              setSelectedLink(e.link);
            }}
          />
        ))}
      </Drawer>
    </>
  );
};

export default NavBar;
