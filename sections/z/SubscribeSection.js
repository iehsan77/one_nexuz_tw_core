"use client";
import React, { useMemo, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { NewsletterSubmit } from "@/actions/blog-actions";
import useVendorStore from "@/stores/vendor-store";
import Paragraph from "@/components/Typography/Paragraph";
import FormProvider from "@/components/FormFields/FormProvider";
import Button from "@/components/Button/Button";
import Heading4 from "@/components/Typography/Heading4";
import RHFTextField from "@/components/FormFields/RHFTextField";
import { SendSVG } from "@/public/assets/icons/SVGIcons";

const SubscribeSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ModalOpen, setModalOpen] = useState(false);
  const validateSchema = z.object({
    email: z
      .string()
      .email("Invalid email format")
      .min(1, { message: "Email is required" }),
  });

  const { vendor } = useVendorStore();
  const defaultValues = useMemo(
    () => ({
      email: "",
    }),
    []
  );

  const methods = useForm({
    resolver: zodResolver(validateSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
    reset,
  } = methods;

  console.log(errors);

  const onSubmit = async (data) => {
    const body = {
      ...data,
      vendor_website_id: vendor?.vendor_website_id,
      sort_by: 0,
      id: 0,
      active: 1,
    };
    try {
      const res = await NewsletterSubmit(body);
      setModalOpen(true);

      if (res?.status === 302) {
        setError("email", {
          type: "manual",
          message: res?.message,
        });
      }
      if (res?.status === 200) {
        setIsModalOpen(true);
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const closeModal = () => {
    setModalOpen(false);
    setIsModalOpen(false);
  };
  return (
    <section className="lg:py-20 py-14 bg-[url(/assets/images/bgimage_02.webp)] bgimg">
      <div className="container text-center text-white">
        <div className="">

          <div className="max-w-sm mx-auto">
            <div className="">
              <Heading4 heading={`Get Expert Tips, UAE Business News & Free Resources ^ — Straight to Your Inbox`}
                className={``}
              />
              {/* <Paragraph
              blackText1={`Subscribe to our newsletter to get our newest articles instantly!`}
            /> */}
            </div>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <div className="flex items-center bg-white py-1">
                <RHFTextField
                  className="w-full"
                  inputClass="shadow-none bg-white !mb-0 placeholder:!text-black"
                  name="email"
                  placeholder="Enter your email"
                />
                  <div className="flex items-center gap-1">
                    <SendSVG />
                    <Button
                    loading={isSubmitting}
                    className={``}
                    variant={`txt`}
                    text={"Subscribe"}
                  />
                  </div>
              </div>
            </FormProvider>

          </div>
        </div>
      </div>

      {ModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="container">
            <div className="max-w-[640px] mx-auto bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-xl font-bold mb-4">
                {`Welcome To The Luxotora Innovation Hub!`}
              </h2>
              <Paragraph
                className="!text-xs"
                blackText1={`Thank you for joining our family. You will receive exclusive
              insights, industry updates, and valuable resources to stay
              informed about the latest or upcoming trends in Telecommunication,
              Internet, Home Phone, Home Security and beyond.`}
              />
              <span
                className="mt-4 px-4 py-2 bg-primary text-white rounded-full"
                onClick={closeModal}
              >
                Close
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SubscribeSection;
