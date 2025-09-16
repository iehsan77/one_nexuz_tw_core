"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Paragraph from "../Typography/Paragraph";
import SubmitBtn from "@/components/FormFields/SubmitBtn";
import FormProvider from "../FormFields/FormProvider";
import { NewsletterSubmit } from "@/actions/blog-actions";
import useVendorStore from "@/stores/vendor-store";
import Heading2 from "../Typography/Heading2";
import Image from "../Image/Image";
import { RHFSubscribeTextField } from "../FormFields/RHFTextField";

const Newsletter = () => {
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
    <section className="">
      <div className="max-w-full mx-auto bg-[#ECECEC] rounded-xl overflow-hidden">
        <div className="grid grid-cols-12">
          <div className="md:col-span-4 col-span-12 relative overflow-hidden">
            <div className="absolute flex justify-center items-center w-full h-full">
              <Image
                src={"/assets/images/image_28.webp"}
                alt="logo"
                width={635}
                height={600}
                className={`h-full object-cover`}
              />
            </div>
          </div>
          <div className="md:col-span-8 col-span-12 md:px-12 px-6 py-6 my-auto">
            <Heading2
              blackHeading={`Subscribe Now & Get Exclusive Industry Insights!`}
              className={`lg:!text-left !text-center !text-xl`}
            />

            <div>
              <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <div className="py-4">
                  <RHFSubscribeTextField
                    className="border border-gray-400 rounded-md"
                    inputClass="shadow-none !py-1 !px-2 placeholder:!text-xs placeholder:text-gray-700"
                    name="email"
                    placeholder="Your Email"
                  />
                  <div className="mt-6">
                    <SubmitBtn
                      loading={isSubmitting}
                      txt={"Join 1000+ Subscriber"}
                      className={"w-full"}
                    />
                  </div>
                </div>
              </FormProvider>
            </div>
            <p className="displayPara lg:!text-left !text-center">
              {`By clicking submit button, you agree to our`}
              <span>
                <Link href={"/privacy-policy"} className="text-primary">
                  {" "}
                  privacy Policy
                </Link>
              </span>
            </p>
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
              <button
                className="mt-4 px-4 py-2 bg-primary text-white rounded-full"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Newsletter;
