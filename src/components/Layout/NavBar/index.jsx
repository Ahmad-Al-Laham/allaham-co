import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Drawer from "./Drawer";
import LinkElement from "./LinkElement";
import { MdDehaze } from "react-icons/md";
import { handleScroll } from "../../../helpers/scroll";
import { NavElement } from "../../../data/navData";
import Logo from "../../../assets/logos/logo.svg";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [header, setHeader] = useState(false);
  const [selectedLink, setSelectedLink] = useState("home");
  const navigate = useNavigate();
  const listenScrollEvent = (event) => {
    if (document.documentElement.scrollTop < 40) { //not understand
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
      <div className="h-[110px] w-full">
        <div
          className={`fixed max-w-[1920px] w-full top-2.5 left-1/2 -translate-x-1/2 z-50 flex justify-center items-center gap-x-2 sm:gap-x-6 transition-all duration-300 px-[3%]`}
        >
          <div
            dir={i18n.language == "en" ? "ltr" : "rtl"}
            className={`transition-all duration-500 p-4 2xl:p-5 flex items-center justify-between md:justify-start rounded-2xl shadow-md text-white w-full h-[75px] 2xl:h-[90px] gap-x-12 ${
              header
                ? " bg-third/90 shadow-2xl backdrop-blur-md"
                : "shadow-none bg-transparent"
            }`}
          >
            <img
              src={Logo}
              alt="Logo BIM"
              className="h-full w-[200px] cursor-pointer translate-y-1"
              onClick={() => {
                navigate("/");
              }}
            />
            <div
              className="flex justify-center items-center gap-x-8 2xl:gap-x-12 max-md:hidden !text-white"
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
                    styled={"max-lg:hidden text-white"}
                    
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
      </Drawer>
    </>
  );
};

export default NavBar;
