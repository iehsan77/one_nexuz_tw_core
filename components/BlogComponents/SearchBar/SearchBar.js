"use client";
import React, { useMemo, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import FormProvider from "@/components/FormFields/FormProvider";
import RHFTextField from "@/components/FormFields/RHFTextField";
import Button from "@/components/Button/Button";

const SearchBar = ({ value }) => {
  const [message, setMessage] = useState("");
  const router = useRouter();
  const myFormSchema = z.object({
    zip: z.string().min(1, "Please Enter Zip Code"),
  });

  const defaultValues = useMemo(
    () => ({
      zip: value || "",
    }),
    [value]
  );

  const methods = useForm({
    resolver: zodResolver(myFormSchema),
    defaultValues,
  });

  const {
    getFieldState,
    handleSubmit,
    resetField,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      const res = await (data);
      // const res = await fetchStateCity(data);

      if (res.status === 200) {
        router.push(
          `/${res?.data?.state?.toLowerCase()}/${res?.data?.city?.toLowerCase()}?zip=${data?.zip
          }`
        );
      } else if (res.status === 404) {
        setMessage(res.message);
        resetField();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const zipFieldError = getFieldState("zip")?.error?.message;

  return (
    <div className="flex flex-col">
      <div
        className="my-2 overflow-hidden "
        style={{ boxShadow: "0px 5px 15px 0px rgba(0, 0, 0, 0.25)" }}
      >
        <FormProvider
          methods={methods}
          onSubmit={handleSubmit(onSubmit)}
          className="flex xs:flex-row flex-col w-full xs:space-x-2 xs:space-y-0 space-y-2"
        >
          <RHFTextField
            name="search"
            type="text"
            placeholder="Job title, key words or company"
            className="basis-4/5 rounded-sm bg-white"
            inputClass={`!border-none`}
            value={value}
          />
          <Button
            className={`!border-none bg-primary text-white rounded-sm`}
            text={`Search`}
            aria-disabled={isSubmitting}
            disabled={isSubmitting}
          />
        </FormProvider>
      </div>
      {(zipFieldError || message) && (
        <p className="text-sm mt-1 text-red-700">{zipFieldError || message}</p>
      )}
    </div>
  );
};

export default SearchBar;
