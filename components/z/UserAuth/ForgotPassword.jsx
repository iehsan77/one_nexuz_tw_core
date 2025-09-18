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
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import Heading2 from "@/components/Typography/Heading2";
import { Icon } from "@iconify/react";

const translations = {
  en: {
    heading: "Forgot Password?",
    emailLabel: "Email address",
    sendButton: "Send",
    rememberText: "Remember Your Password?",
    login: "Login",
    requiredEmail: "Email is required and must be a valid email address."
  },
  ar: {
    heading: "هل نسيت كلمة المرور؟",
    emailLabel: "عنوان البريد الإلكتروني",
    sendButton: "إرسال",
    rememberText: "هل تتذكر كلمة المرور؟",
    login: "تسجيل الدخول",
    requiredEmail: "البريد الإلكتروني مطلوب ويجب أن يكون عنوانًا صحيحًا."
  }
};

const ForgotPassword = ({ isModalOpen, setIsModalOpen, setFormType }) => {
  const router = useRouter();
  const { vendor, setVendor } = useVendorStore();
  const { locale } = useContext(LanguageContext);
  const currentTranslations = translations[locale] || translations.en;

  const defaultValues = useMemo(
    () => ({
      email: ""
    }),
    []
  );

  const formSchema = z.object({
    email: z.string().email({
      message: currentTranslations.requiredEmail
    })
  });

  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues
  });

  const {
    watch,
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
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
        <form onSubmit={handleSubmit(onSubmit)} className={"w-full mt-8 md:px-6 px-4"}>
          <Heading2
            blackHeading={currentTranslations.heading}
            className={`text-center`}
          />
          <div className="mb-6">
            <TextInput
              label={currentTranslations.emailLabel}
              type="email"
              error={errors.email?.message}
              {...register("email")}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              loading={isSubmitting}
              className="mb-4"
              variant={`primary`}
              text={currentTranslations.sendButton}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <Paragraph blackText1={currentTranslations.rememberText} className={`!mb-0`} />
            <span
              onClick={() => setFormType("signin")}
              className="displayAnchor !text-primary py-2 cursor-pointer"
            >
              Sign in
            </span>
          </div>
        </form>
      </Form>
    </>
  );
};

export default ForgotPassword;
