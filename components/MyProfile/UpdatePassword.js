import React from "react";
import { useForm } from "react-hook-form";

const UpdatePassword = () => {
  // const { userData, setUserData } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function playSound() {
    const audio = new Audio(
      "https://cdn.pixabay.com/download/audio/2021/08/04/audio_0625c1539c.mp3?filename=success-1-6297.mp3%27"
    );
    audio.play();
  }

  const userPasswordUpdate = (data) => {
    // console.log(userData);
    const UpadateProfile = {
      firstName: userData?.firstName,
      lastName: userData?.lastName,
      email: userData.email,
      birth: userData.birth,
      code: userData.code,
      gender: userData.gender,
      password: data.confirmNewPassword,
      city: userData?.city,
      postcode: userData?.postcode,
      state: userData?.state,
      street: userData.street,
    };
    setUserData(UpadateProfile);
    alert("User Password Upadate Successfull");
    playSound();
    reset();
  };

  // handle password
  const handlePassword = (data) => {
    // console.log(data);
    if (data.confirmNewPassword !== data.newPassword) {
      alert("confirmNewPassword and new password not mathcing");
      return;
    }
    if (data.email !== userData.email) {
      alert("email is Not Mathcing");
      return;
    }
    if (data.currentPassword !== userData.password) {
      alert("current Password is Wrong");
      return;
    } else {
      userPasswordUpdate(data);
    }
  };
  return (
    <form onSubmit={handleSubmit(handlePassword)} className="">
      <div>
        <div className="mt-8 md:w-96 gap-6">
          <div className="mb-4">
            <label className="text-black text-xl" htmlFor="">
              Email Address
            </label>
            <input
              {...register("email", { required: "email is Required" })}
              className="block rounded-3xl w-full px-6 py-3 mt-2 border border-gray-600"
              type="email"
              name="email"
              placeholder="saul.ramirez@gmail.com"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="text-black text-xl" htmlFor="">
              Current Password
            </label>
            <input
              {...register("currentPassword", {
                required: "current Password is Required",
              })}
              className="block rounded-3xl w-full px-6 py-3 mt-2 border border-gray-600"
              type="password"
              name="currentPassword"
              placeholder="******"
            />
            {errors.currentPassword && (
              <p className="text-red-600">{errors.currentPassword.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="text-black text-xl" htmlFor="">
              New Password
            </label>
            <input
              {...register("newPassword", {
                required: "new Password is Required",
              })}
              className="block rounded-3xl w-full px-6 py-3 mt-2 border border-gray-600"
              type="password"
              name="newPassword"
              placeholder="******"
            />
            {errors.newPassword && (
              <p className="text-red-600">{errors.newPassword.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="text-black text-xl" htmlFor="">
              Confirm New Password
            </label>
            <input
              {...register("confirmNewPassword", {
                required: "Confirm New Password is Required",
              })}
              className="block rounded-3xl w-full px-6 py-3 mt-2 border border-gray-600"
              type="password"
              name="confirmNewPassword"
              placeholder="******"
            />
            {errors.confirmNewPassword && (
              <p className="text-red-600">
                {errors.confirmNewPassword.message}
              </p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="flex items-center  gap-2 border border-[#3560AD] duration-300 hover:bg-[#3560AD] rounded-3xl py-3 px-4"
        >
          <h1 className="text-[#3560AD] duration-300 hover:text-white font-bold">
            Change Password
          </h1>
        </button>
      </div>
      <hr className="my-7 border border-gray-400" />
      <div className="w-fit flex items-center rounded-3xl px-6 py-3 mt-2 border bg-[#3560AD] text-white text-center font-bold">
        <button className="" type="submit">
          Logout
        </button>
        <img
          className="w-5 ml-4"
          src="https://i.ibb.co/cg49ng8/logout.png"
          alt=""
        />
      </div>
    </form>
  );
};

export default UpdatePassword;
