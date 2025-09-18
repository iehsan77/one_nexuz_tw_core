"use client";
import React, { useContext, useState } from "react";
import Image from "../Image/Image";
import useVendorStore from "@/stores/vendor-store";
import Heading2 from "../Typography/Heading2";
import Button from "../Button/Button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { LOG_OUT } from "@/actions/actions";
import LanguageAwareLink from "../LanguageAwareLink/LanguageAwareLink";
import { textToRouteUrl } from "@/utils/apiHelper";
import { Icon } from "@iconify/react";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";

const UserInformation = () => {
  const { vendor, setVendor } = useVendorStore();
  const router = useRouter();
  const [loading, setLoading] = useState();
  const { locale } = useContext(LanguageContext);

  const handleLogOut = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push(`/${locale}`);
      LOG_OUT();
      setVendor({});
      localStorage.removeItem("vendor-storage");
      toast.success("Logged out successfully");
    }, 500);
  };

  return (
    <>
      <section className="secPadding p-4">
        <div className="container bg-secondaryLight secPadding relative">
          <div className="xs:max-w-2xl w-full">
            <div className="flex items-center gap-4 pb-6">
              <div className="h-[100px] sm:h-[150px] w-[100px] sm:w-[150px] rounded-full border border-gray-300 overflow-hidden">
                <Image
                  src={vendor?.profile_image || "/assets/images/avatar.png"}
                  width={150}
                  height={150}
                  alt={`Auth Image`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="">
                <Heading2
                  className={`!text-secondary`}
                  blackHeading={vendor?.first_name}
                />
                <Heading2
                  className={`!text-secondary`}
                  blackHeading={vendor?.last_name}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-3 sm:px-6">
            <div className="flex flex-col gap-1">
              <p>{locale === "ar" ? "الاسم الأول" : "First Name"}</p>
              <p className="text-secondary font-medium">{vendor?.first_name}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p>{locale === "ar" ? "اسم العائلة" : "Last Name"}</p>
              <p className="text-secondary font-medium">{vendor?.last_name}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p>
                {locale === "ar" ? "عنوان البريد الإلكتروني" : "Email Address"}
              </p>
              <p className="text-secondary font-medium">{vendor?.email}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p>{locale === "ar" ? "رقم التليفون" : "Phone Number"}</p>
              <p className="text-secondary font-medium">{vendor?.phone}</p>
            </div>
            <div className={`items-center gap-4 flex sm:hidden w-full`}>
              <LanguageAwareLink
                href={textToRouteUrl("/edit-profile")}
                className="py-2 px-4 bg-secondary text-white rounded-sm flex items-center gap-2">
                <Icon icon="tabler:edit" width="24" height="24" />
                {locale === "ar" ? "تعديل الملف الشخصي" : "Edit Profile"}
              </LanguageAwareLink>
              <Button
                variant={"primary"}
                text={locale === "ar" ? "تسجيل الخروج" : "Logout"}
                icon={"material-symbols:logout"}
                className="!py-2 rounded-sm "
                onClick={handleLogOut}
                loading={loading}
              />
            </div>
            <div
              className={`absolute ${
                locale === "ar" ? "left-5" : "right-5"
              } top-5 items-center gap-4 hidden sm:flex`}>
              <LanguageAwareLink
                href={textToRouteUrl("/edit-profile")}
                className="py-2 px-4 bg-secondary text-white rounded-sm flex items-center gap-2">
                <Icon icon="tabler:edit" width="24" height="24" />
                {locale === "ar" ? "تعديل الملف الشخصي" : "Edit Profile"}
              </LanguageAwareLink>
              <Button
                variant={"primary"}
                text={locale === "ar" ? "تسجيل الخروج" : "Logout"}
                icon={"material-symbols:logout"}
                className="!py-2  rounded-sm"
                onClick={handleLogOut}
                loading={loading}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserInformation;
