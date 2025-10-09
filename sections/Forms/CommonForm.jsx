"use client";
import React, { useContext, useMemo } from "react";
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";
import ar from "@/locales/ar/common.json";
import en from "@/locales/en/common.json";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormProvider as Form } from "react-hook-form";
import { navData } from "@/lib/navigation-config";
import Typography from "@/components/ui/Typography";
import TextInput from "@/components/FormFields/TextInput";
import NumberInput from "@/components/FormFields/NumberInput";
import SingleSelectInput from "@/components/FormFields/SingleSelectInput";
import MultilineInput from "@/components/FormFields/MultilineInput";
import { Button } from "@/components/ui/Button";
import { Icon } from "@iconify/react";
import CheckboxInput from "@/components/FormFields/CheckboxInput";
import { toast } from "sonner";
import { useModal } from "@/context/commonModalProvider";

function CommonForm() {
  const { locale } = useContext(LanguageContext);
  const arabic = locale === "ar";
  const t = locale === "ar" ? ar : en;
  const { hideModal } = useModal();

  const schema = z.object({
    id: z.number(),
    full_name: z.string().min(1, t?.commonForm?.formZod?.fullName),
    email: z.string().email(t?.commonForm?.formZod?.emailAddress),
    phone: z.string().min(1, t?.commonForm?.formZod?.phoneNumber),
    service: z.number().min(1, t?.commonForm?.formZod?.service),
    company: z.string().min(1, t?.commonForm?.formZod?.companyName),
    country: z.string().min(1, t?.commonForm?.formZod?.country),
    message: z.string().min(1, t?.commonForm?.formZod?.message),
    agreed: z.boolean().refine((val) => val === true, {
      message: t?.commonForm?.formZod?.checkBox,
    }),
  });

  const defaultValues = useMemo(
    () => ({
      id: 0,
      fullName: "",
      email: "",
      phone: "",
      service: 0,
      company: "",
      country: "",
      message: "",
      agreed: false,
    }),
    []
  );

  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

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

  const isChecked = watch("agreed");

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("submitted successfully!");
    hideModal();
  };

  const serviceData = navData?.map((item) => ({
    label: item?.title,
    value: item?.id,
  }));

  const handleChange = (name, value) => {
    setValue(name, value);
  };

  return (
    <div>
      <Typography as="p" weight="bold" size="2xl" align="center" color="white">
        {t?.commonForm?.title}
      </Typography>
      {/* form */}
      <div>
        <Form {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
            <div className="grid xs:grid-cols-2 gap-x-5 gap-y-8 xs:gap-y-10">
              <div className="col-span-2 xs:col-span-1">
                <TextInput
                  label={t?.commonForm?.formTitle?.fullName}
                  type="text"
                  error={errors.full_name?.message}
                  {...register("full_name")}
                  is_Modal={true}
                />
              </div>
              <div className="col-span-2 xs:col-span-1">
                <TextInput
                  label={t?.commonForm?.formTitle?.emailAddress}
                  type="email"
                  placeholder=" "
                  error={errors.email?.message}
                  {...register("email")}
                  is_Modal={true}
                />
              </div>
              <div className="col-span-2">
                <NumberInput
                  label={t?.commonForm?.formTitle?.phoneNumber}
                  type="number"
                  placeholder=" "
                  error={errors.phone?.message}
                  {...register("phone")}
                  isModal={true}
                />
              </div>
              <div className="col-span-2">
                <SingleSelectInput
                  label={t?.commonForm?.formTitle?.service}
                  options={serviceData}
                  value={watch("service")}
                  {...register("service")}
                  onChange={(option) => handleChange("service", option)}
                  error={errors.service?.message}
                  clearError={() => clearErrors("service")}
                  is_Modal={true}
                />
              </div>
              <div className="col-span-2 xs:col-span-1">
                <TextInput
                  label={t?.commonForm?.formTitle?.companyName}
                  type="text"
                  error={errors.company?.message}
                  {...register("company")}
                  is_Modal={true}
                />
              </div>
              <div className="col-span-2 xs:col-span-1">
                <TextInput
                  label={t?.commonForm?.formTitle?.country}
                  type="text"
                  placeholder=" "
                  error={errors.country?.message}
                  {...register("country")}
                  is_Modal={true}
                />
              </div>
              <div className="col-span-2">
                <MultilineInput
                  label={t?.commonForm?.formTitle?.message}
                  type="text"
                  error={errors.message?.message}
                  {...register("message")}
                  rows={5}
                  is_Modal={true}
                />
              </div>
            </div>
            <CheckboxInput
              title={t?.commonForm?.formTitle?.checkBox}
              error={errors.agreed?.message}
              checked={isChecked}
              {...register("agreed")}
              is_Modal={true}
            />
            <Button
              variant="icon"
              icon={() => (
                <Icon
                  icon={arabic ? "uil:angle-left" : "uil:angle-right"}
                  width="24"
                  height="24"
                />
              )}
              isLoading={isSubmitting}
              iconPosition="right"
              className="text-white">
              {t.btn.submitNow}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default CommonForm;
