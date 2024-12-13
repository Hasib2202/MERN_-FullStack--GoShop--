import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { TbUserSquareRounded } from "react-icons/tb";
import UserProfileAvatarEdit from '../components/UserProfileAvatarEdit';

const Profile = () => {

    const user = useSelector(state => state?.user)
    const [openProfileAvatarEdit,setProfileAvatarEdit] = useState(false)
  return (
    <div>
      <div className='flex items-center justify-center w-20 h-20 overflow-hidden bg-red-500 rounded-full drop-shadow-sm'>
        {
            user.avatar ? (
                <img
                   alt={user.name}
                   src={user.avatar}
                   className='w-full h-full'
                />
            ) : (
                <TbUserSquareRounded size={65}/>
            )
        }

      </div>
      <button onClick={()=>setProfileAvatarEdit(true)} className='px-3 py-1 mt-3 text-sm border rounded-full min-w-20 border-primary-100 hover:border-primary-200 hover:bg-primary-200'>Edit</button>
      {
        openProfileAvatarEdit && (
            <UserProfileAvatarEdit close={()=>setProfileAvatarEdit(false)}/> 
        )
      }
    </div>
  )
}

export default Profile
