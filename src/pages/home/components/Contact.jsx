import React from 'react'
import contact from '../../../assets/images/home/contact.png'
import { FaArrowCircleRight } from 'react-icons/fa'
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Arrow from "../../../assets/icons/Arrow.svg";

const Contact = () => {
    const navigate = useNavigate();
    const {i18n , t} = useTranslation();
  return (
    
<div>
  <div className='w-full h-[500px] mt-10 bg-cover bg-no-repeat'
    style={{
      backgroundImage: `url(${contact})`,
    }}
  >
    <div className='pb-[5%] bg-gradient-to-b from-black/50 via-black/50 ' dir={i18n.language === "en" ? "ltr" : "rtl"}>
      <div className=''>
        <p className='text-med text-white pt-20 px-[5%] pb-10 sm:text-big'>
          {t("contactTitle1")}
          <br />
          {t("contactTitle2")}
        </p>
      </div>
      <div>
        <p className='text-small text-white  px-[5%] pb-[5%] sm:text-med'>
          {t("contactdisc1")}
      
         
        </p>
      </div>
     <div className="text-white cursor-pointer  flex justify-start items-start  pl-[5%]    text-small right-10 " onClick={() => {
                 navigate(`/contact`)
               }}>
               <p className="bg-primary group flex px-[20px]">
                {t("ContactUs")}
                 <img src={Arrow} alt="" className="pl-[10px] group-hover:translate-x-[40%] transition-all duration-500 " />
               </p>
             </div>
    </div>
  </div>
</div>

  )
}

export default Contact
