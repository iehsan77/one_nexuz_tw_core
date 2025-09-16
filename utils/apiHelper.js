"use client";
import { LOG_OUT } from "@/actions/actions";
import { toast } from "sonner";
export const handleResponse = (res) => {
  if (res?.detail !== undefined) {
    toast.error(res.detail);
    logoutUser();
  } else {
    toast.error(res?.message || "An unknown error occurred");
  }
};

export const logoutUser = () => {
  LOG_OUT();
  // setVendor({});
  localStorage.removeItem("vendor-storage");
};

export const ConvertToCurrency = (value) => {
  return new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    minimumFractionDigits: 0,
  }).format(value);
};

export const textToRouteUrl = (text) => {
  return text
    .toLowerCase() // Lowercase
    .trim() // Remove whitespace at ends
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Replace multiple hyphens with one
};

export const titleLangConverter = (titleEng, titleAr, locale) => {
  const text = locale === "ar" ? titleAr : titleEng;
  return text;
};

export function truncate(str, max = 30) {
  return str.length > max ? str.slice(0, max) + "…" : str;
}
