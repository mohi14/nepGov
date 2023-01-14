import Link from "next/link";
import React from "react";

const SubFooter = () => {
  return (
    <div className="container mx-auto text-white">
      <hr className="hidden lg:block" />
      <div className="flex gap-[10px] justify-center lg:justify-end pt-[30px] pb-[20px]">
        <Link href="privacyPolicyPage">Privacy Policy</Link>
        <p>|</p>
        <Link href="termsAndConditionPage">Terms & Conditions</Link>
        <p>|</p>
        <Link href="cookiesPolicyPage">Cookie Policy</Link>
      </div>
    </div>
  );
};

export default SubFooter;
