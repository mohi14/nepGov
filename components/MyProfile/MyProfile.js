import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import UpdatePassword from './UpdatePassword';

const MyProfile = () => {
     // const { userData, setUserData } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [image, setImage] = useState(null);
  const key = "cb1d02f9d4fd8fd69411c15e571d60bf";
  function playSound() {
    const audio = new Audio(
      "https://cdn.pixabay.com/download/audio/2021/08/04/audio_0625c1539c.mp3?filename=success-1-6297.mp3%27"
    );
    audio.play();
  }

  const handleProfle = (data) => {
    // if (userData === null) {
    //     alert('Please Singup')
    //     return;
    // }
    // console.log(data);
    const image = data.image[0];

    const formData = new FormData();
    formData.append("image", image);
    const uri = `https://api.imgbb.com/1/upload?key=${key}`;
    fetch(uri, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        setImage(imgData);
      });

    const profile = {
      firstName: data.firstName,
      lastName: data.lastName,
      image: image?.data?.url,
      email: userData.email,
      birth: userData.birth,
      code: userData.code,
      gender: userData.gender,
      postcode: userData.postcode,
      password: userData.password,
      city: data.city,
      postcode: data.postcode,
      state: data.state,
      street: data.street,
    };

    setUserData(profile);
    alert("Profile Save Successfull");
    playSound();
    reset();
  };
    return (
        <section className='mx-6 md:mx-44 my-20'>
        <div>
            <h1 className='font-bold text-5xl text-black mb-8'>My Profile</h1>
            <h1 className='text-xl text-black font-bold'>Personal Details</h1>
        </div>
        <form onSubmit={handleSubmit(handleProfle)} className=''>
            <div className='grid md:grid-cols-6 gap-10 md:gap-20 '>
                <div className='col-span-4'>
                    <div className='mt-8 grid md:grid-cols-2 gap-2 md:gap-6 w-[320px] md:w-full'>
                        <div className='mb-4'>
                            <label className='text-black text-xl' htmlFor="">First Name</label>
                            <input {...register('firstName', { required: 'Name is Required' })}
                                className='block rounded-3xl w-full px-6 py-3 mt-2 border border-gray-600' type="text" name='firstName' placeholder='' />
                            {errors.firstName && <p className='text-red-600'>{errors.firstName.message}</p>}
                        </div>
                        <div className='mb-4'>
                            <label className='text-black text-xl' htmlFor="">Last Name</label>
                            <input  {...register('lastName', { required: 'Name is Required' })}
                                className='block rounded-3xl w-full px-6 py-3 mt-2 border border-gray-600' type="text" name='lastName' placeholder='' />
                            {errors.lastName && <p className='text-red-600'>{errors.lastName.message}</p>}
                        </div>
                        <div className='mb-4'>
                            <label className='text-black text-xl' htmlFor="">Street</label>
                            <input {...register('street', { required: 'street is Required' })}
                                className='block rounded-3xl w-full px-6 py-3 mt-2 border border-gray-600' type="text" name='street' placeholder='' />
                            {errors.street && <p className='text-red-600'>{errors.street.message}</p>}
                        </div>
                        <div className='mb-4'>
                            <label className='text-black text-xl' htmlFor="">City</label>
                            <input {...register('city', { required: 'city is Required' })}
                                className='block rounded-3xl w-full px-6 py-3 mt-2 border border-gray-600' type="text" name='city' placeholder='' />
                            {errors.city && <p className='text-red-600'>{errors.city.message}</p>}
                        </div>
                        <div className='mb-4'>
                            <label className='text-black text-xl' htmlFor="">State/Province</label>
                            <input {...register('state', { required: 'State/Province is Required' })}
                                className='block rounded-3xl w-full px-6 py-3 mt-2 border border-gray-600' type="text" name='state' placeholder='' />
                            {errors.state && <p className='text-red-600'>{errors.state.message}</p>}
                        </div>


                        <div className=''>
                            <label className='text-black text-xl' htmlFor="">Postcode</label>
                            <input {...register('postcode', { required: 'postcode is Required' })}
                                className='block rounded-3xl w-full px-6 py-3 mt-4 border border-gray-600' type="postcode" name='postcode' placeholder='' required />
                            {errors.postcode && <p className='text-red-600'>{errors.postcode.message}</p>}
                        </div>
                    </div>
                </div>
                <div className='col-span-2 md:mt-12 cursor-pointer'>
                    {
                        image ?
                            <div className='bg-[#EBEBEB] rounded-md flex justify-center items-center'>
                                <img className='' src={image?.data?.url} alt="" />
                            </div>
                            :
                            <div className={`bg-[#EBEBEB] rounded-md p-20 flex justify-center items-center ${errors.image && 'bg-red-600'}`}>
                                <label class="flex flex-col w-[150px] md:w-full">
                                    <div class="flex cursor-pointer flex-col items-center justify-center pt-7">
                                        <img className='w-20 cursor-pointer' src="https://i.ibb.co/ZdVGz3n/add-photo-alternate.png" alt="" />
                                        <p class="pt-1 cursor-pointer text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                            Select a photo</p>
                                    </div>
                                    <input {...register('image', { required: 'image is Required' })}
                                        type="file" name='image' class="opacity-0 cursor-pointer" />
                                </label>
                            </div>
                    }
                    {errors.image && <p className='text-red-600'>{errors.image.message}</p>}
                </div>
            </div>


            <div className=''>
                <input className='block rounded-3xl px-6 py-3 mt-4 border bg-[#3560AD] text-white text-center font-bold' type="submit" value='Save Changes' />
            </div>
        </form>

        <hr className='my-7 border border-gray-400' />

        {/* -----------Logout part---------- */}
        <UpdatePassword></UpdatePassword>
    </section >
    );
};

export default MyProfile;