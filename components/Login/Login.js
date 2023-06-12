import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../ContextAPI/AuthProvider";
import { useForm } from "react-hook-form";
import Image from "next/image";
import visibility from "../../public/icon/visibility.png";

const Login = () => {
  return (
    <div className="max-w-[441px] mx-auto bg-white shadow shadow-gray-200 mb-[301px]">
      <div className="flex justify-end  pt-[15px] pr-[15px]">
        <select id="countries" class="block  font-bold border-none">
          <option className="font-bold text-[16px]" selected>
            English <span className="text-[#EF4634]">(Change)</span>
          </option>
          <option className="text-black" value="">
            Bangla
          </option>
          <option className="text-black" value="">
            English
          </option>
          <option className="text-black" value="">
            Hindi
          </option>
        </select>
      </div>
      <div className="px-[40px] pb-[40px]">
        <h1 className="font-bold text-black text-[33px] mb-[40px]">Log in</h1>
        <form
          // onSubmit={handleSubmit(handleLogin)}
          className="w-full"
        >
          <div className="mb-4">
            <label className=" text-[16px] font-[400]" htmlFor="">
              Email Address
            </label>
            <input
              // {...register('email', { required: 'Email is Required' })}
              type="email"
              name="email"
              className="block rounded-[50px] w-full pl-[25px]  h-[44px] mb-[15px] mt-[5px] border border-gray-600"
              placeholder="Email address"
              required
            />
            {/* {errors.email && <p className='text-red-600'>{errors.email.message}</p>} */}
          </div>

          <div className="mb-4">
            <div className="relative">
              <label className=" text-[16px] font-[400]" htmlFor="">
                Password
              </label>
              <input
                // {...register('password', { required: 'Password is Required' })}
                className="block rounded-[50px] pl-[25px]  w-full h-[44px] mb-[15px] mt-[5px] border border-gray-600"
                type="password"
                name="password"
                placeholder="******"
                required
              />
              <Image
                className="absolute bottom-5 right-5"
                src={visibility}
                alt=""
              />
            </div>
            {/* {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )} */}
          </div>
          {/* {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
            {errorPassword && <p className="text-red-600">{errorPassword}</p>} */}

          <button
            className="block rounded-[50px] w-full h-[44px] border bg-[#EF4634] text-white text-center font-bold mb-[40px]"
            type="submit"
          >
            Login
          </button>
          <h1 className="text-black text-[16px] font-[400]">
            Don’t have an account?{" "}
            <Link href="signUpPage" className="text-[#EF4634] font-bold">
              Sign up
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default Login;
