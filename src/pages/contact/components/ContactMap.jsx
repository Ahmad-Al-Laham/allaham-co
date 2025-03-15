import React from "react";
import { useTranslation } from "react-i18next";
import { MdPhone } from "react-icons/md";
import { MdMail , MdFacebook } from "react-icons/md";
import Location from "../../../assets/icons/Location.svg";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const ContactMap = () => {
  const { i18n, t } = useTranslation();

  return (
    <div  dir={i18n.language == "en" ? "ltr" : "rtl"}>
      <div className="text-black pl-[5%] pt-[5%] text-huge font-bold pl-[10%] pb-[40px]">{t("getInTouch")}</div>
      <div className="rounded">
        <div className="flex flex-col md:flex-row justify-center rounded px-[10%]">
          <div className="rounded w-[100%] md:w-[70%] pb-[10%]  md:pb-[0px]">
            <iframe
              width="100%"
              height="700"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13309.075780436251!2d36.31212169763502!3d33.49437922223379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e127e821d8cf%3A0xf29c9c7e22f22e81!2z2KzYp9mF2Lkg2KfZhNix2ZHYttin!5e0!3m2!1sar!2sus!4v1741681792516!5m2!1sar!2sus"
              style={{
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
              }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="bg-primary bg-gradient-to-t from-black/60 p-[20px] text-small md:text-med rounded-r text-white w-[100%] md:w-[30%] ">
            <div className="font-medium">{t("ContactInfo")}</div>
            <div>
              <div className="space-y-3 h-full pt-[20px]">
                <div className=" flex justify-start items-center gap-x-3"></div>

                <div className=" flex justify-start items-center gap-x-3">
                  <div className="  p-2 text-med">
                    <MdPhone />
                  </div>
                  <a href="tel:949-880-1774" className="text-tiny lg:text-small">
                    949-880-1774
                  </a>
                </div>
                <div className=" flex justify-start items-center gap-x-3">
                  <div className="  p-2 text-med">
                    <MdMail />
                  </div>
                  <a href="mailto:allaham@gmail.com" className="text-tiny lg:text-small text-center">
                    allaham@gmail.com
                  </a>
                </div>
                <div className="flex">
                  <div className="pb-10">
                    <img src={Location} alt="" />
                  </div>
                  <p className="text-tiny lg:text-small font-light">
                    Syria - Damascus - dumer
                    <br />
                    Al Mazraa Street
                  </p>
                </div>
              </div>
              <div>
                <div className="space-y-3 h-full items-end justify-end mt-[50%]">
                  <p className="px-2 py-4 cursor-pointer text-smaller md:text-small font-medium text-white uppercase">
                    {t("FollowUs")}
                  </p>
                  <div className="grid grid-cols-2 lg:grid-cols-4">
                    <div className="  p-2 text-small lg:text-med cursor-pointer">
                      <a
                        href="https://www.facebook.com/elevatepremierlimo/"
                        target="_blank"
                      >
                        <MdFacebook />
                      </a>
                    </div>
                    <div className=" p-2 text-small lg:text-med cursor-pointer">
                      <a
                        href="https://www.instagram.com/elevatepremierelimo?igsh=MXpoZHB4emN3dWgz&utm_source=qr"
                        target="_blank"
                      >
                        <FaInstagram />
                      </a>
                    </div>
                    <div className=" p-2 text-small lg:text-med cursor-pointer">
                      <a
                        href="https://www.instagram.com/elevatepremierelimo?igsh=MXpoZHB4emN3dWgz&utm_source=qr"
                        target="_blank"
                      >
                        <FaWhatsapp />
                      </a>
                    </div>
                    <div className=" p-2 text-small lg:text-med cursor-pointer">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
