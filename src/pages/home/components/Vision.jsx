import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ourVision from '../../../assets/images/home/ourVision.png'
import Arrow from '../../../assets/icons/Arrow.svg'
const Vision = () => {
    const {i18n,t} = useTranslation()
    const navigate = useNavigate()
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 px-[10%] py-[5%] '>
        <div>
        <img src={ourVision} alt="" />
        </div>
        <div>
        <p className='text-big font-bold '>
            {t("visionTitle")}
        </p>
        <p className='text-small pt-[12%]'>
            {t("visionDesciption")}
        </p>
        <p className='flex text-primary text-small font-bold hover:underline max-w-[50%] sm:max-w-[30%] pt-[12%] cursor-pointer' onClick={() =>{
            navigate('/profile')
        }}>
        {t("OurProfile")}
        </p>
        </div>
      </div>
    </div>
  )
}

export default Vision
