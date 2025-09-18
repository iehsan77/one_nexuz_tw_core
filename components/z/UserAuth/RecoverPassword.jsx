"use client";

import FormProvider from "@/components/FormFields/FormProvider";
import RHFTextField from "@/components/FormFields/RHFTextField";
import Button from "../Button/Button";
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

const RecoverPassword = ({ isModalOpen, setIsModalOpen }) => {
  const [alert, setAlert] = useState(null);
  const router = useRouter();
  const { Signin } = useUserStore(); // Replace later with `requestPasswordReset`
  const { vendor } = useVendorStore();

  // ✅ Form schema for email only
  const formSchema = z.object({
    email: z
      .string()
      .email({ message: "Please enter a valid email address." }),
  });

  const defaultValues = useMemo(
    () => ({
      email: "",
      vendor_website_id: vendor?.vendor_website_id,
    }),
    [vendor]
  );

  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  // ✅ Handle Submit
  const onSubmit = async (data) => {
    try {
      // TODO: Replace Signin with your password reset API later
      const res = await Signin({
        ...data,
        vendor_website_id: vendor?.vendor_website_id,
      });

      if (res?.status === 200) {
        setAlert({
          type: "success",
          message: "Password reset link sent successfully!",
        });

        setTimeout(() => {
          setAlert(null);
          router.push("/");
          setIsModalOpen && setIsModalOpen(false);
        }, 2000);
      } else {
        setAlert({ type: "error", message: res?.message || "Something went wrong!" });
        setTimeout(() => setAlert(null), 3000);
      }
    } catch (error) {
      setAlert({ type: "error", message: "Server error. Try again later." });
      setTimeout(() => setAlert(null), 3000);
    }
  };

  return (
    <>
      {/* Close Icon */}
      {isModalOpen && (
        <div className="absolute right-4 top-4">
          <Icon
            icon="mdi:close"
            width="1.6rem"
            height="1.6rem"
            className="cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          />
        </div>
      )}

      <div className="max-w-[1024px] mx-auto">
        {/* Heading */}
        <Heading4
          blackHeading={`Recover your password`}
          className="text-center !mb-0"
        />
        <p className="text-center py-4 sm:text-base text-sm">
          <strong>Enter the email </strong>
          that you used when you signed up to recover your password. You will
          receive a <strong>password reset link.</strong>
        </p>

        {/* Form */}
        <FormProvider
          className="space-y-6"
          methods={methods}
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Alert */}
          {alert && (
            <div
              className={`text-center px-4 py-2 rounded-md ${
                alert.type === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {alert.message}
            </div>
          )}

          {/* Email Field */}
          <RHFTextField
            name="email"
            type="email"
            placeholder="Email Address"
            className="grow"
            variant="outlined"
          />

          {/* Submit Button */}
          <div className="flex justify-center py-6">
            <Button
              type="submit"
              variant="primary"
              className="min-w-[150px]"
              disabled={isSubmitting}
              arrow
              text={isSubmitting ? "Sending..." : "Send Link"}
            />
          </div>
        </FormProvider>

        {/* Support Info */}
        <Paragraph
          blackText1={`If you need further assistance`}
          className="text-center !mb-0"
        />
        <Paragraph
          blackText1={`contact our support team`}
          className="text-center"
        />
      </div>
    </>
  );
};

export default RecoverPassword;
