import React, { useState } from "react";

import Logo from "../../../assets/logos/logo.svg";
import { NavElement } from "../../../data/navData";
import LinkElement from "../NavBar/LinkElement";
import { MdPhone, MdMail, MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  const [selectedLink, setSelectedLink] = useState("Home");

  return (
    <div className="max-w-[1920px] w-full relative space-y-10 flex flex-col justify-start items-center p-[3%] pt-0">
      <div className=" w-full rounded-3xl gap-x-5 text-white bg-third h-[95%] grid md:grid-cols-2 lg:grid-cols-3 place-items-center p-[5%] gap-12">
        <div className="space-y-10 h-full pt-2 md:max-lg:col-span-2">
          <img src={Logo} alt="LOGO" className="w-full h-[100px]" />
          <p className="text-smaller font-light">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters,
          </p>
        </div>
        <div className="space-y-3 h-full">
          <p className="px-2 py-4 cursor-pointer text-small font-medium text-fourth uppercase">
            Pages
          </p>
          {NavElement.map((e) => (
            <LinkElement
              key={e.link}
              name={e.name}
              link={e.link}
              selectedLink={selectedLink}
              styled={"!h-auto !py-2"}
              onClick={() => {
                setMobileOpen(false);
                handleScroll(e.link);
                setSelectedLink(e.link);
              }}
            />
          ))}

          <div className="flex justify-start items-center gap-x-3">
            <p className="px-2 cursor-pointer text-small font-medium text-fourth">
              Follow Us
            </p>
            <div className=" rounded-full bg-primary p-2 text-small cursor-pointer">
              <a
                href="https://www.facebook.com/elevatepremierlimo/"
                target="_blank"
              >
                <MdFacebook />
              </a>
            </div>
            <div className="rounded-full bg-primary p-2 text-small cursor-pointer">
              <a
                href="https://www.instagram.com/elevatepremierelimo?igsh=MXpoZHB4emN3dWgz&utm_source=qr"
                target="_blank"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-3 h-full">
          <p className="px-2 py-4 text-small font-medium text-fourth uppercase">
            Contact Us
          </p>

          <div className=" flex justify-start items-center gap-x-3">
            <div className=" rounded-full bg-fourth p-2 text-small">
              <MdPhone />
            </div>
            <a href="tel:949-880-1774">949-880-1774</a>
          </div>
          <div className=" flex justify-start items-center gap-x-3">
            <div className=" rounded-full bg-fourth p-2 text-small">
              <MdMail />
            </div>
            <a href="mailto:info@elevatepremierlimo.com">
              info@elevatepremierlimo.com
            </a>
          </div>
          <div className=" flex justify-start items-center gap-x-3">
            <div className=" rounded-full bg-fourth p-2 text-small">
              <MdMail />
            </div>
            <a href="mailto:contact@elevatepremierlimo.com">
              contact@elevatepremierlimo.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
