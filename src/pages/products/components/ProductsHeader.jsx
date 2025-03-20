import React from 'react'
import header from '../../../assets/images/products/header.png'
import contact from '../../../assets/images/home/contact.png'
import SearchBar from './SearchBar'
import { useTranslation } from 'react-i18next'
const ProductsHeader = () => {
  const {i18n , t} = useTranslation()
  return (
    <div>
            <div className='w-full h-[80vh] bg-cover bg-no-repeat'
                style={{
                  backgroundImage: `url(${header})`,
                }}
              >
        <div className="text-huge grid grid-cols-1 pt-[18%] bg-gradient-to-b from-black/60 pb-[15%]   ">
          <p className="flex justify-center text-white items-center font-bold ">
           {t("products")}
          </p>
          <div className='rounded-full'>
                    <SearchBar value={true} />
                    </div>
        </div>
                </div>
    </div>
  )
}

export default ProductsHeader
