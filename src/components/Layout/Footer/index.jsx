import React, { useState } from "react";

import Logo from "../../../assets/logos/logo.svg"
import { NavElement } from "../../../data/navData";
import LinkElement from "../NavBar/LinkElement";
import { MdPhone, MdMail, MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import Location from '../../../assets/icons/Location.svg'
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const {i18n , t} = useTranslation();
  const [selectedLink, setSelectedLink] = useState("Home");

  return (
    <div className="max-w-[1920px] w-full relative space-y-10 flex flex-col justify-start items-center font-Bai">
      <div className=" w-full  gap-x-5 bg-primary text-white bg-gradient-to-r from-black/60 h-[95%] grid md:grid-cols-2 lg:grid-cols-3 place-items-center p-[2%] gap-12">
        <div className="space-y-10 h-full pt-2 md:max-lg:col-span-2">
          <img src={Logo} alt="LOGO" className="w-full h-[100px]" />
            <div className="flex">
              <div  className="pb-10">
            <img src={Location} alt="" />
            </div>
            <p className="text-smaller font-light" >
          Syria -  Damascus - dumer
          <br />
          Al Mazraa Street
          </p>

            </div>
        </div>
        
        <div className="space-y-3 h-full">
          <p className="px-2 py-4 text-small font-medium text-white uppercase">
            {t("ContactInfo")}
          </p>

          <div className=" flex justify-start items-center gap-x-3">
            <div className="  p-2 text-med">
              <MdPhone />
            </div>
            <a href="tel:949-880-1774">949-880-1774</a>
          </div>
          <div className=" flex justify-start items-center gap-x-3">
            <div className="  p-2 text-med">
              <MdMail />
            </div>
            <a href="mailto:allaham@gmail.com">
            allaham@gmail.com
            </a>
          </div>
          <div className=" flex justify-start items-center gap-x-3">

          </div>
        </div>
        <div className="space-y-3 h-full">
          <p className="px-2 py-4 cursor-pointer text-small font-medium text-white uppercase">
            {t("FollowUs")}
          </p>
          <div className="flex justify-start items-center gap-x-3">

            <div className="  p-2 text-big cursor-pointer">
              <a
                href="https://www.facebook.com/elevatepremierlimo/"
                target="_blank"
              >
                <MdFacebook />
              </a>
            </div>
            <div className=" p-2 text-big cursor-pointer">
              <a
                href="https://www.instagram.com/elevatepremierelimo?igsh=MXpoZHB4emN3dWgz&utm_source=qr"
                target="_blank"
              >
                <FaInstagram />
              </a>

            </div>
            <div className=" p-2 text-big cursor-pointer">
              <a
                href="https://www.instagram.com/elevatepremierelimo?igsh=MXpoZHB4emN3dWgz&utm_source=qr"
                target="_blank"
              >
                < FaWhatsapp />
              </a>

            </div>
            <div className=" p-2 text-big cursor-pointer">
              <a
                href="https://www.instagram.com/elevatepremierelimo?igsh=MXpoZHB4emN3dWgz&utm_source=qr"
                target="_blank"
              >
                <FaLinkedin />
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
