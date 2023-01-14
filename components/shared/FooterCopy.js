import Link from "next/link";
import React from "react";

const FooterCopy = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center text-white  mb-[80px] mt-[151px]">
        <p className="text-[14px] font-[400]">Copyright © 2022 YouGov PLC. All Rights Reserved</p>
        <div>
        <div className="flex gap-[10px] justify-center text-[14px] font-[400] ">
        <Link href="privacyPolicyPage">Privacy Policy</Link>
        <p>|</p>
        <Link href="termsAndConditionPage">Terms & Conditions</Link>
        <p>|</p>
        <Link href="cookiesPolicyPage">Cookie Policy</Link>
      </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCopy;
