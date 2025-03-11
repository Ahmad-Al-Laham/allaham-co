import React from 'react'
import contact from '../../../assets/images/home/contact.png'
import { FaArrowCircleRight } from 'react-icons/fa'
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

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
      <div className='px-[5%] mt-[10px]'>
        <a href='/contact' className='bg-primary p-3 text-white  text-sm sm:text-med bg-gradient-to-l from-black/60'>
          {t("ContactButton")}
        </a>
      </div>
    </div>
  </div>
</div>

  )
}

export default Contact
