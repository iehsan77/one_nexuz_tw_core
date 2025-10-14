"use client";
import React, { useContext, useMemo } from "react";
import ar from "@/locales/ar/common.json";
import en from "@/locales/en/common.json";
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";
import Typography from "@/components/ui/Typography";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { FormProvider as Form } from "react-hook-form";
import TextInput from "@/components/FormFields/TextInput";
import { Button } from "@/components/ui/Button";
import { Icon } from "@iconify/react";
import SingleSelectInput from "@/components/FormFields/SingleSelectInput";
import { navData, navDataAr } from "@/lib/navigation-config";
import { toast } from "sonner";
import PhoneNumberInput from "@/components/FormFields/PhoneNumberInput";

function RightForm() {
  const { locale } = useContext(LanguageContext);
  const arabic = locale === "ar";
  const t = locale === "ar" ? ar : en;

  const schema = z.object({
    id: z.number(),
    first_name: z.string().min(1, { message: t?.form?.validation?.firstName }),
    last_name: z.string().min(1, { message: t?.form?.validation?.lastName }),
    email: z.string().email({ message: t?.form?.validation?.email }),
    phone: z.string().min(5, { message: t?.form?.validation?.phone }),
    service: z.number().min(1, { message: t?.form?.validation?.service }),
  });

  const defaultValues = useMemo(
    () => ({
      id: 0,
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      service: 0,
    }),
    []
  );

  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });
  //
  const {
    control,
    watch,
    register,
    handleSubmit,
    reset,
    clearErrors,
    setValue,
    formState: { isSubmitting, errors },
  } = methods;

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("submitted successfully!");
    reset();
  };

  const data = arabic ? navDataAr : navData;

  const serviceData = data?.map((item) => ({
    label: item?.title,
    value: item?.id,
  }));

  const handleChange = (name, value) => {
    setValue(name, value);
  };

  return (
    <div className="p-5 rounded-lg bg-primaryLight">
      <div className="space-y-2">
        <Typography as="p" weight="bold" size="xl" align="center">
          {t?.serviceRightForm?.title}
        </Typography>
        <Typography as="p" weight="normal" size="base" align="center">
          {t?.serviceRightForm?.description}
        </Typography>
      </div>
      {/* form */}
      <div>
        <Form {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
            <div className="space-y-8">
              <TextInput
                label={t?.form?.title?.firstName}
                type="text"
                error={errors.first_name?.message}
                {...register("first_name")}
              />
              <TextInput
                label={t?.form?.title?.lastName}
                type="text"
                placeholder=" "
                error={errors.last_name?.message}
                {...register("last_name")}
              />
              <TextInput
                label={t?.form?.title?.email}
                type="email"
                placeholder=" "
                error={errors.email?.message}
                {...register("email")}
              />
            </div>
            <div className="space-y-8 mt-2">
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <PhoneNumberInput
                    value={field.value}
                    onChange={field.onChange}
                    error={errors.phone?.message}
                    clearError={() => clearErrors("phone")}
                  />
                )}
              />
              <SingleSelectInput
                label={t?.form?.title?.service}
                options={serviceData}
                value={watch("service")}
                {...register("service")}
                onChange={(option) => handleChange("service", option)}
                error={errors.service?.message}
                clearError={() => clearErrors("service")}
              />
            </div>
            <Button
              variant="icon"
              icon={() => (
                <Icon
                  icon={arabic ? "uil:angle-left" : "uil:angle-right"}
                  width="24"
                  height="24"
                />
              )}
              iconPosition="right"
              className="mt-5">
              {t?.btn?.submit}
            </Button>
          </form>
        </Form>
      </div>
      {/*  */}
    </div>
  );
}

export default RightForm;
