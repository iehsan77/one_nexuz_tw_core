"use client";

import { useContext, useEffect, useMemo, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format, differenceInHours } from "date-fns";
import Heading2 from "@/components/Typography/Heading2";
import Heading4 from "@/components/Typography/Heading4";
import Paragraph from "@/components/Typography/Paragraph";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Heading5 from "@/components/Typography/Heading5";
import Button from "@/components/Button/Button";
import { FormProvider as Form } from "react-hook-form";
import { ConvertToCurrency, logoutUser } from "@/utils/apiHelper";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import NumberInput from "../Forms/NumberInput";
import TextInput from "@/components/FormFields/TextInput";
import useVendorStore from "@/stores/vendor-store";
import { toast } from "sonner";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import { useRouter } from "next/navigation";
import { endpoints } from "@/utils/endpoints";
import { POST } from "@/actions/actions";
import useThankyouStore from "@/stores/thankyouStore";

export default function BookingSection({ data }) {
  const { vendor, setVendor } = useVendorStore();
  const [value, setValue] = useState([new Date(), new Date()]);
  const [startTime, setStartTime] = useState("12:00");
  const [endTime, setEndTime] = useState("12:00");
  const { locale } = useContext(LanguageContext);
  const router = useRouter();
  const { setBooking } = useThankyouStore();

  const [pickupDate, dropoffDate] = value;

  const combineDateTime = (date, time) => {
    const [hours, minutes] = time.split(":").map(Number);
    const newDate = new Date(date);
    newDate.setHours(hours, minutes, 0, 0);
    return newDate.toISOString();
  };

  const calculateRentalDays = () => {
    if (!pickupDate || !dropoffDate) return 1;

    const startDateTime = new Date(combineDateTime(pickupDate, startTime));
    const endDateTime = new Date(combineDateTime(dropoffDate, endTime));

    const diffInHours = differenceInHours(endDateTime, startDateTime);

    if (diffInHours <= 0) return 1;
    if (diffInHours <= 24) return 1;

    return Math.ceil(diffInHours / 24);
  };

  const rentalDays = calculateRentalDays();
  const rentalPrice = data?.rental_price * rentalDays || 0;
  const securityDeposit = data?.security_deposit_amount || 0;
  const vat = Math.round(rentalPrice * 0.05);
  const total = rentalPrice + vat;
  const grandTotal = total + securityDeposit;

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const isSelected = value?.some?.(
        (d) => d?.toDateString() === date?.toDateString()
      );
      const isInRange =
        value?.length === 2 && date > value[0] && date < value[1];
      const isActive =
        value?.length === 1 && value[0]?.toDateString() === date.toDateString();
      const isToday = date.toDateString() === new Date().toDateString();
      if (isSelected) return "!bg-secondary !text-white font-bold ";
      if (isInRange) return "!bg-white !text-secondary !font-bold";
      if (isActive) return "!bg-[#efea21] !text-black !font-semibold ";
      if (isToday) return "!bg-[#efea21] !text-black !font-semibold ";
    }
    return "hover:bg-gray-100 transition";
  };

  const validateSchema = z.object({
    id: z.number(),
    client_name: z
      .string()
      .min(2, {
        message:
          locale === "ar" ? "اسم العميل مطلوب" : "Client Name is required",
      })
      .max(20, {
        message:
          locale === "ar"
            ? "لا يمكن أن يتجاوز اسم العميل 20 حرف"
            : "Client Name can't exceed 20 characters",
      }),
    client_email: z
      .string()
      .min(2, {
        message:
          locale === "ar" ? "البريد الإلكتروني مطلوب" : "Email is required",
      })
      .max(35, {
        message:
          locale === "ar"
            ? "لا يمكن أن يتجاوز البريد الإلكتروني 35 حرف"
            : "Email can't exceed 35 characters",
      }),
    phone: z
      .string()
      .min(1, {
        message:
          locale === "ar" ? "رقم الاتصال مطلوب" : "Contact Number is required",
      })
      .max(14, {
        message:
          locale === "ar"
            ? "لا يمكن أن يتجاوز رقم الهاتف 14 حرفًا"
            : "Phone number can't exceed 14 characters",
      }),
    special_request: z.string().min(1, {
      message: locale === "ar" ? "الرسالة مطلوبة" : "Message is required",
    }),
    pickup_location: z.string().optional(),
    drop_off_location: z.string().optional(),
  });

  const defaultValues = useMemo(
    () => ({
      id: 0,
      client_name:
        (vendor?.first_name ? vendor.first_name : "") +
        (vendor?.last_name ? " " + vendor.last_name : ""),
      client_email: vendor?.email || "",
      phone: "",
      special_request: "",
      pickup_location: "",
      drop_off_location: "",
    }),
    []
  );

  const methods = useForm({
    resolver: zodResolver(validateSchema),
    defaultValues,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = methods;

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues]);

  const onSubmit = async (formData) => {
    if (!vendor?.id) {
      toast.info("Please login to book your car");
      router.push(`/${locale}/login`);
      return;
    }

    const startDateTime = new Date(combineDateTime(pickupDate, startTime));
    const endDateTime = new Date(combineDateTime(dropoffDate, endTime));
    const now = new Date();

    // 1. Pickup and drop-off time: end must be after start
    if (endDateTime <= startDateTime) {
      toast.error("Drop-off time must be after pickup time");
      return;
    }

    // 2. Prevent selecting past time for today
    if (
      pickupDate.toDateString() === now.toDateString() &&
      startDateTime < now
    ) {
      toast.error("You cannot select a past time for today.");
      return;
    }

    const body = {
      ...formData,
      pickup_date_time: startDateTime.toISOString(),
      return_date_time: endDateTime.toISOString(),
      number_of_days: rentalDays,
      security_deposit_amount: data?.security_deposit_amount,
      vehicle_id: data?.id,
      rate_per_day: data?.rental_price,
      tax_percent: 5,
    };

    try {
      const res = await POST(endpoints.DETAILS.ADD_BOOKING, body);
      if (res?.detail !== undefined) {
        toast.error(res.detail);
        setVendor({});
        logoutUser();
      }
      if (res?.status === 201) {
        setBooking(res?.data);
        toast.success(res?.message);
        router.push(`/${locale}/thankyou`);
        reset();
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    }
  };

  const bookingSummary = [
    {
      label: locale === "ar" ? "السعر في اليوم" : "Price Per Day",
      value: `${data?.rental_price}`,
    },
    {
      label:
        locale === "ar"
          ? `ل ${rentalDays} يوم${rentalDays > 1 ? "ات" : ""}`
          : `For ${rentalDays} Day${rentalDays > 1 ? "s" : ""}`,
      value: `${rentalPrice}`,
    },
    {
      label: locale === "ar" ? "ضريبة القيمة المضافة (5%)" : "VAT Tax (5%)",
      value: `${vat}`,
    },
  ];

  return (
    <section>
      {/* Date Selection Section */}
      <div className="bg-secondaryLight p-6 rounded-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
          <div className="w-full bg-white p-3 rounded-md text-center">
            <label className="text-xs text-gray-600 font-medium block mb-1">
              {locale === "ar" ? "تاريخ الاستلام" : "PICKUP DATE"}
            </label>
            <p className="font-medium text-secondary">
              {pickupDate ? format(pickupDate, "PPP") : "-"}
            </p>
          </div>
          <div className="w-full bg-white p-3 rounded-md text-center">
            <label className="text-xs text-gray-600 font-medium block mb-1">
              {locale === "ar" ? "تاريخ التسليم" : "DROP OFF DATE"}
            </label>
            <p className="font-medium text-secondary">
              {dropoffDate ? format(dropoffDate, "PPP") : "-"}
            </p>
          </div>
          {/* tile */}
          {value?.length === 2 && (
            <div
              className="w-full bg-white p-3 rounded-md text-center"
              dir="ltr">
              <label className="text-xs text-gray-600 font-medium block mb-1">
                {locale === "ar" ? "وقت البدء" : "START TIME"}
              </label>
              <TimePicker
                onChange={setStartTime}
                value={startTime}
                disableClock
                clearIcon={null}
                className="!w-full"
                // minTime={pickupDate?.toDateString() === new Date().toDateString() ? new Date() : undefined}
              />
            </div>
          )}
          {value?.length === 2 && (
            <div
              className="w-full bg-white p-3 rounded-md text-center"
              dir="ltr">
              <label className="text-xs text-gray-600 font-medium block mb-1">
                {locale === "ar" ? "وقت النهاية" : "END TIME"}
              </label>
              <TimePicker
                onChange={setEndTime}
                value={endTime}
                disableClock
                clearIcon={null}
                className="!w-full"
              />
            </div>
          )}
        </div>

        {/* Calendar */}
        <div className="rounded-lg">
          <div className="flex justify-center">
            <Heading2
              blackHeading={pickupDate ? format(pickupDate, "MMMM yyyy") : ""}
              className="!text-secondary text-center pb-4"
            />
          </div>
          <Calendar
            selectRange
            value={value}
            onChange={setValue}
            minDate={new Date()}
            tileClassName={tileClassName}
            className="!bg-transparent !border-none !w-full"
          />
        </div>
      </div>

      {/* Booking Form Section */}
      <Form {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4">
            <div className="bg-secondaryLight rounded-xl p-6">
              <Paragraph
                blackText1={
                  locale === "ar" ? "معلومات شخصية" : "Personal Information"
                }
                className={`uppercase`}
              />
              <Heading4
                blackHeading={
                  locale === "ar"
                    ? "تفاصيل الحجز الخاص بك"
                    : "Your Booking Details"
                }
                className={`!text-secondary`}
              />
              <div className="space-y-7 mt-7">
                <div className="grid grid-cols-2 gap-4">
                  <TextInput
                    label={locale === "ar" ? "أدخل اسمك" : "Enter Your Name"}
                    error={errors.client_name?.message}
                    autoComplete="off"
                    {...register("client_name")}
                  />
                  <TextInput
                    label={
                      locale === "ar"
                        ? "أدخل بريدك الإلكتروني"
                        : "Enter Your Email"
                    }
                    error={errors.client_email?.message}
                    autoComplete="off"
                    {...register("client_email")}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <TextInput
                    label={
                      locale === "ar" ? "مكان الاستلام" : "Pickup Location"
                    }
                    error={errors.pickup_location?.message}
                    autoComplete="off"
                    {...register("pickup_location")}
                  />
                  <TextInput
                    label={locale === "ar" ? "موقع الإنزال" : "Drop Location"}
                    error={errors.drop_off_location?.message}
                    autoComplete="off"
                    {...register("drop_off_location")}
                  />
                </div>
                <NumberInput
                  label={locale === "ar" ? "رقم التليفون" : "Phone Number"}
                  error={errors.phone?.message}
                  autoComplete="off"
                  {...register("phone")}
                />
                <TextInput
                  label={locale === "ar" ? "طلب خاص..." : "Special Request"}
                  error={errors.special_request?.message}
                  {...register("special_request")}
                />
              </div>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="mt-6 p-4">
            <Heading4
              blackHeading={locale === "ar" ? "ملخص الحجز" : "Booking summary"}
              className={`uppercase`}
            />
            {bookingSummary.map((item, index) => (
              <div key={index} className="flex justify-between py-1">
                <Heading5 blackHeading={item.label} className="!font-[400]" />
                <Heading5
                  blackHeading={`${ConvertToCurrency(item.value)}`}
                  className="!font-[400]"
                />
              </div>
            ))}
            <div className="flex justify-between py-2 border-t border-dashed">
              <Heading5
                blackHeading={locale === "ar" ? "المجموع" : "Total"}
                className="text-secondary"
              />
              <Heading5
                blackHeading={`${ConvertToCurrency(total)}`}
                className="uppercase !font-[400]"
              />
            </div>
            {/* Security Deposit */}
            <div className="flex justify-between py-1">
              <Heading5
                blackHeading={
                  locale === "ar" ? "وديعة الضمان" : "Security Deposit"
                }
                className="!font-[400]"
              />
              <Heading5
                blackHeading={`${ConvertToCurrency(securityDeposit)}`}
                className="!font-[400]"
              />
            </div>
            {/*  */}
            <div className="flex justify-between py-2 border-t border-dashed">
              <Heading5
                blackHeading={
                  locale === "ar" ? "المجموع الإجمالي" : "Grand Total"
                }
                className="text-secondary"
              />
              <Heading5
                blackHeading={`${ConvertToCurrency(grandTotal)}`}
                className="uppercase !font-[400]"
              />
            </div>
          </div>

          {/* WhatsApp Button */}
          <Button
            text={locale === "ar" ? "احجز الآن" : "Book Now"}
            variant={`secondary`}
            className={`w-full`}
            loading={isSubmitting}
            disabled={isSubmitting}
          />
        </form>
      </Form>
    </section>
  );
}
