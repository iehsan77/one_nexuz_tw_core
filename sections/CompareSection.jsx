"use client";
import Heading2 from "@/components/Typography/Heading2";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "@/components/Image/Image";
import CarComparisonTable from "./CarComparisonTable";
import { ConvertToCurrency, titleLangConverter } from "@/utils/apiHelper";
import { Icon } from "@iconify/react";
import useDebounce from "@/hooks/useDebounce";
import NotFound from "@/components/NotFound/NotFound";
import Pagination from "@/components/Pagination/Pagination";
import Button from "@/components/Button/Button";
import { icons } from "@/utils/icon";
import { GET, POST_JSON } from "@/actions/actions";
import { endpoints } from "@/utils/endpoints";
import { toast } from "sonner";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import Loader from "@/components/Loader/Loader";

const transformProductData = (apiProducts) => {
  return apiProducts.map((product) => ({
    ...product,
    id: product.id,
    title_en: product.title_en,
    title_ar: product.title_ar,
    selected: false,
  }));
};

const CompareSection = ({ slug }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const modalRef = useRef(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState();
  const [keywords, setKeywords] = useState("");
  const debouncedKeywords = useDebounce(keywords, 500);
  const [allProducts, setAllProducts] = useState([]);
  const { locale } = useContext(LanguageContext);
  const [slugData, setSlugData] = useState([]);
  const [slugLoading, setSlugLoading] = useState(false);
  const [slugError, setSlugError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setSlugLoading(true);
        setSlugError(null);
        const res = await GET(endpoints.DETAILS.GET_CAR_DETAILS(slug));
        if (res?.status === 200) {
          setSlugLoading(false);
          setSlugError(null);
          setSlugData(res?.data);
          // Transform the slug product to match our format
          const slugProduct = {
            ...res.data,
            id: res.data.id,
            title_en: res.data.title_en,
            title_ar: res.data.title_ar,
            selected: true,
          };

          setSelectedProducts([slugProduct]);
        } else {
          setSlugLoading(false);
          setSlugError(res?.message || "Failed to load categories");
        }
      } catch (err) {
        setSlugLoading(false);
        setSlugError(err.message || "Error loading navigation");
      }
    };
    fetchData();
  }, []);

  // Close modal when clicking outside
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  const handlePageNumber = (data) => {
    setPageNumber(data);
  };
  // modal api
  useEffect(() => {
    const fetchData = async () => {
      const body = {
        nPerPage: 12,
        pageNumber,
        keywords: debouncedKeywords || "",
      };
      try {
        setLoading(true);
        setError(null);
        const res = await POST_JSON(
          endpoints.COMPARE.GET_COMPARE_PRODUCTS,
          body
        );
        if (res?.status === 200) {
          setLoading(false);
          const transformedProducts = transformProductData(res.data);
          const filteredProducts = transformedProducts.filter(
            (product) => !selectedProducts.some((sp) => sp.id === product.id)
          );
          setAllProducts(filteredProducts);
          setCount(res?.total_records);
        } else {
          setLoading(false);
          setError(res?.message || "Failed to fetch products");
        }
      } catch (err) {
        setLoading(false);
        console.error(err);
        setError(err.message || "An error occurred");
      }
    };

    fetchData();
  }, [pageNumber, debouncedKeywords]);

  const removeProduct = useCallback(
    (productId) => {
      const updatedSelected = selectedProducts.filter(
        (p) => p.id !== productId
      );
      const removedProduct = selectedProducts.find((p) => p.id === productId);

      if (!removedProduct) return;

      setSelectedProducts(updatedSelected);

      setAllProducts((prev) => [
        { ...removedProduct, selected: false },
        ...prev,
      ]);
    },
    [selectedProducts]
  );

  const toggleProductSelection = (productId) => {
    const product = allProducts.find((p) => p.id === productId);
    if (selectedProducts.length >= 3 && !product?.selected) {
      toast.warning("You can compare maximum 3 products at a time");
      return;
    }

    const updatedProducts = allProducts.map((p) =>
      p.id === productId ? { ...p, selected: !p.selected } : p
    );

    setAllProducts(updatedProducts);

    if (product?.selected) {
      setSelectedProducts(selectedProducts.filter((p) => p.id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  if (slugLoading) {
    return <Loader />;
  }

  return (
    <>
      <section className="secPadding">
        <div className="container">
          <div className="md:mb-12 mb-8">
            <div className="flex items-center justify-center">
              <Heading2
                blackHeading={
                  locale === "ar"
                    ? "اختر سيارتك: قارن بين السيارات الفاخرة في دبي"
                    : "Choose Your Drive: Compare Premium Cars in Dubai"
                }
              />
            </div>
          </div>

          {/* 🔥 Sticky Top Bar */}
          <div className="border-b border-gray-200 sticky top-[5.6rem] lg:top-[7.5rem] bg-white z-30">
            <div className="">
              <div className="overflow-x-auto">
                <div className="min-w-[1000px] grid grid-cols-4">
                  {/* Overview Label Column */}
                  <div className="py-4 flex items-center justify-center gap-2 flex-col border-x border-t border-gray-200 min-w-[250px]">
                    <h3 className="display4 font-semibold">
                      {locale === "ar" ? "ملخص" : "OVERVIEW"}
                    </h3>
                  </div>

                  {/* Product Cards */}
                  {selectedProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="border-x border-t border-gray-200 p-8 text-center relative min-w-[250px]">
                      {product.id !== slugData?.id && (
                        <button
                          onClick={() => removeProduct(product.id)}
                          className="absolute top-1 right-1 text-gray-400 hover:text-red-500 bg-gray-200 p-1"
                          title="Remove product">
                          <Icon icon={icons.remove} />
                        </button>
                      )}
                      <p className="font-semibold mb-2 text-sm">
                        {titleLangConverter(
                          product?.title_en,
                          product?.title_ar,
                          locale
                        )}
                      </p>
                      {index < selectedProducts.length - 1 && (
                        <div className="text-sm font-bold mt-0 absolute top-1/2 left-full transform -translate-x-1/2 -translate-y-1/2 z-20 bg-gray-200 p-2 rounded-full">
                          {locale === "ar" ? "مقابل" : "VS"}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Add Car Button (visible only if less than 3 cars) */}
                  {selectedProducts.length < 3 && (
                    <div
                      className="text-primary font-semibold border-x border-t border-gray-200 p-4 text-center cursor-pointer flex items-center justify-center min-w-[250px]"
                      onClick={() => setIsModalOpen(true)}>
                      {locale === "ar" ? "أضف سيارة" : "Add Car"}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Table Below */}
          <div>
            <CarComparisonTable data={selectedProducts} />
          </div>
        </div>
      </section>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div
            ref={modalRef}
            className="bg-white rounded-lg p-6 w-full max-w-[1000px] max-h-[80vh] flex flex-col shadow-xl border border-grayLight"
            style={{ minHeight: "500px" }}>
            <>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">
                  {locale === "ar"
                    ? "اختر السيارة للمقارنة"
                    : "Select Car to Compare"}
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700">
                  ✕
                </button>
              </div>
              <p className="mb-4 text-sm text-gray-600">
                {selectedProducts.length >= 3
                  ? locale === "ar"
                    ? "تم اختيار الحد الأقصى من 3 سيارات"
                    : "Maximum 3 cars selected"
                  : locale === "ar"
                  ? `يمكنك اختيار ${3 - selectedProducts.length} سيارات أخرى`
                  : `You can select up to ${
                      3 - selectedProducts.length
                    } more cars`}
              </p>

              <div className="relative mb-4">
                <input
                  type="text"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  placeholder={
                    locale === "ar"
                      ? "ما الذي تبحث عنه؟"
                      : "What are you looking for?"
                  }
                  className="bg-grayLight pr-10 pl-4 py-2 outline-none border rounded-lg w-full border-grayLight transition-[border] duration-500"
                  dir="ltr"
                />

                <button
                  className={`absolute inset-y-[5px] mr-2 right-0 flex items-center px-2 text-white bg-primary rounded-lg`}>
                  <Icon
                    icon={"iconamoon:search"}
                    height="1.2rem"
                    width="1.2rem"
                  />
                </button>
              </div>
              <div className="flex-grow overflow-y-auto">
                {loading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[...Array(6)].map((_, index) => (
                      <div key={index} className="animate-pulse ">
                        <div className="h-[240px] rounded-lg bg-slate-300 space-y-3 mb-2"></div>
                      </div>
                    ))}
                  </div>
                ) : error ? (
                  <div>{error}</div>
                ) : allProducts?.length ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {allProducts.map((product) => (
                        <div
                          key={product.id}
                          onClick={() => toggleProductSelection(product.id)}
                          className={`border rounded-lg cursor-pointer ${
                            product.selected ? "border-blue-500 bg-blue-50" : ""
                          } ${
                            selectedProducts.length >= 3 && !product.selected
                              ? "opacity-50"
                              : ""
                          }`}>
                          <div className="flex flex-col">
                            <div className="h-[170px] w-full relative overflow-hidden rounded-md">
                              {/* Default Image */}
                              <Image
                                src={
                                  product?.thumbnails?.[0]?.media_url ||
                                  "/placeholder.jpg"
                                }
                                alt={
                                  product?.car_manufacturer_detail?.title_en ||
                                  "Car"
                                }
                                fill
                                className={`object-cover h-full w-full transition-opacity duration-500`}
                              />
                            </div>
                            <div className="p-4">
                              <div className="relative group">
                                <p className="font-semibold cursor-default">
                                  {titleLangConverter(
                                    product?.title_en,
                                    product?.title_ar,
                                    locale
                                  )}
                                </p>
                              </div>

                              <p className="text-gray-600">
                                {ConvertToCurrency(
                                  Number(product.rental_price)
                                )}
                              </p>
                              <p className="text-xs mt-1">
                                {titleLangConverter(
                                  product?.fuel_type_detail?.title_en,
                                  product?.fuel_type_detail?.title_ar,
                                  locale
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Pagination
                      count={count}
                      handlePageNumber={handlePageNumber}
                      pageNumber={pageNumber}
                      itemsPerPage={12}
                    />
                  </>
                ) : (
                  <div>
                    <NotFound />
                  </div>
                )}
              </div>
              <div className="mt-4 flex justify-end sticky bottom-0 bg-white pt-4">
                <Button
                  variant="solid"
                  onClick={() => setIsModalOpen(false)}
                  text={locale === "ar" ? "منتهي" : "Done"}
                />
              </div>
            </>
          </div>
        </div>
      )}
    </>
  );
};
export default CompareSection;
