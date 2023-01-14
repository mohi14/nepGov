import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/logo/footer-logo.png";
import facebook from "../../public/icon/facebook.png";
import instagram from "../../public/icon/instagram.png";
import linkedin from "../../public/icon/linkedin.png";
import twitter from "../../public/icon/twitter.png";
import youtube from "../../public/icon/youtube.png";

const Footer = () => {
  const menubar = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/",
    },
    {
      title: "Vote Now",
      path: "/",
    },
    {
      title: "Crime Information",
      path: "/",
    },
    {
      title: "Log In",
      path: "/",
    },
    {
      title: "Sign Up",
      path: "/",
    },
    {
      title: "Terms & Conditions",
      path: "termsAndConditionPage",
    },
    {
      title: "Privacy Policy",
      path: "privacyPolicyPage",
    },
    {
      title: "Cookie Policy",
      path: "cookiesPolicyPage",
    },
  ];
  return (
    <div className="footer text-white">
      <div className="container mx-auto">
        <Image src={logo} alt="logo" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[91px] my-[30px]">
          <div>
            <h6>About NepGov</h6>
            <p className="my-[17px]">
              Lorem ipsum dolor sit amet consectetur. Lacus tincidunt molestie
              malesuada ac non. Odio est morbi velit sed. Arcu semper lacus
              tincidunt tellus iaculis tincidunt proin aenean vitae.
            </p>
            <div className="flex gap-[10px] cursor-pointer">
              <Link href="#">
                {" "}
                <Image src={facebook} alt="icon" />
              </Link>
              <Link href="#">
                {" "}
                <Image src={twitter} alt="icon" />
              </Link>
              <Link href="#">
                {" "}
                <Image src={linkedin} alt="icon" />
              </Link>
              <Link href="#">
                {" "}
                <Image src={instagram} alt="icon" />
              </Link>
              <Link href="#">
                {" "}
                <Image src={youtube} alt="icon" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-[10px] lg:mx-auto pt-[61px] lg:p-0">
            {menubar.slice(0, 6).map((menu, index) => (
              <Link key={index} href={menu.path}>
                {menu.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-[10px] lg:mx-auto pt-[61px] lg:p-0">
            {menubar.slice(6, 9).map((menu, index) => (
              <Link key={index} href={menu.path}>
                {menu.title}
              </Link>
            ))}
          </div>
        </div>
        <p className="footer_hr p-0 m-0"></p>
        {/* <hr className="w-full mb-[30px] " /> */}
        <p style={{fontSize:'14px'}}>Copyright © 2022 YouGov PLC. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
