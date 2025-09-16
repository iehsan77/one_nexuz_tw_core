"use client";

import Button from "@/components/Button/Button";
import FormProvider from "@/components/FormFields/FormProvider";
import RHFSelect from "@/components/FormFields/RHFSelect";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import useAllBrandStore from "@/stores/AllBrandStore";
import useBodyTypeStore from "@/stores/bodyTypeStore";
import { titleLangConverter } from "@/utils/apiHelper";
import useColorStore from "@/stores/colorStore";
import useFilterStore from "@/stores/filterStore";
import { useRouter } from "next/navigation";
import { GET } from "@/actions/actions";
import { endpoints } from "@/utils/endpoints";
import RHFTextField from "@/components/FormFields/RHFTextField";

const FilterBar = () => {
  const [modelData, setModelData] = useState([]);
  const [modelLoading, setModelLoading] = useState(false);
  const [modelError, setModelError] = useState(null);
  const { locale } = useContext(LanguageContext);
  const { allBrandData, allBrandLoading, fetchAllBrandData } =
    useAllBrandStore();
  const { bodyTypeData, bodyTypeLoading, fetchBodyTypeData } =
    useBodyTypeStore();
  const { colorData, colorLoading, fetchColorData } = useColorStore();
  const { setMultipleFilters } = useFilterStore();
  const router = useRouter();

  const formSchema = z.object({
    brand_id: z
      .object({ label: z.string(), value: z.number() })
      .nullable()
      .optional(),
    model_id: z
      .object({ label: z.string(), value: z.number() })
      .nullable()
      .optional(),
    body_type_id: z
      .object({ label: z.string(), value: z.number() })
      .nullable()
      .optional(),
    color_id: z
      .object({ label: z.string(), value: z.number() })
      .nullable()
      .optional(),
    year: z
      .object({ label: z.string(), value: z.number() })
      .nullable()
      .optional(),
  });

  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      brand_id: { label: "", value: 0 },
      model_id: { label: "", value: 0 },
      body_type_id: { label: "", value: 0 },
      color_id: { label: "", value: 0 },
      year: { label: "", value: 0 },
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
    watch,
    setValue,
  } = methods;
  const selectedBrand = watch("brand_id");

  const fetchModelData = async () => {
    try {
      setModelLoading(true);
      setModelError(null);
      const res = await GET(endpoints.HOME.GET_CAR_MODELS);
      if (res?.status === 200) {
        setModelData(res?.data);
      } else {
        setModelError(res?.message);
      }
    } catch (err) {
      setModelError(err);
    } finally {
      setModelLoading(false);
    }
  };

  useEffect(() => {
    fetchModelData();
    fetchAllBrandData();
    fetchBodyTypeData();
    fetchColorData();
  }, []);

  useEffect(() => {
    // Reset model when brand changes
    setValue("model_id", null);
  }, [selectedBrand, setValue]);

  const makeData = allBrandData?.map((e) => ({
    label: titleLangConverter(e.title_en, e.title_ar, locale),
    value: e.id,
  }));

  const filteredModelData = selectedBrand?.value
    ? modelData?.filter((m) => m.manufacturer_id === selectedBrand.value)
    : modelData;

  const modelsData = filteredModelData?.map((e) => ({
    label: titleLangConverter(e.title_en, e.title_ar, locale),
    value: e.id,
  }));

  const bodyData = bodyTypeData?.map((e) => ({
    label: titleLangConverter(e.title_en, e.title_ar, locale),
    value: e.id,
  }));

  const onSubmit = async (data) => {
    const formatted = {};

    if (data.brand_id?.value) formatted.brand_id = data.brand_id.value;
    if (data.model_id?.value) formatted.model_id = data.model_id.value;
    if (data.body_type_id?.value)
      formatted.body_type_id = data.body_type_id.value;
    if (data.color_id?.value) formatted.color_id = data.color_id.value;
    if (data.year?.value) formatted.year = data.year.value;

    setMultipleFilters(formatted);

    router.push(`/${locale}/listing`);
  };

  return (
    <>
      <div className="flex md:flex-row flex-col item-center gap-2.5 w-full">
        <FormProvider
          methods={methods}
          onSubmit={handleSubmit(onSubmit)}
          className={"space-y-4 bg-white rounded-lg w-full"}>
          <div className="bg-white rounded-lg shadow-lg flex flex-wrap md:flex-nowrap items-center md:gap-1">
            <div className="basis-1/2 md:basis-1/4">
              <RHFSelect
                name="brand_id"
                placeholder={locale === "ar" ? "العلامات التجارية" : "Brands"}
                options={makeData}
                isLoading={allBrandLoading}
                className="!text-nowrap !mb-0 !border-white"
              />
            </div>
            <div className="basis-1/2 md:basis-1/4">
              <RHFSelect
                name="body_type_id"
                placeholder={locale === "ar" ? "أنواع الجسم" : "Body Types"}
                options={bodyData}
                isLoading={bodyTypeLoading}
                className="!text-nowrap !mb-0 !border-white"
              />
            </div>
            <div className="basis-1/2 md:basis-1/4">
              <RHFSelect
                name="model_id"
                placeholder={locale === "ar" ? "نماذج" : "Models"}
                options={modelsData}
                isLoading={modelLoading}
                className="!text-nowrap !mb-0 !border-white"
              />
            </div>
            <div className="basis-1/2 md:basis-1/4">
              <RHFTextField
                name="Price"
                placeholder={locale === "ar" ? "السعر" : "Price"}
                type={`number`}
                min={0}
                className="!text-nowrap !mb-0 !border-white"
              />
            </div>
          </div>
        </FormProvider>
        <Button
          type="submit"
          variant={`primary`}
          className={`!rounded-sm !border-none !text-white`}
          text={`Search`}
        />
      </div>
    </>
  );
};

export default FilterBar;
