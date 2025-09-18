"use client";

import Button from "@/components/Button/Button";
import FormProvider from "@/components/FormFields/FormProvider";
import RHFSelect from "@/components/FormFields/RHFSelect";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const CompareForm = () => {
  const formSchema = z.object({
    id: z.number(),
  });

  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: 0,
      role_id: 2,
      terms_condition: 1,
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const onSubmit = async (data) => {};
  const carModal = [
    { label: "Abu Dhabi", value: "Abu Dhabi" },
    { label: "Dubai", value: "Dubai" },
    { label: "Sharjah", value: "Sharjah" },
    { label: "Ajman", value: "Ajman" },
    { label: "Ras Al Khaimah", value: "Ras Al Khaimah" },
    { label: "Fujairah", value: "Fujairah" },
    { label: "Umm Al Quwain", value: "Umm Al Quwain" },
    { label: "Al Ain", value: "Al Ain" },
    { label: "Khor Fakkan", value: "Khor Fakkan" },
    { label: "Kalba", value: "Kalba" },
    { label: "Dibba Al-Fujairah", value: "Dibba Al-Fujairah" },
    { label: "Dibba Al-Hisn", value: "Dibba Al-Hisn" },
    { label: "Dhaid (Al Dhaid)", value: "Dhaid (Al Dhaid)" },
    { label: "Madinat Zayed", value: "Madinat Zayed" },
    { label: "Liwa Oasis", value: "Liwa Oasis" },
  ];
  const dubaiCities = [
    { label: "Abu Dhabi", value: "Abu Dhabi" },
    { label: "Dubai", value: "Dubai" },
    { label: "Sharjah", value: "Sharjah" },
    { label: "Ajman", value: "Ajman" },
    { label: "Ras Al Khaimah", value: "Ras Al Khaimah" },
    { label: "Fujairah", value: "Fujairah" },
    { label: "Umm Al Quwain", value: "Umm Al Quwain" },
    { label: "Al Ain", value: "Al Ain" },
    { label: "Khor Fakkan", value: "Khor Fakkan" },
    { label: "Kalba", value: "Kalba" },
    { label: "Dibba Al-Fujairah", value: "Dibba Al-Fujairah" },
    { label: "Dibba Al-Hisn", value: "Dibba Al-Hisn" },
    { label: "Dhaid (Al Dhaid)", value: "Dhaid (Al Dhaid)" },
    { label: "Madinat Zayed", value: "Madinat Zayed" },
    { label: "Liwa Oasis", value: "Liwa Oasis" },
  ];

  return (
    <>
      <FormProvider
        methods={methods}
        onSubmit={handleSubmit(onSubmit)}
        className={"space-y-4 p-4"}>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 space-y-4">
          <RHFSelect
            name="modal_id"
            type="text"
            placeholder="Select a Car Modal"
            options={carModal}
          />

          <RHFSelect
            name="emirate_id"
            type="text"
            placeholder="Select a Car Modal"
            options={dubaiCities}
            className={""}
          />
          <RHFSelect
            name="emirate_id"
            type="text"
            placeholder="Select a Car Modal"
            options={dubaiCities}
            className={""}
          />
        </div>

        <div className="flex items-center justify-between">
          <Button
            type="submit"
            disabled={isSubmitting}
            loading={isSubmitting}
            className={`!border-0 font-[500]`}
            variant={`outline`}
            text={"Clear All"}
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            loading={isSubmitting}
            className={`!w-44`}
            variant={`primary`}
            text={"Compare"}
          />
        </div>
      </FormProvider>
    </>
  );
};
export default CompareForm;
