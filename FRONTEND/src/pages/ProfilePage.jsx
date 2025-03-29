import React from 'react'
import Navbar from "../components/Navbar";
import { useAuthStore } from "../store/authUser";

const ProfilePage = () => {

    const { user } = useAuthStore()
  return (
    <div  className='bg-black text-white min-h-screen'>
        <Navbar/>
        <div className='bg-black flex flex-col max-w-6xl mx-auto justify-center items-center mt-15'>

            <h1 className='text-5xl'>
                Who's watching?
            </h1>
            <img src={user.image} alt='Avatar' className='h-60 rounded cursor-pointer mt-15' ></img>
            <h2 className='text-4xl mt-4'>{user.username.replaceAll("_", " ")[0].toUpperCase() + user.username.replaceAll("_", " ").slice(1)}</h2>

        </div>

    </div>
  )
}

export default ProfilePage