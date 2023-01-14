import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import back from "../../../public/icon/back.png";
import checkbox from "../../../public/icon/red_check_box.png";
import visibility from "../../../public/icon/visibility.png";
import { useForm } from "react-hook-form";

const SignUp = () => {
  //   const { userData, setUserData } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [next, setNext] = useState(1);
  const [permit, setPermit] = useState(false);
  const [gender, setGender] = useState("");

  const handleChange = (event) => {
    if (event.target.checked) {
      setPermit(true);
    } else {
      setPermit(false);
    }
  };

  const handleSignup = (data) => {
    setUserData(data);
  };

  return (
    <section className="sign_up">
      <form onChange={handleSubmit(handleSignup)}>
        {next === 1 && (
          <div className="max-w-[681px] bg-white  lg:mb-[195px] mx-auto ">
            <div className="flex justify-end ">
              <select
                id="countries"
                class="block  border-none mt-[17px] mr-[20px] text-[16px] font[700]"
              >
                <option className="" selected>
                  <span className="">English</span> (Change)
                </option>
                <option className="" value="">
                  Bangla
                </option>
                <option className="" value="">
                  English
                </option>
                <option className="" value="">
                  Hindi
                </option>
              </select>
            </div>
            <div className="px-[40px] pb-[30px]">
              <h1 className=" text-black text-[33px] font-[700] mb-[10px]">
                Welcome to NepGov
              </h1>
              <p className="text-[16px] font-[400] mb-[45px]">
                Let's get started with some basic questions. Please confirm that
                you live in the United Kingdom.
              </p>
              <div className="">
                <div className="mb-[15px]">
                  <label
                    className="text-black font-[400] text-[16px]"
                    htmlFor=""
                  >
                    Email Address
                  </label>
                  <input
                    {...register("email", { required: "Email is Required" })}
                    className="block rounded-[50px] w-full pl-[25px] py- mt-[5px] border border-[#C7C7C7] h-[44px] "
                    type="email"
                    name="email"
                    placeholder="example@example.com"
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="relative mb-[45px]">
                  <div className="relative ">
                    <label
                      className="text-black font-[400] text-[16px]"
                      htmlFor=""
                    >
                      Set a Password
                    </label>
                    <input
                      {...register("password", {
                        required: "Password is Required",
                      })}
                      className="block rounded-[50px] w-full pl-[25px] py- mt-[5px] border border-[#C7C7C7] h-[44px] "
                      type="password"
                      name="password"
                      placeholder="******"
                      required
                    />
                    <Image
                      className=" absolute bottom-4 right-4"
                      src={visibility}
                      alt="icon"
                    />
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* <div class="flex items-center mb-[40px]">
                  <input
                    onChange={handleChange}
                    id="link-checkbox"
                    type=" checkbox"
                    class=" checkbox checkbox-error "
                  />
                  <label
                    for="link-checkbox"
                    class="ml-2 text-[16px] font-[400] "
                  >
                    I agree to the{" "}
                    <Link href="termsAndConditionPage" class=" underline">
                      Terms and Conditions,
                    </Link>{" "}
                    and acknowledge the{" "}
                    <Link className="underline" href="privacyPolicyPage">
                      {" "}
                      privacy notice.{" "}
                    </Link>
                  </label>
                </div> */}

                <label
                  for="link-checkbox"
                  class="cursor-pointer label justify-start gap-[21px]"
                >
                  <input
                    id="link-checkbox"
                    onChange={handleChange}
                    type="checkbox"
                    class="checkbox checkbox-error"
                  />
                  <span class="label-text text-[16px] font-[400]">
                    {" "}
                    I agree to the{" "}
                    <Link href="termsAndConditionPage" class=" underline">
                      Terms and Conditions,
                    </Link>{" "}
                    and acknowledge the{" "}
                    <Link className="underline" href="privacyPolicyPage">
                      {" "}
                      privacy notice.{" "}
                    </Link>
                  </span>
                </label>

                <hr className="" />
                <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-[20px]">
                  <h1 className="text-black text-[16px] font-[400]">
                    Already have an account?{" "}
                    <Link href="loginPage" className="text-[#EF4634] ">
                      Sign in
                    </Link>
                  </h1>

                  {permit ? (
                    <div
                      onClick={() => setNext(next + 1)}
                      className="w-full md:w-fit"
                    >
                      <button className="block cursor-pointer w-full h-[44px] w-[130px]  rounded-[50px]  bg-[#EF4634] text-white text-center  text-[18px] font-[700]">
                        Next
                      </button>
                    </div>
                  ) : (
                    <div className="w-full md:w-fit">
                      <button className="block w-full cursor-not-allowed h-[44px] w-[130px] rounded-[50px]  bg-gray-600 text-white text-center text-[18px] font-[700]">
                        Next
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {next === 2 && (
          <div className="w-full md:w-[680px]  bg-white shadow shadow-gray-200 mx-auto lg:mb-[195px] px-[40px] pb-[40px] pt-[86px]">
            <div className="flex justify-start">
              <Image
                onClick={() => setNext(next - 1)}
                className=" cursor-pointer mb-[74px]  "
                src={back}
                alt="icon"
              />
            </div>
            <div className="">
              <h1 className="font-bold text-black text-[28px] mb-[70px]">
                In what year were you born?
              </h1>
              <div className=" w-full">
                <div className="">
                  <label
                    className="text-black text-[16px] font-[400]"
                    htmlFor=""
                  >
                    Year of Birth
                  </label>
                  <input
                    {...register("birth", {
                      required: "Year of Birth is Required",
                    })}
                    className="block border h-[44px] rounded-[50px] w-full mt-[5px] mb-[116px] pl-[25px]"
                    type="text"
                    name="birth"
                    placeholder="Ex. 2000"
                    required
                  />
                  {errors.birth && (
                    <p className="text-red-600">{errors.birth.message}</p>
                  )}
                </div>

                <hr className="mb-[20px]" />
                <div className="flex justify-end items-center">
                  {errors.birth ? (
                    <div className="w-full cursor-not-allowed md:w-fit">
                      <button className="block w-full cursor-not-allowed rounded-[50px] h-[44px] w-[130px]  border bg-gray-600 text-white text-center font-bold">
                        Next
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => setNext(next + 1)}
                      className="w-full cursor-pointer md:w-fit"
                    >
                      <button className="block w-full  rounded-[50px] h-[44px] w-[130px] border bg-[#EF4634] text-white text-center font-bold">
                        Next
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {next === 3 && (
          <div className="w-full max-w-[680px]  bg-white shadow shadow-gray-200 mx-auto lg:mb-[195px] px-[40px] pb-[40px] pt-[86px]">
            <div className="flex justify-start ">
              <Image
                onClick={() => setNext(next - 1)}
                className="cursor-pointer mb-[70px]"
                src={back}
                alt="icon"
              />
            </div>
            <div className="">
              <h1 className="font-bold text-black text-[28px] mb-[70px]">
                Are you...?
              </h1>
              <div className=" w-full">
                <div className="">
                  <label
                    className="text-black text-[16px] font-[400] "
                    htmlFor=""
                  >
                    Gender
                  </label>
                  <div className="grid md:grid-cols-3 gap-6 cursor-pointer mt-[5px] mb-[116px]">
                    <input
                      onClick={() => setGender("male")}
                      {...register("gender", {
                        required: "Gender is Required",
                      })}
                      className={`cursor-pointer gender text-center text-[#808DA5] h-[44px] hover:bg-orange-600 hover:text-white hover:border-0 duration-300 ease-in rounded-[50px] w-full  border border-[#808DA5] ${
                        gender === "male" && "bg-orange-600 border-0 gender_active"
                      }`}
                      readOnly
                      value={gender}
                      name="gender"
                      placeholder="Male"
                    />

                    <input
                      onClick={() => setGender("female")}
                      {...register("gender", {
                        required: "Gender is Required",
                      })}
                      className={`cursor-pointer gender text-center text-[#808DA5] hover:bg-orange-600 hover:text-white hover:border-0 duration-300 ease-in rounded-[50px] h-[44px] w-full px-6 py-3 border border-[#808DA5] ${
                        gender === "female" &&
                        "bg-orange-600 border-0 gender_active"
                      }`}
                      readOnly
                      value={gender}
                      name="gender"
                      placeholder="Female"
                    />

                    <input
                      onClick={() => setGender("other")}
                      {...register("gender", {
                        required: "Gender is Required",
                      })}
                      className={`cursor-pointer gender text-center text-[#808DA5] hover:bg-orange-600 hover:text-white hover:border-0 duration-300 ease-in rounded-[50px] h-[44px] w-full px-6 py-3 border border-[#808DA5] ${
                        gender === "other" &&
                        "bg-orange-600 border-0 gender_active"
                      }`}
                      readOnly
                      value={gender}
                      name="gender"
                      placeholder="Other"
                    />
                  </div>
                  {errors.gender && (
                    <p className="text-red-600">{errors.gender.message}</p>
                  )}
                </div>

                <hr className="mb-[20px]" />
                <div className="flex justify-end items-center">
                  {!gender ? (
                    <div className="w-full cursor-not-allowed md:w-fit">
                      <button className="block w-full cursor-not-allowed rounded-[50px] h-[44px] w-[130px]  border bg-gray-600 text-white text-center font-bold">
                        Next
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => setNext(next + 1)}
                      className="w-full cursor-pointer md:w-fit"
                    >
                      <button className="block w-full  rounded-[50px] h-[44px] w-[130px]   border bg-[#EF4634] text-white text-center font-bold">
                        Next
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        {next === 4 && (
          <div className="w-full max-w-[680px] bg-white shadow shadow-gray-200 mx-auto lg:mb-[195px] px-[40px] pb-[40px] pt-[86px]">
            <div className="flex justify-start px-6 pt-4">
              <Image
                onClick={() => setNext(next - 1)}
                className=" cursor-pointer mb-[70px] "
                src={back}
                alt="icon"
              />
            </div>
            <div>
              <h1 className="font-bold text-black text-[28px] mb-[70px]">
                Postcode
              </h1>
              <div className=" w-full">
                <div className="">
                  <label
                    className="text-black text-[16px] font-[400]"
                    htmlFor=""
                  >
                    Postcode
                  </label>
                  <input
                    {...register("postcode", {
                      required: "postcode is Required",
                    })}
                    className="block rounded-[50px] h-[44px] w-full  border pl-[25px] mt-[5px] mb-[116px]"
                    type="text"
                    name="postcode"
                    placeholder="Ex. SW1W 0NY"
                    required
                  />
                  {errors.postcode && (
                    <p className="text-red-600">{errors.postcode.message}</p>
                  )}
                </div>

                <hr className="mb-[20px]" />
                <div className="flex justify-end items-center">
                  {errors.postcode ? (
                    <div className="w-full cursor-not-allowed md:w-fit">
                      <button className="block w-full cursor-not-allowed rounded-[50px] h-[44px] w-[130px] border bg-gray-600 text-white text-center font-bold">
                        Next
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => setNext(next + 1)}
                      className="w-full cursor-pointer md:w-fit"
                    >
                      <button className="block w-full  rounded-[50px] h-[44px] w-[130px] border bg-[#EF4634] text-white text-center font-bold">
                        Next
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        {next === 5 && (
          <div className="w-full md:w-[680px]  bg-white shadow shadow-gray-200 mx-auto lg:mb-[195px] px-[40px] pb-[40px] pt-[86px]">
            <div className="flex justify-start">
              <Image
                onClick={() => setNext(next - 1)}
                className="cursor-pointer mb-[70px]"
                src={back}
                alt=""
              />
            </div>
            <div className="">
              <h1 className="font-bold text-black text-[28px] mb-[10px] ">
                Please check your email
              </h1>
              <p className="text-[16px] font-[400] mb-[70px]">
                We’ve sent a code to kpbhatta@gmail.com to verify your email
                address. Please enter that code below to activate your account.
              </p>
              <div className="w-full">
                <div className="">
                  <label
                    className="text-black text-[16px] font-[400]"
                    htmlFor=""
                  >
                    Code
                  </label>
                  <input
                    {...register("code", { required: "code is Required" })}
                    className="block rounded-[50px] w-full  border mt-[5px] pl-[25px] h-[39px] mb-[76px]"
                    type="text"
                    name="code"
                    placeholder="123456"
                    required
                  />
                </div>

                <hr className=" mb-[20px]" />
                <div className="flex justify-end items-center">
                  {errors.code ? (
                    <div className="w-full cursor-not-allowed md:w-fit">
                      <button className="block w-full cursor-not-allowed rounded-[50px] h-[44px] w-[130px]  border bg-gray-600 text-white text-center font-bold">
                        Next
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => setNext(next + 1)}
                      className="w-full cursor-pointer md:w-fit"
                    >
                      <button
                        className="block w-full  rounded-[50px] h-[44px] w-[130px] border bg-[#EF4634] text-white text-center font-bold"
                        type="submit"
                      >
                        Next
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </form>
      {next === 6 && (
        <div className="w-full flex justify-center items-center max-w-[680px]  bg-white shadow shadow-gray-200 mx-auto lg:mb-[195px] px-[135px]  py-[168px]">
          <div className="w-72">
            <Image className=" mb-8" src={checkbox} alt="icon" />
            <h1 className="font-bold text-black text-[33px] mb-[3px]">
              Congratulations
            </h1>
            <p className="text-[16px] font-[400] mb-[20px]">
              Your account was successfully created.
            </p>
            <div onClick={() => setNext(next + 1)} className="">
              <Link
                href="/"
                className="  rounded-[50px] h-[44px] w-[171px] flex items-center justify-center border bg-[#EF4634] text-white text-center font-bold"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SignUp;
