import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const SocialAuthentication = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center sm:gap-6 gap-3 pt-4">
        <Link href={`/`}>
          <div className="flex items-center gap-2">
            <Icon
              icon="flat-color-icons:google"
              width="1.5rem"
              height="1.5rem"
              className="mx-auto"
            />
          </div>
        </Link>
        <Link href={`/`}>
          <div className="flex items-center gap-2">
            <Icon
              icon="logos:facebook"
              width="1.5rem"
              height="1.5rem"
              className="mx-auto"
            />
          </div>
        </Link>
        <Link href={`/`}>
          <div className="flex items-center gap-2">
            <Icon
              icon="devicon:apple"
              width="1.5rem"
              height="1.5rem"
              className="mx-auto"
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default SocialAuthentication;
