import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  hideModal,
  selectModalData,
  selectState,
} from "../../../redux/modal.slice";
import { useTranslation } from "react-i18next";
import modalClose from "../../../assets/icons/modalClose.svg";
import instagramIcon from "../../../assets/icons/instagram.svg";
import facebookIcon from "../../../assets/icons/facebook.svg";
import linkedInIcon from "../../../assets/icons/linkedIn.svg";
import modalbg from "../../../assets/images/modalbg.svg";
import { API_BASE_URL } from "../../../constants";

export default function Modal() {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const open = useSelector(selectState);
  const data = useSelector(selectModalData);
  const { i18n } = useTranslation();
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      dispatch(hideModal());
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  return (
    <>
      <div
        className={`${
          open ? "scale-100" : "scale-0"
        } transition-all duration-500 justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none w-full h-full backdrop-blur-md`}
      >
        <div
          ref={ref}
          className="relative flex flex-col items-center justify-center outline-none focus:outline-none  max-h-screen w-full max-w-[500px]"
        >
          {/* <div
            onClick={() => {
              dispatch(hideModal());
            }}
            className={`cursor-pointer font-semibold self-center text-black hover:scale-125 hover:rotate-180 absolute ${
              i18n.language == "en" ? "right-5" : "left-5"
            }  top-2 sm:max-md:top-8 md:top-3 transition-all duration-300 z-30 bg-primary `}
          >
            <MdClose clas
            sName="text-bigger sm:text-huge" />
          </div> */}

          <div className="rounded-[50px] min-h-[300px] w-full flex flex-col justify-start items-center relative">
            <img
              src={modalbg}
              alt="modalbg"
              className="absolute top-0 left-0 w-full h-full object-contain object-center"
            />
            <div
              onClick={() => {
                dispatch(hideModal());
              }}
              className="absolute top-0 right-0 bg-whtie w-16 h-16 flex justify-center items-center"
            >
              <div className="cursor-pointer w-full h-full p-3 rounded-full bg-white flex justify-center items-center">
                <img
                  src={modalClose}
                  alt="modal Open"
                  className="w-16 h-16 object-contain object-center rounded-full"
                />
              </div>
            </div>

            <img
              src={API_BASE_URL + data?.image}// don't understand
              alt={"pop up modal"}
              className="rounded-full h-[150px] w-[150px] object-cover object-center z-20 -mt-16"
            />
            <div className="text-center space-y-2 mt-3 z-20">
              <p className="text-tiny md:text-smaller font-semibold">
                {data?.name}
              </p>
              <p className="text-[#797979]">{data?.title}</p>
            </div>
            <div className="flex justify-center items-center gap-x-4 z-20 mt-6">
              {data?.facebook !== "" && (
                <img
                  src={facebookIcon}
                  alt="facebook"
                  className="w-14 h-14 cursor-pointer"
                  onClick={() => {
                    window.open(data.facebook, "_blank", "noopener,noreferrer");
                  }}
                />
              )}
              {data?.instagram !== "" && (
                <img
                  src={instagramIcon}
                  alt="instagram"
                  className="w-14 h-14 cursor-pointer"
                  onClick={() => {
                    window.open(
                      data.instagram,
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                />
              )}
              {data?.linkedIn !== "" && (
                <img
                  src={linkedInIcon}
                  alt="linkedIn"
                  className="w-14 h-14 cursor-pointer"
                  onClick={() => {
                    window.open(data.linkedIn, "_blank", "noopener,noreferrer");
                  }}
                />
              )}
            </div>
          </div>

          <div
            dir={i18n.language == "ar" ? "rtl" : "ltr"}
            className="bg-[#F8F8F8] max-h-[300px] rounded-[50px] w-full flex flex-col justify-center items-center relative mt-3"
          >
            <p className=" py-5 w-[85%] overflow-y-auto">{data?.bio} </p>
          </div>
        </div>
      </div>
      <div
        className={`${
          open ? "scale-100" : "scale-0"
        } opacity-20 fixed h-screen inset-0 z-40 bg-black`}
      ></div>
    </>
  );
}
