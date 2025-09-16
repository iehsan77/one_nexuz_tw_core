"use client";
import FormProvider from "@/components/FormFields/FormProvider";
import RHFTextField from "@/components/FormFields/RHFTextField";
import Heading4 from "@/components/Typography/Heading4";
import Paragraph from "@/components/Typography/Paragraph";
import useUserStore from "@/stores/user-store";
import useVendorStore from "@/stores/vendor-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../Button/Button";

const NewPassword = ({ isModalOpen, setIsModalOpen }) => {
  const [alert, setAlert] = useState(null);
  const router = useRouter();
  const { Signin } = useUserStore();
  const { vendor } = useVendorStore();

  // ✅ Form validation schema
  const formSchema = z
    .object({
      email: z.string().email("Email is required and must be valid."),
      password: z
        .string()
        .min(8, "Password must be at least 8 characters long."),
      confirmPassword: z.string().min(8, "Confirm password is required.")
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"]
    });

  const defaultValues = useMemo(
    () => ({
      email: "",
      password: "",
      confirmPassword: "",
      vendor_website_id: vendor?.vendor_website_id
    }),
    [vendor]
  );

  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues
  });

  const {
    handleSubmit,
    watch,
    formState: { isSubmitting }
  } = methods;

  // ✅ Dynamically watch password input
  const passwordValue = watch("password");

  // ✅ Password rules based on current input
  const rules = [
    {
      label: "At least 8 characters",
      isValid: passwordValue.length >= 8
    },
    {
      label: "One lowercase character",
      isValid: /[a-z]/.test(passwordValue)
    },
    {
      label: "One uppercase character",
      isValid: /[A-Z]/.test(passwordValue)
    },
    {
      label: "One number, symbol, or whitespace character",
      isValid: /[0-9!@#$%^&*(),.?":{}|<>\s]/.test(passwordValue)
    }
  ];

  const onSubmit = async (data) => {
    const res = await Signin({
      ...data,
      vendor_website_id: vendor?.vendor_website_id
    });

    if (res?.status === 200) {
      router.push("/");
      setIsModalOpen && setIsModalOpen(false);
    } else {
      setAlert({ type: "error", message: res?.message });
      setTimeout(() => setAlert(null), 3000);
    }
  };

  return (
    <>
      {/* Close Button */}
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

      <div className="max-w-[1024px] mx-auto">
        <Heading4
          blackHeading={`Set A New Password`}
          className={`text-center !mb-0`}
        />
        <Paragraph
          blackText1={`Set a strong password to keep your account secure. Make sure both entries match.`}
          className={`text-center py-8 !mb-0`}
        />

        {/* Form Start */}
        <FormProvider
          className="space-y-8"
          methods={methods}
          onSubmit={handleSubmit(onSubmit)}
        >
          {alert && <Alert type={alert.type} message={alert.message} />}

          <div className="space-y-6">
            {/* New Password */}
            <RHFTextField
              name="password"
              type="password"
              placeholder="New Password"
              className="grow"
              variant="outlined"
            />

            {/* Password Rules */}
            <ul className="space-y-2 mt-3">
              {rules.map((rule, idx) => (
                <li
                  key={idx}
                  className={`flex items-center gap-2 text-sm "text-gray-400`}
                >
                  <Icon
                    icon={
                      rule.isValid ? "mdi:check-circle" : "mdi:circle-outline"
                    }
                    className={`w-5 h-5 ${
                      rule.isValid ? "text-primary" : "text-gray-400"
                    }`}
                  />
                  {rule.label}
                </li>
              ))}
            </ul>

            {/* Confirm Password */}
            <RHFTextField
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="grow"
              variant="outlined"
            />
          </div>
        </FormProvider>

        {/* Submit Button */}
        <div className="flex justify-center py-8">
          <Button
            type={"submit"}
            href={`/`}
            variant={`primary`}
            className={``}
            arrow
          >
            Reset Password
          </Button>
        </div>

        {/* Support Text */}
        <Paragraph
          blackText1={`If you need further assistance`}
          className={`text-center !mb-0`}
        />
        <Paragraph
          blackText1={`contact our support team`}
          className={`text-center !mb-0`}
        />
      </div>
    </>
  );
};

export default NewPassword;
