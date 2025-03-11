import React from 'react'
import ProfileHeaderI from '../../../assets/images/Profile/ProfileHeader.png'
const ProfileHeader = () => {
  return (
    <div className=' max-w-[1920px] flex flex-col '>
        <div className='w-full h-[80vh]  bg-cover bg-no-repeat'
          style={{
            backgroundImage: `url(${ProfileHeaderI})`,
          }}
        >
          <div className='text-huge grid grid-cols-1 pt-[15%]'>
          <p className='flex justify-center text-white items-center '>
          Allaham Trading co
          </p>
          <p className='flex justify-center text-white items-center '>
          profile
          </p>
          </div>
        </div>
    </div>
  )
}

export default ProfileHeader
