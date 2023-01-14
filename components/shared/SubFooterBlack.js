import React from 'react';

const SubFooterBlack = () => {
    return (
        <div className="container mx-auto">
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

export default SubFooterBlack;