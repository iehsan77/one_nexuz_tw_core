"use client";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useContext, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormProvider as Form } from "react-hook-form";
import TextInput from "@/components/FormFields/TextInput";
import NumberInput from "../Forms/NumberInput";
import Button from "@/components/Button/Button";
import useVendorStore from "@/stores/vendor-store";
import { toast } from "sonner";
import { POST } from "@/actions/actions";
import { endpoints } from "@/utils/endpoints";
import { logoutUser, textToRouteUrl } from "@/utils/apiHelper";
import AvatarUpload from "@/components/FormFields/AvatarUpload/AvatarUpload";
import Heading2 from "@/components/Typography/Heading2";
import LanguageAwareLink from "@/components/LanguageAwareLink/LanguageAwareLink";
import { usePathname } from "next/navigation";
import { Pencil } from "lucide-react";

const translations = {
  en: {
    editProfile: "Edit Profile",
    personalInfo: "Personal Information",
    changePassword: "Change Password",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phoneNumber: "Phone Number",
    update: "Update"
  },
  ar: {
    editProfile: "تعديل الملف الشخصي",
    personalInfo: "المعلومات الشخصية",
    changePassword: "تغيير كلمة المرور",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    email: "البريد الإلكتروني",
    phoneNumber: "رقم الهاتف",
    update: "تحديث"
  }
};

const errorMessages = {
  en: {
    firstName: "First Name is required.",
    lastName: "Last Name is required.",
    email: {
      required: "Email is required.",
      invalid: "Must be a valid email address."
    },
    phone: "Phone Number is required."
  },
  ar: {
    firstName: "الاسم الأول مطلوب.",
    lastName: "اسم العائلة مطلوب.",
    email: {
      required: "البريد الإلكتروني مطلوب.",
      invalid: "يجب أن يكون عنوان بريد إلكتروني صالحًا."
    },
    phone: "رقم الهاتف مطلوب."
  }
};

function EditProfileForm() {
  const { locale } = useContext(LanguageContext);
  const { vendor, setVendor } = useVendorStore();
  const pathname = usePathname();
  const currentTranslations = translations[locale] || translations.en;
  const t = errorMessages[locale] || errorMessages.en;

  const formSchema = z.object({
    first_name: z.string().min(1, {
      message: t.firstName
    }),
    last_name: z.string().min(1, {
      message: t.lastName
    }),
    email: z.string().email().min(1, {
      message: t.email.required
    }),
    phone: z.string().min(1, {
      message: t.phone
    }),
    profile_image: z
      .union([z.instanceof(File).optional(), z.string().optional()])
      .optional(),
    old_profile_image: z.string().optional()
  });

  const defaultValues = useMemo(
    () => ({
      first_name: vendor?.first_name || "",
      last_name: vendor?.last_name || "",
      email: vendor?.email || "",
      phone: vendor?.phone || "",
      profile_image: "",
      old_profile_image: vendor?.profile_image || ""
    }),
    [vendor]
  );

  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues
  });

  const {
    watch,
    register,
    setValue,
    setError,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors }
  } = methods;

  console.log("errors", errors);

  const handleChange = (name, value) => {
    setValue(name, value, { shouldDirty: true });
  };

  useEffect(() => {
    reset(defaultValues);
  }, [vendor, reset]);

  const onSubmit = async (data) => {
    try {
      const res = await POST(endpoints.AUTH.UPDATE_PROFILE, data);
      if (res?.detail !== undefined) {
        toast.error(res.detail);
        setVendor({});
        logoutUser();
      }

      if (res?.status === 200) {
        toast.success(res?.message);
        setVendor({ ...vendor, ...res?.data });
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.message);
    }
  };

  const data = [
    { title: currentTranslations.personalInfo, link: "/edit-profile" },
    { title: currentTranslations.changePassword, link: "/update-password" }
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
                  blackHeading={currentTranslations.editProfile}
                />
                <div className="">
                  <AvatarUpload
                    name="profile_image"
                    size="md"
                    value={
                      vendor
                        ? watch("old_profile_image")
                        : watch("profile_image")
                    }
                    onChange={(val) => handleChange("profile_image", val)}
                    onRemove={(val) => handleChange("old_profile_image", val)}
                    setError={setError}
                    error={errors?.profile_image?.message}
                    accept={{
                      "image/jpeg": [".jpeg", ".jpg"],
                      "image/png": [".png"],
                      "image/webp": [".webp"]
                    }}
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
              <TextInput
                label={currentTranslations.firstName}
                type="first_name"
                error={errors.first_name?.message}
                {...register("first_name")}
              />
              <TextInput
                label={currentTranslations.lastName}
                type="last_name"
                error={errors.last_name?.message}
                {...register("last_name")}
              />
              <TextInput
                label={currentTranslations.email}
                type="email"
                error={errors.email?.message}
                {...register("email")}
              />
              <NumberInput
                label={currentTranslations.phoneNumber}
                error={errors.phone?.message}
                autoComplete="off"
                {...register("phone")}
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
              text={currentTranslations?.update}
            />
          </div>
        </form>
      </Form>
    </div>
  );
}

export default EditProfileForm;
