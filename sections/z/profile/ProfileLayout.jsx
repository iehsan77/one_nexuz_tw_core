"use client";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import AvatarUpload from "@/components/FormFields/AvatarUpload/AvatarUpload";
import LanguageAwareLink from "@/components/LanguageAwareLink/LanguageAwareLink";
import Heading2 from "@/components/Typography/Heading2";
import useVendorStore from "@/stores/vendor-store";
import { textToRouteUrl } from "@/utils/apiHelper";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";
import { FormProvider as Form, useForm } from "react-hook-form";
import { z } from "zod";

function ProfileLayout() {
  const pathname = usePathname();
  const { locale } = useContext(LanguageContext);
  const { vendor, setVendor } = useVendorStore();

  const data = [
    { title: "Personal Information", link: "/edit-profile" },
    { title: "Change Password", link: "/update-password" },
  ];

  const catSchema = z.object({
    id: z.number(),
    first_name: z.string().min(1, { message: "First Name is required" }),
    last_name: z.string(),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
    phone: z.string(),
    profile_image: z
      .union([z.instanceof(File).optional(), z.string().optional()])
      .optional(),
    old_profile_image: z.string().optional(),
  });

  const methods = useForm({
    resolver: zodResolver(catSchema),
    defaultValues: {
      id: vendor?.id || 0,
      first_name: vendor?.first_name || "",
      last_name: vendor?.last_name || "",
      email: vendor?.email || "",
      phone: vendor?.phone || "",
      profile_image: "",
      old_profile_image: vendor?.profile_image || "",
    },
  });

  const {
    watch,
    register,
    setValue,
    setError,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const handleChange = (name, value) => {
    setValue(name, value, { shouldDirty: true });
  };

  const onSubmit = async (data) => {};

  return (
    <div className="pt-10">
      <div className="container space-y-8">
        <Heading2 className={`!text-black`} blackHeading={"Edit Profile"} />
        <Form {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <AvatarUpload
              name="profile_image"
              size="md"
              value={
                vendor ? watch("old_profile_image") : watch("profile_image")
              }
              onChange={(val) => handleChange("profile_image", val)}
              setError={setError}
              error={errors?.profile_image?.message}
            />
          </form>
        </Form>
        <div className="flex items-center gap-3">
          {data?.map((item, i) => (
            <LanguageAwareLink
              key={i}
              href={textToRouteUrl(item?.link)}
              className={`px-1 text-lg font-semibold border-b-2 ${
                pathname === `/${locale}${item.link}`
                  ? "border-balck"
                  : "border-white"
              }`}>
              {item?.title}
            </LanguageAwareLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileLayout;
