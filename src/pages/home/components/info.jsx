import React from 'react'
import { useTranslation } from 'react-i18next'
const Info = () => {
   const {t} = useTranslation()

  return (
    <div className='pl-[25%] pt-[10%] md:pt-[5%] font-Bai'>
      <div className='  bg-neutral-300 max-w-[65%] p-[5%] px-[7%] rounded-md  bg-gradient-to-tr  from-white/100 shadow-lg '>
        <p className='text-small sm:text-med text-center font-bold pb-[10px]'>
        {t("infoTitle")}
        </p>
        <p className='text-center text-smaller'>
        {t("infoDescription")}
        </p>
      </div>
    </div>
  )
}

export default Info
