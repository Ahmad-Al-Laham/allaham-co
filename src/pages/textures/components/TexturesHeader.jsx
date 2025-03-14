import React from 'react'
import texturesHeader from '../../../assets/images/textures/texturesHeader.png'
import SearchBar from '../../products/components/SearchBar'
import { useTranslation } from 'react-i18next'
const TexturesHeader = () => {
  const {i18n , t} = useTranslation()
  return (
    <div>
            <div
              className="w-full h-[80vh] bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${texturesHeader})`,
              }}
            >        <div className="text-huge grid grid-cols-1 pt-[18%] bg-gradient-to-b from-black/60 pb-[10%]   ">
            <p className="flex justify-center text-white items-center font-bold ">
              {t("Textures")}
            </p>
            <div className='rounded-full'>
                    <SearchBar value={true} page={`textures`}/>
                    </div>
          </div></div>
    </div>
  )
}

export default TexturesHeader
