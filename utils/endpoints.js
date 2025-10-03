import { REAL_STATE_API_DOMAIN, SEO_DOMAIN } from "@/constants/constants";

export const endpoints = {
  newsletter:
    "https://realstateapi.cloudapiserver.com/blogapi/add_subscription",
  contact: "https://devapi.cloudapiserver.com/api/sendHJK_ContactFormEmail",
  inquiry: "https://devapi.cloudapiserver.com/api/sendHJK_InquiryFormEmail",
  getMeta: SEO_DOMAIN + "/seoapi/get-schema",
  getGlobalScript: SEO_DOMAIN + "/seoapi/get-customcode-bywebsite",
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
