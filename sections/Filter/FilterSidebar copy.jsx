"use client";
import { useEffect, useContext, useMemo, useState } from "react";
import { FormProvider as Form, useForm } from "react-hook-form";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useAllBrandStore from "@/stores/AllBrandStore";
import useCategoryStore from "@/stores/categoryStore";
import useBodyTypeStore from "@/stores/bodyTypeStore";
import { titleLangConverter } from "@/utils/apiHelper";
import RadioInput from "@/components/FormFields/RadioInput";
import Heading5 from "@/components/Typography/Heading5";
import useFilterStore from "@/stores/filterStore";
import RHFMultiSlider from "@/components/FormFields/RHFMultiSlider";
import useColorStore from "@/stores/colorStore";
import { Icon } from "@iconify/react";
import { endpoints } from "@/utils/endpoints";
import { GET } from "@/actions/actions";
import useDebounce from "@/hooks/useDebounce";

export default function FilterSidebar({ modal }) {
  const [modelData, setModelData] = useState([]);
  const [modelLoading, setModelLoading] = useState(false);
  const [modelError, setModelError] = useState(null);
  const { locale } = useContext(LanguageContext);
  const { categoryData, categoryLoading, fetchCategoriesData } =
    useCategoryStore();
  const { allBrandData, allBrandLoading, fetchAllBrandData } =
    useAllBrandStore();
  const { bodyTypeData, bodyTypeLoading, fetchBodyTypeData } =
    useBodyTypeStore();
  const { filters, setMultipleFilters, resetFilters } = useFilterStore();
  const { colorData, colorLoading, fetchColorData } = useColorStore();

  const currentYear = new Date().getFullYear();
  const yearOptions = useMemo(() => {
    const years = [];
    for (let y = currentYear; y >= 2001; y--) {
      years.push({ label: y.toString(), value: y.toString() });
    }
    return years;
  }, []);

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
    fetchCategoriesData();
    fetchAllBrandData();
    fetchBodyTypeData();
    fetchColorData();
    fetchModelData();
  }, []);

  const defaultValues = useMemo(
    () => ({
      category: filters.category_id ? String(filters.category_id) : "",
      brand: filters.brand_id ? String(filters.brand_id) : "",
      model: filters.model_id ? String(filters.model_id) : "",
      body_type: filters.body_type_id ? String(filters.body_type_id) : "",
      color_id: filters.color_id ? String(filters.color_id) : "",
      year: filters.year ? String(filters.year) : "",
      priceRange: [filters.price_min || 0, filters.price_max || 11111],
    }),
    [filters]
  );

  const formSchema = z.object({
    category: z.string(),
    brand: z.string(),
    model: z.string(),
    body_type: z.string(),
    color_id: z.string(),
    year: z.string(),
    priceRange: z.tuple([z.number(), z.number()]),
  });

  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const { watch, register, reset } = methods;

  const watchedCategory = watch("category");
  const watchedBrand = watch("brand");
  const watchedModel = watch("model");
  const watchedBodyType = watch("body_type");
  const watchedYear = watch("year");
  const watchedColor = watch("color_id");
  const watchedPriceRange = watch("priceRange");

  const debouncedPriceRange = useDebounce(watchedPriceRange, 500);

  const selectedCategory = categoryData?.find(
    (c) => String(c.id) === watchedCategory
  );
  const selectedBrand = allBrandData?.find(
    (b) => String(b.id) === watchedBrand
  );
  const selectedModel = modelData?.find((b) => String(b.id) === watchedModel);
  const selectedBodyType = bodyTypeData?.find(
    (bt) => String(bt.id) === watchedBodyType
  );
  const selectedColor = colorData?.colors?.find(
    (cl) => String(cl.id) === watchedColor
  );
  const selectedYear = yearOptions?.find(
    (b) => String(b.value) === watchedYear
  );
  // Watch category/brand/body_type changes
  useEffect(() => {
    setMultipleFilters({
      category_id: Number(watchedCategory) || 0,
      brand_id: Number(watchedBrand) || 0,
      model_id: Number(watchedModel) || 0,
      body_type_id: Number(watchedBodyType) || 0,
      year: Number(watchedYear) || 0,
      color_id: Number(watchedColor) || 0,
      price_min: watchedPriceRange?.[0] || 0,
      price_max: watchedPriceRange?.[1] || 0,
    });
    return () => {
      resetFilters();
    };
  }, [
    watchedCategory,
    watchedBrand,
    watchedBodyType,
    watchedColor,
    watchedModel,
    watchedYear,
  ]);

  // Watch price range changes
  useEffect(() => {
    if (debouncedPriceRange && debouncedPriceRange.length === 2) {
      const [min, max] = debouncedPriceRange;
      setMultipleFilters({
        ...filters,
        price_min: min,
        price_max: max,
      });
    }
  }, [debouncedPriceRange]);

  const handleClear = () => {
    resetFilters();
    reset({
      category: "",
      brand: "",
      model: "",
      body_type: "",
      color_id: "",
      year: "",
      priceRange: [0, 11111],
    });
  };

  useEffect(() => {
    reset(defaultValues);
  }, []);

  const translations = {
    en: {
      filterBy: "Filter By",
      clearAll: "Clear All",
      pricePerDay: "Price per Day",
      category: "Category",
      brands: "Brands",
      models: "Models",
      bodyType: "Body Type",
      bodyColor: "Body Color",
      years: "Years",
    },
    ar: {
      filterBy: "فرز حسب",
      clearAll: "مسح الكل",
      pricePerDay: "السعر لكل يوم",
      category: "الفئة",
      brands: "العلامات التجارية",
      models: "الموديلات",
      bodyType: "نوع الهيكل",
      bodyColor: "لون الجسم",
      years: "السنوات",
    },
  };

  const t = translations[locale] || translations.en;

  return (
    <Form {...methods}>
      <form
        className={`py-4 ${
          modal ? "w-full" : "max-w-72"
        } bg-white rounded-lg top-[73px]`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{t.filterBy}</h2>
          <button
            type="button"
            onClick={handleClear}
            className="text-sm text-gray-500 hover:text-primary cursor-pointer">
            {t.clearAll}
          </button>
        </div>

        {/* Selected Filters as Chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          {selectedCategory && (
            <div className="flex items-center bg-primary text-white rounded-full px-3 py-1 text-sm">
              {titleLangConverter(
                selectedCategory.title_en,
                selectedCategory.title_ar,
                locale
              )}
              <button
                type="button"
                className="ml-2 cursor-pointer"
                onClick={() => methods.setValue("category", "")}>
                <Icon icon="iconamoon:close-light" width={16} />
              </button>
            </div>
          )}

          {selectedBrand && (
            <div className="flex items-center bg-primary text-white rounded-full px-3 py-1 text-sm">
              {titleLangConverter(
                selectedBrand.title_en,
                selectedBrand.title_ar,
                locale
              )}
              <button
                type="button"
                className="ml-2 cursor-pointer"
                onClick={() => methods.setValue("brand", "")}>
                <Icon icon="iconamoon:close-light" width={16} />
              </button>
            </div>
          )}
          {selectedModel && (
            <div className="flex items-center bg-primary text-white rounded-full px-3 py-1 text-sm">
              {titleLangConverter(
                selectedModel.title_en,
                selectedModel.title_ar,
                locale
              )}
              <button
                type="button"
                className="ml-2 cursor-pointer"
                onClick={() => methods.setValue("model", "")}>
                <Icon icon="iconamoon:close-light" width={16} />
              </button>
            </div>
          )}
          {selectedYear && (
            <div className="flex items-center bg-primary text-white rounded-full px-3 py-1 text-sm">
              {selectedYear.label}
              <button
                type="button"
                className="ml-2 cursor-pointer"
                onClick={() => methods.setValue("year", "")}>
                <Icon icon="iconamoon:close-light" width={16} />
              </button>
            </div>
          )}

          {selectedBodyType && (
            <div className="flex items-center bg-primary text-white rounded-full px-3 py-1 text-sm">
              {titleLangConverter(
                selectedBodyType.title_en,
                selectedBodyType.title_ar,
                locale
              )}
              <button
                type="button"
                className="ml-2 cursor-pointer"
                onClick={() => methods.setValue("body_type", "")}>
                <Icon icon="iconamoon:close-light" width={16} />
              </button>
            </div>
          )}

          {selectedColor && (
            <div className="flex items-center bg-primary text-white rounded-full px-3 py-1 text-sm">
              {titleLangConverter(
                selectedColor.title_en,
                selectedColor.title_ar,
                locale
              )}
              <button
                type="button"
                className="ml-2 cursor-pointer"
                onClick={() => methods.setValue("color_id", "")}>
                <Icon icon="iconamoon:close-light" width={16} />
              </button>
            </div>
          )}

          {(watchedPriceRange[0] !== 0 || watchedPriceRange[1] !== 11111) && (
            <div className="flex items-center bg-primary text-white rounded-full px-3 py-1 text-sm">
              AED {watchedPriceRange[0]} - AED {watchedPriceRange[1]}
              <button
                type="button"
                className="ml-2 hover:text-red-200"
                onClick={() => methods.setValue("priceRange", [0, 11111])}>
                <Icon icon="iconamoon:close-light" width={16} />
              </button>
            </div>
          )}
        </div>

        {/* Price Range */}
        <div>
          <Heading5 className="mb-4" blackHeading={t.pricePerDay} />
          <RHFMultiSlider
            name="priceRange"
            min={0}
            max={11111}
            minLabel="$"
            maxLabel="$"
            trackColor="#d40815"
            handleColor="#d40815"
          />
        </div>

        {/* Other Filters */}
        {categoryLoading ||
        allBrandLoading ||
        bodyTypeLoading ||
        modelLoading ||
        colorLoading ? (
          <div className="space-y-4">
            {[...Array(9)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 mb-1"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className={`space-y-5 ${modal ? "grid md:grid-cols-3 gap-5" : ""}`}>
            {/* Category */}
            <div>
              <Heading5 className="mb-4" blackHeading={t.category} />
              <div className="max-h-[200px] overflow-y-auto">
                {categoryData?.map((item) => (
                  <div key={item?.id} className="!mt-2 w-fit">
                    <RadioInput
                      name="category"
                      value={item?.id}
                      title={titleLangConverter(
                        item?.title_en,
                        item?.title_ar,
                        locale
                      )}
                      checked={watchedCategory == item?.id}
                      {...register("category")}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Brand */}
            <div>
              <Heading5 className="mb-4" blackHeading={t.brands} />
              <div className="max-h-[200px] overflow-y-auto">
                {allBrandData?.map((item) => (
                  <div key={item?.id} className="!mt-2 w-fit">
                    <RadioInput
                      name="brand"
                      value={item?.id}
                      title={titleLangConverter(
                        item?.title_en,
                        item?.title_ar,
                        locale
                      )}
                      checked={watchedBrand == item?.id}
                      {...register("brand")}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Model */}
            <div>
              <Heading5 className="mb-4" blackHeading={t.models} />
              <div className="max-h-[200px] overflow-y-auto">
                {modelData?.map((item) => (
                  <div key={item?.id} className="!mt-2 w-fit">
                    <RadioInput
                      name="model"
                      value={item?.id}
                      title={titleLangConverter(
                        item?.title_en,
                        item?.title_ar,
                        locale
                      )}
                      checked={watchedModel == item?.id}
                      {...register("model")}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Body Type */}
            <div>
              <Heading5 className="mb-4" blackHeading={t.bodyType} />
              <div className="max-h-[200px] overflow-y-auto">
                {bodyTypeData?.map((item) => (
                  <div key={item?.id} className="!mt-2 w-fit">
                    <RadioInput
                      name="body_type"
                      value={item?.id}
                      title={titleLangConverter(
                        item?.title_en,
                        item?.title_ar,
                        locale
                      )}
                      checked={watchedBodyType == item?.id}
                      {...register("body_type")}
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* colors */}
            <div>
              <Heading5 className="mb-4" blackHeading={t.bodyColor} />
              <div className="max-h-[200px] overflow-y-auto">
                {colorData?.colors?.map((item) => (
                  <div key={item?.id} className="!mt-2 w-fit">
                    <RadioInput
                      name="color_id"
                      value={item?.id}
                      title={titleLangConverter(
                        item?.title_en,
                        item?.title_ar,
                        locale
                      )}
                      checked={watchedColor == item?.id}
                      {...register("color_id")}
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Year */}
            <div>
              <Heading5 className="mb-4" blackHeading={t.years} />
              <div className="max-h-[200px] overflow-y-auto">
                {yearOptions?.map((item) => (
                  <div key={item?.value} className="!mt-2 w-fit">
                    <RadioInput
                      name="year"
                      value={item?.value}
                      title={item?.label}
                      checked={watchedYear == item?.value}
                      {...register("year")}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </form>
    </Form>
  );
}
