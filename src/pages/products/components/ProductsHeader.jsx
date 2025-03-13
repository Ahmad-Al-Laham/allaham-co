import React from 'react'
import header from '../../../assets/images/products/header.png'
import contact from '../../../assets/images/home/contact.png'
const ProductsHeader = () => {
  return (
    <div>
            <div className='w-full h-[80vh] bg-cover bg-no-repeat'
                style={{
                  backgroundImage: `url(${header})`,
                }}
              >
        <div className="text-huge grid grid-cols-1 pt-[22%] bg-gradient-to-b from-black/60 pb-[22%]   ">
          <p className="flex justify-center text-white items-center font-bold ">
           PRODUCTS
          </p>
        </div>
                </div>
    </div>
  )
}

export default ProductsHeader
