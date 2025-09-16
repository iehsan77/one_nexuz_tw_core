"use client";

import { POST } from "@/actions/actions";
import Button from "@/components/Button/Button";
import Paragraph from "@/components/Typography/Paragraph";
import useVendorStore from "@/stores/vendor-store";
import { endpoints } from "@/utils/endpoints";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useContext, useMemo } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import TextInput from "@/components/FormFields/TextInput";
import { FormProvider as Form } from "react-hook-form";
import { textToRouteUrl } from "@/utils/apiHelper";
import LanguageAwareLink from "@/components/LanguageAwareLink/LanguageAwareLink";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import Heading2 from "@/components/Typography/Heading2";
import Image from "next/image";

const translations = {
  en: {
    heading: "Forgot Password?",
    emailLabel: "Email address",
    sendButton: "Send",
    rememberText: "Remember Your Password?",
    login: "Login",
    requiredEmail: "Email is required and must be a valid email address.",
  },
  ar: {
    heading: "هل نسيت كلمة المرور؟",
    emailLabel: "عنوان البريد الإلكتروني",
    sendButton: "إرسال",
    rememberText: "هل تتذكر كلمة المرور؟",
    login: "تسجيل الدخول",
    requiredEmail: "البريد الإلكتروني مطلوب ويجب أن يكون عنوانًا صحيحًا.",
  },
};

const ForgotPassword = () => {
  const router = useRouter();
  const { vendor, setVendor } = useVendorStore();
  const { locale } = useContext(LanguageContext);
  const currentTranslations = translations[locale] || translations.en;

  const defaultValues = useMemo(
    () => ({
      email: "",
    }),
    []
  );

  const formSchema = z.object({
    email: z.string().email({
      message: currentTranslations.requiredEmail,
    }),
  });

  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const {
    watch,
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      const res = await POST(endpoints.AUTH.FORGOT_PASSWORD, data);
      if (res?.detail !== undefined) {
        toast.error(res.detail);
        setVendor({});
        logoutUser();
      }
      if (res?.status === 200) {
        toast.success(res?.message);
        router.push(`/${locale}/passwordresetsuccess`);
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.message);
    }
  };

  return (
    <>
      <Form {...methods}>
        <div className="flex items-center justify-center w-full mb-3">
          <LanguageAwareLink
            href={textToRouteUrl("/")}
            className="cursor-pointer">
            <Image
              src={`/assets/images/car_solution_logo.svg`}
              alt="logo"
              width={70}
              height={64}
              className={`w-auto lg:h-28 h-14`}
            />
          </LanguageAwareLink>
        </div>
        <Heading2 blackHeading={currentTranslations.heading} />
        <form onSubmit={handleSubmit(onSubmit)} className={"w-full mt-8"}>
          <div className="mb-6">
            <TextInput
              label={currentTranslations.emailLabel}
              type="email"
              error={errors.email?.message}
              {...register("email")}
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            loading={isSubmitting}
            className="mb-4 w-full"
            variant={`secondary`}
            text={currentTranslations.sendButton}
          />

          <div className="flex flex-col items-center justify-center">
            <Paragraph blackText1={currentTranslations.rememberText} />
            <LanguageAwareLink
              href={textToRouteUrl("/login")}
              className="font-bold displayPara underline underline-offset-4 cursor-pointer text-secondary">
              {currentTranslations.login}
            </LanguageAwareLink>
          </div>
        </form>
      </Form>
    </>
  );
};

export default ForgotPassword;
