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
import { RHFSubscribeTextField } from "../FormFields/RHFTextField";

const FooterNewsletter = ({ bgtxt, placeholder }) => {
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
        <section className="w-full">
            <div className="flex items-center gap-4">
                <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} className="!w-full">
                    <RHFSubscribeTextField
                        inputClass="shadow-none placeholder:!text-xs placeholder:text-white/60"
                        name="email"
                        placeholder={placeholder}
                    />
                </FormProvider>
                <div className="">
                    <SubmitBtn
                        loading={isSubmitting}
                        txt={bgtxt}
                        className={"hover:cursor-pointer"}
                    />
                </div>
            </div>

            {ModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="container">
                        <div className="max-w-[640px] mx-auto bg-white p-6 rounded-lg shadow-lg text-center">
                            <h2 className="text-xl font-bold mb-4">
                                {`Welcome To The Car Solutions Innovation Hub!`}
                            </h2>
                            <Paragraph
                                className="!text-xs"
                                blackText1={`Thank you for joining our family.`}
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

export default FooterNewsletter;
