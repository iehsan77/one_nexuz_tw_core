"use client";
import { LOG_OUT } from "@/actions/actions";
import { toast } from "sonner";

const handleStatusCode = (res) => {
  if (res?.detail !== undefined) {
    toast.error(res?.detail);
    LOG_OUT();
  } else {
    // toast.error(res?.message || "An unknown error occurred");
    switch (res?.status) {
      case 200:
      case 201:
        toast.success(res?.message || "Operation successful");
        break;
      case 302:
        toast.info(res?.message || "Resource moved");
        break;
      case 400:
        toast.error(res?.message || "Bad request");
        break;
      case 401:
        toast.warning(res?.message || "Unauthorized");
        break;
      case 403:
        toast.info(res?.message || "Resource moved");
        break;
      case 404:
        toast.error(res?.message || "Not Found");
        break;
      case 500:
        toast.error(res?.message || "Internal server error");
        break;
      default:
        toast.warning(res?.message || "Unexpected status");
        break;
    }
  }
};

export default handleStatusCode;
