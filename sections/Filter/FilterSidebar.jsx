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
import useFilterStore from "@/stores/filterStore";
import RHFMultiSlider from "@/components/FormFields/RHFMultiSlider";
import useColorStore from "@/stores/colorStore";
import { Icon } from "@iconify/react";
import { endpoints } from "@/utils/endpoints";
import { GET } from "@/actions/actions";
import useDebounce from "@/hooks/useDebounce";
import Heading6 from "@/components/Typography/Heading6";
import { CarSolutionLeftSVG } from "@/public/assets/icons/SVGIcons";
import Paragraph from "@/components/Typography/Paragraph";
import RHFSelect from "@/components/FormFields/RHFSelect";
import Button from "@/components/Button/Button";

const colorDataDummy = [
  {
    id: 1,
    title_en: "Black",
    title_ar: "أبيض"
  },
  {
    id: 2,
    title_en: "White",
    title_ar: "أسود"
  },
  {
    id: 3,
    title_en: "Gray",
    title_ar: "فضي"
  },
  {
    id: 4,
    title_en: "Silver",
    title_ar: "أزرق"
  },
  {
    id: 5,
    title_en: "Red",
    title_ar: "أحمر"
  },
  {
    id: 6,
    title_en: "Blue",
    title_ar: "رمادي"
  },
  {
    id: 7,
    title_en: "Brown",
    title_ar: "أخضر"
  },
  {
    id: 8,
    title_en: "Gold",
    title_ar: "بيج"
  },
  {
    id: 9,
    title_en: "Green",
    title_ar: "بيج"
  },
  {
    id: 10,
    title_en: "Orange",
    title_ar: "بيج"
  },
  {
    id: 11,
    title_en: "Burgundy",
    title_ar: "بيج"
  }
];
const bodyTypeDataDummy = [
  {
    id: 1,
    title_en: "SUV",
    title_ar: "أبيض"
  },
  {
    id: 2,
    title_en: "Sedan",
    title_ar: "أسود"
  },
  {
    id: 3,
    title_en: "Pickup",
    title_ar: "فضي"
  },
  {
    id: 4,
    title_en: "Hatchback",
    title_ar: "أزرق"
  },
  {
    id: 5,
    title_en: "Coupe",
    title_ar: "أحمر"
  },
  {
    id: 6,
    title_en: "Wagon",
    title_ar: "رمادي"
  },
  {
    id: 7,
    title_en: "Minivan",
    title_ar: "أخضر"
  },
  {
    id: 8,
    title_en: "Convertible",
    title_ar: "بيج"
  },
  {
    id: 9,
    title_en: "Van",
    title_ar: "بيج"
  },
  {
    id: 10,
    title_en: "Chassis",
    title_ar: "بيج"
  }
];

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
      priceRange: [filters.price_min || 0, filters.price_max || 11111]
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
    priceRange: z.tuple([z.number(), z.number()])
  });

  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues
  });

  const { watch, register, reset } = methods;

  const watchedCategory = watch("category");
  const watchedBrand = watch("brand");
  const watchedModel = watch("model");
  const watchedBodyType = watch("body_type");
  const watchedYear = watch("year");
  const watchedColor = watch("color_id");
  const watchedPriceRange = watch("priceRange");
  const watchedCondition = watch("Condition");

  const debouncedPriceRange = useDebounce(watchedPriceRange, 500);

  const selectedCategory = categoryData?.find(
    (c) => String(c.id) === watchedCondition
  );
  const selectedCondition = categoryData?.find(
    (cd) => String(cd.id) === watchedCategory
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
      condition_id: Number(watchedCondition) || 0,
      brand_id: Number(watchedBrand) || 0,
      model_id: Number(watchedModel) || 0,
      body_type_id: Number(watchedBodyType) || 0,
      year: Number(watchedYear) || 0,
      color_id: Number(watchedColor) || 0,
      price_min: watchedPriceRange?.[0] || 0,
      price_max: watchedPriceRange?.[1] || 0
    });
    return () => {
      resetFilters();
    };
  }, [
    watchedCategory,
    watchedCondition,
    watchedBrand,
    watchedBodyType,
    watchedColor,
    watchedModel,
    watchedYear
  ]);

  // Watch price range changes
  useEffect(() => {
    if (debouncedPriceRange && debouncedPriceRange.length === 2) {
      const [min, max] = debouncedPriceRange;
      setMultipleFilters({
        ...filters,
        price_min: min,
        price_max: max
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
      priceRange: ""
    });
  };

  useEffect(() => {
    reset(defaultValues);
  }, []);

  const translations = {
    en: {
      filterBy: "Filter By",
      clearAll: "Clear All",
      pricePerDay: "Price",
      mileage: "Mileage",
      category: "Category",
      brands: "Brands",
      models: "Models",
      make: "Make",
      bodyType: "Body Style",
      bodyColor: "Body Color",
      years: "Years",
      condition: "Condition"
    },
    ar: {
      filterBy: "فرز حسب",
      clearAll: "مسح الكل",
      pricePerDay: "السعر لكل يوم",
      mileage: "السعر لكل يوم",
      category: "الفئة",
      brands: "العلامات التجارية",
      make: "الموديلات",
      models: "الموديلات",
      bodyType: "نوع الهيكل",
      bodyColor: "لون الجسم",
      years: "السنوات",
      condition: "السنوات"
    }
  };

  const makebarData = ["", "", "", "", "", ""];
  const modelbarData = ["", "", "", "", "", ""];
  const t = translations[locale] || translations.en;

  return (
    <>
      <Form {...methods}>
        <form
          className={`py-4 ${
            modal ? "w-full" : "max-w-72"
          } bg-white rounded-lg top-[73px]`}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">{t.filterBy}</h2>
            <button
              type="button"
              onClick={handleClear}
              className="text-sm text-gray-500 hover:text-primary cursor-pointer"
            >
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
                  onClick={() => methods.setValue("category", "")}
                >
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
                  onClick={() => methods.setValue("brand", "")}
                >
                  <Icon icon="iconamoon:close-light" width={16} />
                </button>
              </div>
            )}
            {selectedCondition && (
              <div className="flex items-center bg-primary text-white rounded-full px-3 py-1 text-sm">
                {titleLangConverter(
                  selectedCondition.title_en,
                  selectedCondition.title_ar,
                  locale
                )}
                <button
                  type="button"
                  className="ml-2 cursor-pointer"
                  onClick={() => methods.setValue("brand", "")}
                >
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
                  onClick={() => methods.setValue("model", "")}
                >
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
                  onClick={() => methods.setValue("year", "")}
                >
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
                  onClick={() => methods.setValue("body_type", "")}
                >
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
                  onClick={() => methods.setValue("color_id", "")}
                >
                  <Icon icon="iconamoon:close-light" width={16} />
                </button>
              </div>
            )}

            {(watchedPriceRange[0] !== 0 || watchedPriceRange[1] !== 11111) && (
              <div className="flex items-center bg-primary text-white rounded-full px-3 py-1 text-sm">
                USD {watchedPriceRange[0]} - USD {watchedPriceRange[1]}
                <button
                  type="button"
                  className="ml-2 hover:text-red-200"
                  onClick={() => methods.setValue("priceRange", [0, 11111])}
                >
                  <Icon icon="iconamoon:close-light" width={16} />
                </button>
              </div>
            )}
          </div>
          <Paragraph blackText1={`Showing 0 of 100`} />

          {/* Price Range */}
          <div className="border-t">
            <Heading6
              className="pt-2 mb-4 !font-medium"
              blackHeading={t.pricePerDay}
            />
            <RHFMultiSlider
              name="priceRange"
              min={0}
              max={500000}
              step={500}
              minLabel="$"
              maxLabel="$"
              trackColor="#d40815"
              handleColor="#d40815"
            />
          </div>

          {/* Make */}
          <div className="border-t py-4">
            <Heading6 className="!font-medium" blackHeading={t.make} />
            <RHFSelect
              label="Make"
              name="make"
              placeholder={locale === "ar" ? "نماذج" : "Make"}
              options={makebarData}
              // isLoading={modelLoading}
              className="!text-nowrap !mb-0 !border rounded-sm !border-gray-300"
            />
          </div>

          {/* Model */}
          <div className="border-t py-4">
            <Heading6 className="!font-medium" blackHeading={t.models} />
            <RHFSelect
              label="Models"
              name="models"
              placeholder={locale === "ar" ? "نماذج" : "Models"}
              options={modelbarData}
              // isLoading={modelLoading}
              className="!text-nowrap !mb-0 !border rounded-sm !border-gray-300"
            />
          </div>
          {/* Mileage Range */}
          <div className="border-t py-4">
            <Heading6
              className="!font-medium"
              blackHeading={t.mileage}
            />
            <RHFMultiSlider
              name="mileage"
              min={0}
              max={200}
              step={50}
              minLabel="$"
              maxLabel="$"
              trackColor="#d40815"
              handleColor="#d40815"
            />
          </div>
          {/* Year Range */}
          <div className="border-t py-4">
            <Heading6
              className="!font-medium"
              blackHeading={t.years}
            />
            <RHFMultiSlider
              name="years"
              min={2006}
              max={2025}
              step={1}
              minLabel=""
              maxLabel=""
              trackColor="#d40815"
              handleColor="#d40815"
            />
          </div>

          <div className="border-t py-4">
            <Heading6
              className="!font-medium"
              blackHeading={t.condition}
            />
            <div className="flex flex-wrap gap-2">
              <Button
                variant={`primary`}
                text={`New Cars`}
                className={`!py-1  !px-2`}
              />
              <Button
                variant={`outline`}
                text={`Used Cars`}
                className={`!py-1 !border-black !text-black !px-2`}
              />
            </div>
          </div>

          {/* Other Filters */}
          {categoryLoading ||
          allBrandLoading ||
          bodyTypeLoading ||
          modelLoading ||
          colorLoading ? (
            <div className="space-y-4 pt-2">
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
              className={`space-y-5 ${
                modal ? "grid md:grid-cols-3 gap-5" : ""
              }`}
            >
              {/* colors */}
              <div className="border-t">
                <Heading6
                  className="pt-2 mb-4 !font-medium"
                  blackHeading={t.bodyColor}
                />
                <div className="max-h-[200px] overflow-y-auto">
                  {colorDataDummy.map((item) => (
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
              {/* Body Type */}
              <div className="border-t">
                <Heading6
                  className="pt-2 mb-4 !font-medium"
                  blackHeading={t.bodyType}
                />
                <div className="max-h-[200px] overflow-y-auto">
                  {bodyTypeDataDummy?.map((item) => (
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
            </div>
          )}
        </form>
      </Form>
      {/* <div className="relative">
                    <div className="absolute left-0 top-0 sm:block hidden z-20">
                    </div>
                  </div> */}
      <CarSolutionLeftSVG />
    </>
  );
}
