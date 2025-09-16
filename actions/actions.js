"use server";
import { endpoints } from "@/utils/endpoints";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createCookie(data) {
  const cookieStore = await cookies();
  cookieStore.set("session", data, { secure: true });
}

export const fetchToken = async () => {
  const token = (await cookies()).get("session")?.value;
  if (token) {
    return token;
  }
};

export const GET = async (endpoint, tags) => {
  "use server";
  try {
    const token = await fetchToken();
    const response = await fetch(endpoint, {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: { tags: tags },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { error: error?.message };
  }
};

export const POST = async (endpoint, formData, tags) => {
  "use server";
  let data;
  try {
    const token = await fetchToken();
    let body = new FormData();
    for (const key in formData) {
      body.append(key, formData[key]);
    }
    const response = await fetch(endpoint, {
      method: "POST",
      body,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const res = await response.json();
    data = res;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  if (data?.status === 200 || data?.status == 201) {
    revalidateTag(tags);
  }
  return data;
};

export const POST_JSON = async (endpoint, body, tags) => {
  "use server";
  let data;
  try {
    const token = await fetchToken();
    const response = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        next: { tags: tags },
      },
    });
    const res = await response.json();
    data = res;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return data;
};

export const POST_WITH_FORMDATA = async (endpoint, body, tag) => {
  "use server";
  let data;
  try {
    const token = await fetchToken();
    const response = await fetch(endpoint, {
      method: "POST",
      body,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const res = await response.json();

    data = res;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return data;
};

export const SIGN_IN = async (formData) => {
  "use server";
  let data;
  try {
    let body = new FormData();
    for (const key in formData) {
      body.append(key, formData[key]);
    }
    const response = await fetch(endpoints.AUTH.LOG_IN, {
      method: "POST",
      body,
    });

    const res = await response.json();
    if (res.status === 200) {
      await createCookie(res?.token);
    }
    data = res;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return data;
};

export async function LOG_OUT() {
  "use server";
  (await cookies()).delete("session");
  redirect("/");
}

// ========================================================

export const ContactSubmit = async (formData) => {
  "use server";
  try {
    var body = new FormData();
    for (const key in formData) {
      body.append(key, formData[key]);
    }
    const data = await fetch(endpoints.contact, {
      method: "POST",
      body: body,
    });
    const response = await data.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const InquirySubmit = async (formData) => {
  "use server";
  let responseData = {};
  try {
    var body = new FormData();
    for (const key in formData) {
      body.append(key, formData[key]);
    }
    const data = await fetch(endpoints.inquiry, {
      method: "POST",
      body: body,
    });
    const response = await data.json();
    responseData = response;
  } catch (error) {
    console.log(error);
  }

  if (responseData?.status === 200) {
    redirect(`/thankyou`);
  }
};

export const NewsletterSubmit = async (formData) => {
  try {
    var body = new FormData();
    for (const key in formData) {
      body.append(key, formData[key]);
    }
    const response = await axios.post(endpoints.newsletter, body);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
