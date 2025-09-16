import Link from "@/components/Link/Link";
import Heading4 from "@/components/Typography/Heading4";
import Paragraph from "@/components/Typography/Paragraph";
import { Icon } from "@iconify/react";
import React from "react";

const SuccessfulPasswordReset = ({isModalOpen, setIsModalOpen}) => {
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
        <Heading4
          blackHeading={`Successful Password reset!`}
          className={`text-center`}
        />
        <Paragraph
          blackText1={`You can now use your new password to Sign In to your account.`}
          className={`text-center py-8`}
        />
        <div className="flex justify-center">
            <Link href={`/`} variant={`black`} className={`inline-flex !rounded-full lg:px-6`} arrow>
         Sign In
        </Link>
        </div>
      </div>
    </>
  );
};

export default SuccessfulPasswordReset;
