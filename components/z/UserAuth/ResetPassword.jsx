import Heading5 from "@/components/Typography/Heading5";
import Paragraph from "@/components/Typography/Paragraph";
import { Icon } from "@iconify/react";
import React from "react";

const ResetPassword = ({ isModalOpen, setFormType, }) => {
  return (
    <>
      <div className="absolute right-4 top-4">
        {isModalOpen && (
          <Icon
            icon="mdi:close"
            width="1.6rem"
            height="1.6rem"
            className="cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          />
        )}
      </div>

      <div className="max-w-[1024px]">
        <Heading5
          blackHeading={`Successful Password reset!`}
          className={`text-center`}
        />
        <Paragraph
          blackText1={`You can now use your new password to Sign In to your account.`}
          className={`text-center`}
        />
        <div className="flex justify-center">
          <p
              onClick={() => setFormType("signin")}
              className="underline cursor-pointer displayAnchor bg-primary px-4 py-2 text-white rounded-md border border-primaryDark"
            >
              Sign in
            </p>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
