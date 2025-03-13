import React from 'react'
import ProfileHeaderI from '../../../assets/images/Profile/ProfileHeader.png'
const ProfileHeader = () => {
  return (
    <div className=' max-w-[1920px] flex flex-col '>
        <div className='w-full h-[100vh]  bg-cover bg-no-repeat '
          style={{
            backgroundImage: `url(${ProfileHeaderI})`,
          }}
        >
          <div className='text-huge grid grid-cols-1 pt-[22%] pb-[22%] bg-gradient-to-b from-black/60   '>
          <p className='flex justify-center text-white items-center font-bold '>
          OUR PROFILE
          </p>

          </div>
        </div>
    </div>
  )
}

export default ProfileHeader
