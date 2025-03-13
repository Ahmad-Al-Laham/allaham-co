import React from 'react'
import brand from '../../../assets/images/brands/brand.jpeg'
import SearchBar from '../../searchBar/SearchBar'
const BrandsHeader = () => {
  return (
    <div>
            <div
              className="w-full h-[80vh] bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${brand})`,
              }}
            >
                <div className='flex flex-col justify-center items-center pt-[18%]  bg-gradient-to-b from-black/60 pb-[22%]'>
                    <p className='text-white text-huge font-bold' >
                        BRANDS
                    </p>
                    <div>
                    <SearchBar value={true}/>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default BrandsHeader
