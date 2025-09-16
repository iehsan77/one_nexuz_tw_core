"use client";
import React, { useContext, useEffect, useState } from "react";
import FormProvider from "@/components/FormFields/FormProvider";
import { useForm } from "react-hook-form";
import RHFOtpField from "@/components/FormFields/RHFOtpField";
import { useRouter } from "next/navigation";
import Button from "@/components/Button/Button";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { endpoints } from "@/utils/endpoints";
import { POST } from "@/actions/actions";
import Heading5 from "@/components/Typography/Heading5";
import Paragraph from "@/components/Typography/Paragraph";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import Heading2 from "@/components/Typography/Heading2";
import { Icon } from "@iconify/react";

const translations = {
  en: {
    heading: "Verify The Code!",
    subText: (email) =>
      `Please check your inbox for a verification code to complete the process.`,
    timerLabel: "It will be valid for",
    enterOtp: "Didn’t receive the code?",
    verify: "Verify",
    resend: "Resend Link",
    knowPassword:
      "*Check your spam and promotions folder if it doesn't appear in your main mailbox.",
    signUp: "Sign Up",
    otpLengthError: "OTP must be exactly 6 digits long.",
    otpTypeError: "OTP must contain only numeric characters."
  },
  ar: {
    heading: "تم إرسال رمز التحقق إلى بريدك الإلكتروني",
    subText: (email) =>
      `يرجى إدخال رمز التحقق المكون من 6 أرقام المرسل إلى ${email}`,
    timerLabel: "لم تحصل على رمز التحقق؟",
    enterOtp: "أدخل رمز التحقق",
    verify: "تحقق",
    resend: "إعادة الإرسال",
    knowPassword: "هل تعرف كلمة المرور؟",
    signUp: "اشتراك",
    otpLengthError: "يجب أن يكون رمز التحقق مكونًا من 6 أرقام.",
    otpTypeError: "يجب أن يحتوي رمز التحقق على أرقام فقط."
  }
};

const OtpVerification = ({ isModalOpen, setIsModalOpen, email }) => {
  const upEmail = email?.replace(/%40/g, "@");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [timer, setTimer] = useState(119);
  const { locale } = useContext(LanguageContext);
  const currentTranslations = translations[locale] || translations.en;

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const myFormSchema = z.object({
    code: z
      .string()
      .length(6, { message: currentTranslations.otpLengthError })
      .regex(/^\d+$/, { message: currentTranslations.otpTypeError })
  });

  const methods = useForm({
    resolver: zodResolver(myFormSchema)
  });
  const {
    handleSubmit,
    formState: { isSubmitting }
  } = methods;

  const onSubmit = async (data) => {
    const updatedEmail = email?.replace(/%40/g, "@");
    const body = { ...data, email: updatedEmail };
    try {
      const res = await POST(endpoints.AUTH.VERIFY_OTP, body);
      if (res?.status === 200 || res?.status === 201) {
        toast.success(res?.message);
        router.push(`/${locale}/login`);
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const resendOtpHandler = async () => {
    const updatedEmail = email?.replace(/%40/g, "@");
    const body = {
      email: updatedEmail
    };
    try {
      setLoading(true);
      const res = await POST(endpoints.AUTH.RESEND_VERIFY_OTP, body);
      if (res?.status === 200) {
        setLoading(false);
        toast.success(res?.message);
      } else {
        setLoading(false);
        toast.error(res?.message);
      }
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };
  return (
    <div className="w-full space-y-4 p-4">
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
      <Heading2
        blackHeading={currentTranslations.heading}
        className={`text-center`}
      />
      <Paragraph
        className="flex justify-center !mb-0"
        blackText1={currentTranslations.subText(upEmail)}
      />
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-6">
          <div className="w-full flex items-center justify-center mt-4">
            <div className="max-w-[450px]">
              <RHFOtpField
                name="code"
                inputClassName={`border border-primary rounded-lg`}
              />
            </div>
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            loading={isSubmitting}
            className="w-fit mx-auto"
            variant={`primary`}
            text={currentTranslations.verify}
          />
          <div className="flex items-center justify-center gap-2">
             <Icon
            icon="jam:alert-f"
            width="1.6rem"
            height="1.6rem"
            className="text-primary rotate-180"
          />
            <Heading5
              className="!mb-0"
              blackHeading={`${currentTranslations.timerLabel} ${formatTime(
                timer
              )}`}
            />
          </div>
          <Paragraph
            className="text-center !mb-0"
            blackText1={currentTranslations.knowPassword}
          />
          <Paragraph
            className="text-center text-primary !mb-0"
            blackText1={currentTranslations.enterOtp}
          />
          <Button
            type="submit"
            onClick={resendOtpHandler}
            disabled={loading || timer > 0}
            loading={loading}
            variant={`primary`}
            text={currentTranslations.resend}
            className={`w-fit mx-auto ${
              timer > 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          />
        </div>
      </FormProvider>
    </div>
  );
};

export default OtpVerification;
