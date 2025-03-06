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

const PageLayout = ({ children }) => {
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

      <div className="flex flex-col justify-center items-center relative bg-white text-white font-light text-tiny">
        <NavBar />
        <MessageBox />
        {/* <Modal /> */}
        <GalleryModal />
        <FilterModal />
        <div className="min-h-screen w-full max-w-[1920px]">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;
