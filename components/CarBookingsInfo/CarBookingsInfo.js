"use client";
import React, { useContext, useEffect, useState } from 'react'
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import Heading2 from "../Typography/Heading2";
import { endpoints } from "@/utils/endpoints";
import { POST_JSON } from "@/actions/actions";
import { toast } from "sonner";
import {
  ConvertToCurrency,
  logoutUser,
  titleLangConverter,
} from "@/utils/apiHelper";
import useVendorStore from "@/stores/vendor-store";
import useDebounce from "@/hooks/useDebounce";
import Pagination from "../Pagination/Pagination";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import { Icon } from "@iconify/react";
import Loader from "../Loader/Loader";
import NotFound from "../NotFound/NotFound";

const formatDate = (isoDateString) => {
  const date = new Date(isoDateString);
  return date.toLocaleString("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

const translations = {
  en: {
    heading: "Car Bookings",
    bookingID: "Booking ID",
    car: "Car",
    pickupDate: "Pickup Date",
    returnDate: "Return Date",
    date: "Date & Time",
    location: "Location",
    status: "Status",
    security_deposit_amount: "Security Deposit Amount",
    tax_percent: "Tax Percent",
    totalAmount: "Total Amount",
    rate_per_day: "Rate per Day",
    number_of_days: "Number of Days",
    action: "Action",
    pending: "Pending",
    returned: "Returned",
    createInvoice: "Create Invoice",
    invoiceTitle: "Car Booking Invoice",
    companyName: "HJ Rent A Car",
    companyAddress: "Dubai Marina, UAE",
    email: "Email: info@hjrentacar.com",
    thankYou:
      "Thank you for booking with HJ Rent A Car. For any queries, contact us at info@hjrentacar.com.",
  },
  ar: {
    heading: "حجز السيارات",
    bookingID: "معرف الحجز",
    car: "السيارة",
    pickupDate: "تاريخ الاستلام",
    returnDate: "تاريخ الإرجاع",
    date: "التاريخ والوقت",
    location: "الموقع",
    status: "الحالة",
    security_deposit_amount: "مبلغ التأمين",
    tax_percent: "نسبة الضريبة",
    totalAmount: "المبلغ الإجمالي",
    rate_per_day: "سعر اليوم",
    number_of_days: "عدد الأيام",
    action: "الإجراء",
    pending: "قيد الانتظار",
    returned: "تم الإرجاع",
    createInvoice: "إنشاء الفاتورة",
    invoiceTitle: "فاتورة حجز سيارة",
    companyName: "HJ لتأجير السيارات",
    companyAddress: "مرسى دبي، الإمارات العربية المتحدة",
    email: "البريد الإلكتروني: info@hjrentacar.com",
    thankYou:
      "شكرًا لحجزك مع HJ Rent A Car. لأي استفسارات، تواصل معنا عبر info@hjrentacar.com.",
  },
};

export default function CarBookingsInfo() {
  const { setVendor } = useVendorStore();
  const [pageNumber, setPageNumber] = useState(1);
  const [bookingData, setBookingData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState();
  const [keywords, setKeywords] = useState("");
  const debouncedKeywords = useDebounce(keywords, 500);
  const { locale } = useContext(LanguageContext);
  const t = translations[locale];
  const i = translations["en"];

  const generateInvoice = (booking) => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.setTextColor(40);
    doc.text(i.invoiceTitle, 20, 20);

    doc.setFontSize(12);
    doc.text(i.companyName, 20, 30);
    doc.text(i.companyAddress, 20, 36);
    doc.text(i.email, 20, 42);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 160, 20, {
      align: "right",
    });

    autoTable(doc, {
      startY: 55,
      head: [["Booking", "Details"]],
      body: [
        [i.bookingID, booking?.booking_id],
        [i.car, booking?.vehicle_detail?.title_en],
        [i.pickupDate, formatDate(booking?.pickup_date_time)],
        [i.returnDate, formatDate(booking?.return_date_time)],
        [
          i.location,
          `Pickup : ${booking?.pickup_location} - Drop : ${booking?.drop_off_location}`,
        ],
        [i.status, booking?.status === 1 ? i.pending : i.returned],
        [i.rate_per_day, ConvertToCurrency(booking?.rate_per_day)],
        [i.number_of_days, booking?.number_of_days],
        [i.tax_percent, `${booking?.tax_percent}%`],
        [
          i.security_deposit_amount,
          ConvertToCurrency(booking?.security_deposit_amount),
        ],
        [i.totalAmount, ConvertToCurrency(booking?.calculated_total_amount)],
      ],
      theme: "grid",
      headStyles: { fillColor: [0, 102, 204] },
      styles: { fontSize: 11 },
    });

    const finalY = doc.lastAutoTable.finalY + 20;
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(i.thankYou, 20, finalY);

    doc.save(`${booking.booking_id}_Invoice.pdf`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const body = {
        nPerPage: 5,
        pageNumber,
        keywords: debouncedKeywords || "",
      };
      try {
        setLoading(true);
        setError(null);
        const res = await POST_JSON(endpoints.AUTH.USER_BOOKINGS, body);

        if (res?.detail !== undefined) {
          toast.error(res.detail);
          setVendor({});
          logoutUser();
        } else if (res?.status === 200) {
          const enrichedBookings = res?.data?.map((booking) => {
            const rent =
              Number(booking?.rate_per_day) * Number(booking?.number_of_days);
            const tax = (rent * Number(booking?.tax_percent)) / 100;
            const deposit = Number(booking?.security_deposit_amount);
            const total = rent + tax + deposit;

            return {
              ...booking,
              calculated_total_amount: total,
            };
          });

          setBookingData(enrichedBookings);
          setCount(res?.total_records);
        } else {
          setError(res?.message || "Failed to fetch bookings");
        }
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pageNumber, debouncedKeywords, setVendor]);

  const handlePageNumber = (data) => {
    setPageNumber(data);
  };

  return (
    <section className="secPadding">
      <div className="container">
        <Heading2 className="pb-8" blackHeading={t.heading} />

        {loading ? (
          <Loader />
        ) : error ? (
          <NotFound message={error} />
        ) : bookingData?.length === 0 ? (
          <NotFound message="No bookings found." />
        ) : (
          <>
            <div className="overflow-x-auto bg-white rounded-lg border border-gray-100">
              <table className="min-w-full text-sm text-left">
                <thead>
                  <tr className="bg-blue-50 text-gray-700 text-xs uppercase tracking-wide">
                    <th className="px-4 py-3">{t.bookingID}</th>
                    <th className="px-4 py-3">{t.car}</th>
                    <th className="px-4 py-3">{t.date}</th>
                    <th className="px-4 py-3">{t.location}</th>
                    <th className="px-4 py-3">{t.status}</th>
                    <th className="px-4 py-3">{t.rate_per_day}</th>
                    <th className="px-4 py-3">{t.number_of_days}</th>
                    <th className="px-4 py-3">{t.totalAmount}</th>
                    <th className="px-4 py-3">{t.action}</th>
                  </tr>
                </thead>
                <tbody>
                  {bookingData.map((booking) => (
                    <tr
                      key={booking?.id}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3">{booking?.booking_id}</td>
                      <td className="px-4 py-3 min-w-[200px] lg:w-[250px]">
                        {titleLangConverter(
                          booking?.vehicle_detail?.title_en,
                          booking?.vehicle_detail?.title_ar,
                          locale
                        )}
                      </td>
                      <td className="px-4 py-3 space-y-2 min-w-[200px] lg:w-[200px]">
                        <span className="inline-block px-2 py-1 bg-gray-100 rounded-md text-xs font-medium">
                          {formatDate(booking?.pickup_date_time)}
                        </span>
                        <span className="inline-block px-2 py-1 bg-gray-100 rounded-md text-xs font-medium">
                          {formatDate(booking?.return_date_time)}
                        </span>
                      </td>
                      <td className="px-4 py-3 max-w-[250px] space-y-2">
                        <span className="block">
                          <span className="font-semibold">
                            {locale === "ar" ? "يلتقط" : "Pickup:"}{" "}
                          </span>
                          {booking?.pickup_location || "---"}
                        </span>
                        <span className="block">
                          <span className="font-semibold">
                            {locale === "ar" ? "قطرة من:" : "Drop of:"}{" "}
                          </span>
                          {booking?.drop_off_location || "---"}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`text-white inline-flex items-center px-2 py-1 text-xs font-medium rounded-md ${
                            booking.status === 1 ? "bg-primary" : "bg-secondary"
                          }`}>
                          <Icon
                            icon="ei:check"
                            width={20}
                            height={20}
                            className="mr-2"
                          />
                          {booking.status === 1 ? t.pending : t.returned}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        {ConvertToCurrency(booking?.rate_per_day)}
                      </td>
                      <td className="px-4 py-3">{booking?.number_of_days}</td>
                      <td className="px-4 py-3">
                        {ConvertToCurrency(booking?.calculated_total_amount)}
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => generateInvoice(booking)}
                          className="px-3 py-1 text-sm font-medium border border-gray-300 rounded-md hover:bg-gray-100 transition">
                          {t.createInvoice}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Pagination
              count={count}
              handlePageNumber={handlePageNumber}
              pageNumber={pageNumber}
              itemsPerPage={5}
            />
          </>
        )}
      </div>
    </section>
  );
}
