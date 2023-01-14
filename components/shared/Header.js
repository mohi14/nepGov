import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/logo/header-logo.png";
import phnLogo from "../../public/logo/Logo.png";
import home from "../../public/icon/home.png";
import { MdOpenInNew } from "react-icons/md";
import account from "../../public/icon/account_circle.png";
import add from "../../public/icon/add.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { CgProfile } from "react-icons/cg";
import { ImCross } from "react-icons/im";

const Header = () => {
  const [display, setDisplay] = useState(false);
  const router = useRouter();
  return (
    <div className="nav_parent bg-base-100 ">
      <div className="navbar  container mx-auto">
        <div className="navbar-start">
          <div className="dropdown ">
            <label
              onClick={() => setOpen(!open)}
              tabIndex={0}
              className="mr-[15px] flex items-center  lg:hidden"
            >
              <svg
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 12V10H18V12H0ZM0 7V5H18V7H0ZM0 2V0H18V2H0Z"
                  fill="black"
                />
              </svg>
            </label>

            {/* TODO: make loop  */}
            <ul
              tabIndex={0}
              style={{ display: display ? "none" : "block" }}
              className="menu menu-compact dropdown-content  shadow bg-base-100 pt-[48px] pl-[29px] "
            >
              <li onClick={() => setDisplay((prevDisplay) => !prevDisplay)}>
                <ImCross className="text-black" /> x
              </li>
              <li>
                <Link
                  className={
                    router.pathname == "/"
                      ? "text-black text-[16px] font-[700] mb-[32px]"
                      : "text-[#808DA5] text-[16px] font-[400] mb-[32px]"
                  }
                  href="AboutPage"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={
                    router.pathname == "/AboutPage"
                      ? "text-black text-[16px] font-[700] mb-[32px]"
                      : "text-[#808DA5] text-[16px] font-[400] mb-[32px]"
                  }
                  href="AboutPage"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className={
                    router.pathname == "voteNowPage"
                      ? "text-black text-[16px]  font-[700] mb-[32px]"
                      : "text-[#808DA5] text-[16px] font-[400] mb-[32px]"
                  }
                  href="voteNowPage"
                >
                  Vote Now <MdOpenInNew />
                </Link>
              </li>

              <li>
                <Link
                  className={
                    router.pathname == "/crimeReportPage"
                      ? "text-black text-[16px] font-[700] mb-[32px]"
                      : "text-[#808DA5] text-[16px] font-[400] mb-[32px]"
                  }
                  href="crimeReportPage"
                >
                  Crime Information <MdOpenInNew />
                </Link>
              </li>
              <hr className="w-1/2 text-black mb-[32px]" />
              <li className="text-[14px] font-[700] mb-[14px]" tabIndex={0}>
                <Link id="eng" href="/">
                  English <span className="text-[#EF4634]">(Change)</span>
                  <svg
                    className="fill-current text-[#EF4634]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </Link>
                <ul className="nav_drop p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <a>
                    <a>Submenu 2</a>
                  </a>
                </ul>
              </li>
              <li className="mb-[14px]">
                <Link
                  href="loginPage"
                  className=" login_btn gap-[2px] normal-case"
                >
                  <CgProfile /> Log in
                </Link>
              </li>
              <li>
                <Link href="signUpPage" className=" signup_btn normal-case ">
                  <Image src={add} alt="profile" /> Sign Up
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="hidden lg:block ">
            <Image src={logo} alt="logo" />
          </Link>
          <Link href="/" className="lg:hidden h-[22px] w-[87px]">
            <Image className="phn_img" src={phnLogo} alt="logo" />
          </Link>
          <div className="lg:hidden w-full flex gap-2 justify-end">
            <Link className="flex gap-2 items-center text-[12px]" href="voteNowPage">
              Vote Now <MdOpenInNew />
            </Link>

            <Link
              href="signUpPage"
              className=" bg-[#3560AD] text-white flex gap-2 items-center rounded-[50px] h-[26px] normal-case  text-[12px] px-2"
            >
              <Image className="" src={add} alt="p" /> Sign Up
            </Link>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/" className="">
                <Image src={home} alt="home" />
              </Link>
            </li>
            <li>
              <Link
                className={
                  router.pathname == "/AboutPage"
                    ? "text-black font-[700]"
                    : "text-[#808DA5]"
                }
                href="AboutPage"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className={
                  router.pathname == "/voteNowPage"
                    ? "text-black font-[700]"
                    : "text-[#808DA5]"
                }
                href="voteNowPage"
              >
                Vote Now <MdOpenInNew />
              </Link>
            </li>
            <li>
              <Link
                className={
                  router.pathname == "/crimeReportPage"
                    ? "text-black font-[700]"
                    : "text-[#808DA5]"
                }
                href="crimeReportPage"
              >
                Crime Information <MdOpenInNew />
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-[14px] hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <Link id="eng" className="gap-1" href="/">
                English<span className=" text-[#EF4634]">(Change)</span>
                <svg
                  className="fill-current text-[#EF4634]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              <ul className="nav_drop p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
          </ul>
          <Link href="loginPage" className=" login_btn gap-[6px] normal-case">
            <CgProfile /> Log in
          </Link>
          <Link href="signUpPage" className=" signup_btn normal-case">
            <Image className="mr-[7px]" src={add} alt="profile" /> Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
