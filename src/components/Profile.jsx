import React from 'react';

const Profile = () => {
    return (
        <div className='animation'>
            
            <div className="flex items-center justify-center">
        <div className="relative">
          <div className="  absolute rounded-full top-72 left-4 w-72 h-72 bg-lime-500 filter blur-2xl mix-blend-multiply opacity-75 "></div>


          <div className=" absolute rounded-full top-72 -right-4 w-72 h-72 bg-pink-500 filter blur-2xl mix-blend-multiply opacity-75  "></div>

          <div className=" absolute rounded-full top-20 -right-4 w-72 h-72 bg-violet-500 filter blur-2xl  mix-blend-multiply opacity-75  animation-delay-4s"></div>

          <div className=" absolute rounded-full top-20 -left-4 w-72 h-72 bg-amber-500 filter blur-2xl mix-blend-multiply opacity-75 "></div>

        </div>
      </div>


        </div>
    );
};

export default Profile;