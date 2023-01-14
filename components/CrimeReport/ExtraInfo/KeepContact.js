import React from "react";
import BtnBackNext from "../../shared/BtnBackNext";
import BtnBackSubmit from "../../shared/BtnBackSubmit";

const KeepContact = () => {
  return (
    <div className="custom__container mx-auto mb-[40px]">
      <div className="bg-white lg:px-[129px] py-[89px] px-[20px]">
        <p className="qus">
          Do any of the people involved in the crime have access to a
          weapon/weapons?
        </p>
        <p className="keep_content mb-[31px]">
          If we need to clarify any of your information or you think there might
          be extra information you can give, are you prepared to create an
          anonymous login?
        </p>
        <p id="cancel" style={{marginBottom:"10px"}}>Would you like to keep in contact?</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px]">
          <p className="flex items-center bg-[#3560AD] px-[25px] text-white rounded-[10px] keep_card_content keep_card">
            Yes create me an anonymous login in case you have more questions
          </p>
          <p className="flex items-center border border-1 rounded-[10px] px-[25px]  keep_card_content keep_card">
            No, I've given you all the info you will need
          </p>
        </div>
        <label class="cursor-pointer label justify-start gap-[24px] mb-[42px]">
          <input
            type="checkbox"
            //   checked="checked"
            class="checkbox checkbox-error"
          />
          <span className="checkbox_content">
            By opting in to the Keep in Contact portal I understand I am setting
            up an anonymous two-way communication channel with Crimestoppers. I
            understand that Crimestoppers will make sure that any information I
            provide is shared with police 100% anonymously, and that police may
            ask follow-up questions through the charity on this platform
          </span>
        </label>
        <BtnBackSubmit page="receivedSmsPage" />
      </div>
    </div>
  );
};

export default KeepContact;
