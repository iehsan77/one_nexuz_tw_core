import {
  API_DOMAIN,
  REAL_STATE_API_DOMAIN,
  SEO_DOMAIN,
} from "@/constants/constants";

export const endpoints = {
  FORM: {
    newsletter:
      "https://realstateapi.cloudapiserver.com/blogapi/add_subscription",
    contact: "https://devapi.cloudapiserver.com/api/sendHJK_ContactFormEmail",
    inquiry: "https://devapi.cloudapiserver.com/api/sendHJK_InquiryFormEmail",
  },
  getMeta: SEO_DOMAIN + "/seoapi/get-schema",
  getGlobalScript: SEO_DOMAIN + "/seoapi/get-customcode-bywebsite",

  AUTH: {
    SIGN_UP: `${API_DOMAIN}/auth/create_user`,
    LOG_IN: `${API_DOMAIN}/auth/login`,
    FORGOT_PASSWORD: `${API_DOMAIN}/auth/forgotpassword`,
    UPDATE_PASSWORD: `${API_DOMAIN}/auth/updatepassword`,
    VERIFY_OTP: `${API_DOMAIN}/auth/accout_verfication`,
    RESEND_VERIFY_OTP: `${API_DOMAIN}/auth/resend_verification_code`,
    UPDATE_PROFILE: `${API_DOMAIN}/auth/update_user_profile`,
    CONTACT_US: `${API_DOMAIN}/generalservices/contactus`,
    USER_BOOKINGS: `${API_DOMAIN}/dashboard/bookings`,
  },
  HOME: {
    GET_BRANDS: `${API_DOMAIN}/home/brands`,
    GET_BODY_TYPES: `${API_DOMAIN}/home/body_types`,
    GET_CATEGORIES: `${API_DOMAIN}/home/categories`,
    GET_FEATURED: `${API_DOMAIN}/home/features`,
    GET_CAR_CATEGORIES: `${API_DOMAIN}/home/car_categories`,
    GET_CAR_MODELS: `${API_DOMAIN}/web/models`,
  },
  DETAILS: {
    GET_CAR_DETAILS: (slug) => `${API_DOMAIN}/web/detail/${slug}`,
    GET_YOU_MAY_LIKE: (manufacturer_id, category_id, car_id) =>
      `${API_DOMAIN}/web/you_may_like/${manufacturer_id}/${category_id}/${car_id}`,
    ADD_BOOKING: `${API_DOMAIN}/web/add_booking`,
  },
  BRANDS: {
    GET_ALL_BRANDS: `${API_DOMAIN}/web/brands`,
  },
  COMPARE: {
    GET_COMPARE_PRODUCTS: `${API_DOMAIN}/web/comparison`,
  },
  LISTING: {
    LISTING_FILTER: `${API_DOMAIN}/web/vehicles`,
    COLOR_FILTER: `${API_DOMAIN}/web/filters`,
  },
  BLOGS: {
    getBlogs: `${REAL_STATE_API_DOMAIN}/blogapi/posts`,
    getBlogDetail: (id, vendorId, slug) => {
      if (!id) {
        return `${REAL_STATE_API_DOMAIN}/blogapi/search_posts?vendor_website_id=${vendorId}&slug=${slug}`;
      } else {
        return `${REAL_STATE_API_DOMAIN}/blogapi/search_posts?id=${id}&vendor_website_id=${vendorId}`;
      }
    },
    getBlogCategories: `${REAL_STATE_API_DOMAIN}/blogapi/get_categories`,
  },
  FAQS: {
    GET_FAQS: "https://seoapi.cloudapiserver.com" + "/seoapi/get-faqs",
  },
};
