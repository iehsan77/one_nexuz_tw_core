"use client";
import { POST } from "@/actions/actions";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import LanguageAwareLink from "@/components/LanguageAwareLink/LanguageAwareLink";
import Heading2 from "@/components/Typography/Heading2";
import useVendorStore from "@/stores/vendor-store";
import { endpoints } from "@/utils/endpoints";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";
import { toast } from "sonner";
import { z } from "zod";
import Button from "@/components/Button/Button";
import { useForm } from "react-hook-form";
import { FormProvider as Form } from "react-hook-form";
import { textToRouteUrl } from "@/utils/apiHelper";
import Image from "@/components/Image/Image";
import PasswordInput from "@/components/FormFields/PasswordInput";
import { Pencil } from "lucide-react";

const translations = {
  en: {
    heading: "Change Password",
    currentPassword: "Current Password",
    password: "Password",
    confirmPassword: "Confirm Password",
    updateButton: "Update",
    tabs: {
      personalInfo: "Personal Information",
      changePassword: "Change Password"
    }
  },
  ar: {
    heading: "تغيير كلمة المرور",
    currentPassword: "كلمة المرور الحالية",
    password: "كلمة المرور",
    confirmPassword: "تأكيد كلمة المرور",
    updateButton: "تحديث",
    tabs: {
      personalInfo: "المعلومات الشخصية",
      changePassword: "تغيير كلمة المرور"
    }
  }
};

const errorMessages = {
  en: {
    passwordMin: "Password must be at least 8 characters long.",
    oldPasswordRequired: "Current Password is required.",
    confirmPasswordMin: "Confirm Password must be at least 8 characters long.",
    passwordsMismatch: "Passwords do not match"
  },
  ar: {
    passwordMin: "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل.",
    oldPasswordRequired: "كلمة المرور الحالية مطلوبة.",
    confirmPasswordMin: "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل.",
    passwordsMismatch: "كلمتا المرور غير متطابقتين"
  }
};

function UpdatePasswordForm() {
  const { locale } = useContext(LanguageContext);
  const { vendor, setVendor } = useVendorStore();
  const pathname = usePathname();
  const t = errorMessages[locale] || errorMessages.en;

  const formSchema = z
    .object({
      new_password: z.string().min(8, {
        message: t.passwordMin
      }),
      old_password: z.string().min(1, {
        message: t.oldPasswordRequired
      }),
      confirmPassword: z.string().min(8, {
        message: t.confirmPasswordMin
      })
    })
    .refine((data) => data.new_password === data.confirmPassword, {
      message: t.passwordsMismatch,
      path: ["confirmPassword"]
    });

  const methods = useForm({
    resolver: zodResolver(formSchema)
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors }
  } = methods;

  const onSubmit = async (data) => {
    try {
      const res = await POST(endpoints.AUTH.UPDATE_PASSWORD, data);
      if (res?.detail !== undefined) {
        toast.error(res.detail);
        setVendor({});
        logoutUser();
      }
      if (res?.status === 200) {
        toast.success(res?.message);
        reset();
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.message);
    }
  };

  const data = [
    { title: translations[locale]?.tabs.personalInfo, link: "/edit-profile" },
    {
      title: translations[locale]?.tabs.changePassword,
      link: "/update-password"
    }
  ];

  return (
    <div className="container secPadding">
      <Form {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mt-3">
          <div className="space-y-6 mb-6">
            <div className="space-y-8">
              <div className="space-y-5 mb-10">
                <Heading2
                  className={`!text-black`}
                  blackHeading={translations[locale]?.heading}
                />
                <div className="h-[100px] sm:h-[150px] w-[100px] sm:w-[150px] rounded-full border border-gray-200 overflow-hidden">
                  <Image
                    src={vendor?.profile_image || "/assets/images/avatar.png"}
                    width={120}
                    height={120}
                    alt={`Auth Image`}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="flex items-center gap-3">
                  {data?.map((item, i) => (
                    <LanguageAwareLink
                      key={i}
                      href={textToRouteUrl(item?.link)}
                      className={`px-1 text-lg font-semibold border-b-2 ${
                        pathname === `/${locale}${item.link}`
                          ? "border-balck"
                          : "border-white"
                      }`}
                    >
                      {item?.title}
                    </LanguageAwareLink>
                  ))}
                </div>
              </div>
              <PasswordInput
                label={translations[locale]?.currentPassword}
                type="password"
                error={errors.old_password?.message}
                {...register("old_password")}
              />
              <PasswordInput
                label={translations[locale]?.password}
                type="new_password"
                error={errors.new_password?.message}
                {...register("new_password")}
              />
              <PasswordInput
                label={translations[locale]?.confirmPassword}
                type="password"
                error={errors.confirmPassword?.message}
                {...register("confirmPassword")}
              />
            </div>
          </div>
          <div className="flex ">
            <Button
              type="submit"
              disabled={isSubmitting}
              loading={isSubmitting}
              className="w-[150px]"
              variant={`primary`}
              text={translations[locale]?.updateButton}
            />
          </div>
        </form>
      </Form>
    </div>
  );
}

export default UpdatePasswordForm;
