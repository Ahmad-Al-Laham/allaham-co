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
      <div className="h-[110px] w-full absolute font-Bai">
        <div
          dir={i18n.language == "en" ? "ltr" : "rtl"}
          className={`fixed max-w-[1920px] w-full top-0 left-1/2 -translate-x-1/2 z-50 flex justify-between items-center gap-x-2 sm:gap-x-6 px-[5%] transition-all duration-300 h-[80px] ${
            header
              ? " bg-black/40 shadow-2xl backdrop-blur-md"
              : "shadow-none bg-transparent"
          }`}
        >
          {/* <div>
            <div
              className={` transition-all duration-700 ${
                !open
                  ? " bg-black/40 shadow-2xl backdrop-blur-md rounded-full p-[8px]"
                  : "shadow-none bg-transparent"
              }`}
            >
              <MdSearch
                className={`h-[40px] w-[40px] rounded-full text-med  text-white cursor-pointer`}
                onClick={() => {
                  if (searchTerm.length == 0) setOpen(!open);
                  else {
                    sessionStorage.setItem("searchUrl", searchTerm);
                    navigate(`/products/${searchTerm}`);
                  }
                }}
              />
            </div>

            <img
              src={Logo}
              alt="Logo Allaham"
              className={`h-[60px] w-[60px] cursor-pointer translate-y-1 ${
                open ? "opacity-100 scale-100" : "opacity-0 scale-90"
              } transition-all duration-700 `}
              onClick={() => {
                if (searchTerm.length == 0) setOpen(!open);
                else {
                  sessionStorage.setItem("searchUrl", searchTerm);
                  navigate(`/products/${searchTerm}`);
                }
              }}
            />
          </div> */}
          <div className="bg-black/50 h-[60px] w-[60px] rounded-full flex justify-center items-center relative">
            <MdSearch
              className={`h-[40px] w-[40px] rounded-full text-med  text-white cursor-pointer`}
              onClick={() => {
                if (searchTerm.length == 0) setOpen(!open);
                else {
                  sessionStorage.setItem("searchUrl", searchTerm);
                  navigate(`/products/${searchTerm}`);
                }
              }}
            />

            <img
              src={Logo}
              alt="Logo Allaham"
              className={`h-full w-full absolute top-0 left-0 cursor-pointer transition-all duration-300 ${
                !open ? "opacity-0" : "opacity-100"
              } `}
              onClick={() => {
                if (searchTerm.length == 0) setOpen(!open);
                else {
                  sessionStorage.setItem("searchUrl", searchTerm);
                  navigate(`/products/${searchTerm}`);
                }
              }}
            />
          </div>

          <div className="flex justify-between gap-14">
            <div
              className={`flex justify-center items-center gap-x-8 2xl:gap-x-12 max-md:hidden ${
                i18n.language == "en" ? "pl-[50px] " : "pr-[50px]"
              } !text-white`}
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
            <div
              className={`relative transition-all duration-500 ${
                open ? "w-[250px]" : "w-[70px] h-[70px]"
              }`}
            >
              <img
                src={Logo}
                alt="Logo BIM"
                className={`absolute top-0 left-1/2 -translate-x-1/2 h-[70px] w-[70px] cursor-pointer ${
                  open ? "scale-0" : "scale-100"
                } transition-all duration-500`}
                onClick={() => {
                  navigate("/");
                }}
              />
              <div
                className={`w-full h-full ${
                  !open ? "scale-0" : "scale-100"
                } flex justify-center items-center absolute left-1/2 -translate-x-1/2 top-0 rounded-full bg-transparent backdrop-blur-lg shadow-lg drop-shadow-lg`}
              >
                <div
                  className={`h-[70px] rounded-full transition-all duration-500 flex justify-between items-center `}
                >
                  <input
                    className={`h-full w-full outline-none rounded-full bg-transparent text-black placeholder:text-thid placeholder:font-medium  text-smaller ${
                      i18n.language != "en" && "text-right"
                    } ${!open && "opacity-0"}`}
                    placeholder={t("SearchProduct")}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div
                    className={`${
                      !open
                        ? " bg-black/40 shadow-2xl backdrop-blur-md rounded-full p-[8px]"
                        : "shadow-none bg-transparent"
                    }`}
                  >
                    <MdSearch
                      className={`h-[20px] w-[20px] sm:h-[40px] sm:w-[40PX] rounded-full text-med  text-primary cursor-pointer`}
                      onClick={() => {
                        if (searchTerm.length == 0) setOpen(!open);
                        else {
                          sessionStorage.setItem("searchUrl", searchTerm);
                          navigate(`/products/${searchTerm}`);
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* {!open ? (
           
            ) : (
              <div className="w-full flex justify-center items-center mt-4">
                <div
                  className={`p-[2px] rounded-lg flex justify-center items-center ${
                    open && "shadow-lg drop-shadow-lg"
                  }  transition-all duration-300`}
                >
                  <div
                    className={`h-14 transition-all duration-700 ${
                      open
                        ? "w-[150px] sm:w-[320px] md:w-[275px] bg-fourth/80 px-4 "
                        : " bg-transparent w-0 px-1 opacity-0"
                    } rounded-full transition-all duration-700 flex justify-between items-center `}
                  >
                    <input
                      className={`transition-all duration-700 ${
                        open ? "w-full" : "w-0"
                      } transition-all duration-700  h-full outline-none rounded-full bg-transparent text-black placeholder:text-thid placeholder:font-medium  text-smaller ${
                        i18n.language != "en" && "text-right"
                      }`}
                      placeholder={t("SearchProduct")}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div
                      className={`${
                        !open
                          ? " bg-black/40 shadow-2xl backdrop-blur-md rounded-full p-[8px]"
                          : "shadow-none bg-transparent"
                      }`}
                    >
                      <MdSearch
                        className={`h-[40px] w-[40PX] rounded-full text-med  text-primary cursor-pointer`}
                        onClick={() => {
                          if (searchTerm.length == 0) setOpen(!open);
                          else {
                            sessionStorage.setItem("searchUrl", searchTerm);
                            navigate(`/products/${searchTerm}`);
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )} */}
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
          <div
            className={`${i18n.language == "en" ? "pl-[10px]" : "pr-[10px]"}`}
          >
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
