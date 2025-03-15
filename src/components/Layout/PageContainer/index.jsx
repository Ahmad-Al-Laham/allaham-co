import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import useWindowDimensions from "../../../hooks/screenDimentions";
import Loader from "../../UI/Loader";
// import Modal from "../../UI/Modal/Modal";
import GalleryModal from "../../UI/GalleryModal";
import MessageBox from "../../UI/Message";
import FilterModal from "../../UI/FilterModal/FilterModal";
import { useLocation } from "react-router-dom";
import { MdContactPage } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const PageLayout = ({ children }) => {
  const navigate = useNavigate()
  const {i18n , t} = useTranslation()
  const { width } = useWindowDimensions();
  const [w, setW] = useState(width);
  const location = useLocation();
  useEffect(() => {
    if (width !== w) {
      window.location.reload();
    }
    setW(width);
  }, [width]);

  // const [fakeLoader, setFakeLoader] = useState(true);
  // useEffect(() => {
  //   setFakeLoader(true);

  //   setTimeout(() => {
  //     setFakeLoader(false);
  //   }, 700);
  // }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {/* {fakeLoader && (
        <div className="flex flex-row justify-center items-center h-screen bg-secondary fixed inset-0 z-50">
          <Loader />
        </div>
      )} */}

      <div className="flex flex-col justify-center items-center relative bg-white text-black font-light text-tiny">
        <NavBar />
        <MessageBox />
        {/* <Modal /> */}
        <GalleryModal />
        <FilterModal />
        <div className="min-h-screen w-full max-w-[1920px]">{children}</div>
        <Footer />
        {location.pathname !== "/contact" && (
          <div className="fixed group flex justify-center items-center bottom-3 md:bottom-5 right-3 md:right-5 z-40">
            <div className="transition-all duration-500 font-semibold text-white bg-black/40 shadow-2xl drop-shadow-2xl backdrop-blur-[200px] px-3 py-1 rounded-full translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 cursor-pointer z-10">
              {t("ContactUs")}
            </div>
            <div
              className="group flex items-center justify-center bg-primary text-white p-3 m-3 rounded-full cursor-pointer z-20 shadow-2xl drop-shadow-2xl"
              onClick={() => {
                navigate("/Contact");
              }}
            >
              <MdContactPage className="text-[30px] md:text-[40px]" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PageLayout;
