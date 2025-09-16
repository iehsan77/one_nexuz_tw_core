import jwt from "jsonwebtoken";

const TOKEN_NAME = "authToken";
const VENDOR_DATA = "vendorData";
const USER_DATA = "userData";

export const setToken = (token) => {
  document.cookie = `${TOKEN_NAME}=${token}; path=/`;
};

export const getToken = () => {
  if (typeof document !== "undefined") {
    const match = document.cookie.match(
      new RegExp("(^| )" + TOKEN_NAME + "=([^;]+)")
    );
    if (match) return match[2];
  }
  return null;
};

export const removeToken = () => {
  document.cookie = `${TOKEN_NAME}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
};

export const decodeToken = (token) => {
  return jwt.decode(token);
};

export const setUserData = (userData) => {
  const encodedData = encodeURIComponent(JSON.stringify(userData));
  document.cookie = `${USER_DATA}=${encodedData}; path=/`;
};

export const getUserData = () => {
  if (typeof document !== "undefined") {
    const match = document.cookie.match(
      new RegExp("(^| )" + USER_DATA + "=([^;]+)")
    );
    if (match) return JSON.parse(decodeURIComponent(match[2]));
  }
  return null;
};

export const removeUserData = () => {
  document.cookie = `${USER_DATA}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
};

export const setVendorData = (vendroData) => {
  const encodedData = encodeURIComponent(JSON.stringify(vendroData));
  document.cookie = `${VENDOR_DATA}=${encodedData}; path=/`;
};

export const getVendorData = () => {
  if (typeof document !== "undefined") {
    const match = document.cookie.match(
      new RegExp("(^| )" + VENDOR_DATA + "=([^;]+)")
    );
    if (match) return JSON.parse(decodeURIComponent(match[2]));
  }
  return null;
};

export const removeVendorData = () => {
  document.cookie = `${VENDOR_DATA}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
};
