"use server";
import { endpoints } from "@/utils/endpoints";


export const updateProfile = async (formData, token) => {
  "use server";
  let data;
  try {
    let body = new FormData();
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        body.append(key, formData[key]);
      }
    }s
    const response = await fetch(endpoints.USER.UPDATE_PROFILE, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`, // Add the token in the headers
      },
      body: body,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res = await response.json();
    data = res;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
  return data;
};



export const removeFromCart = async (formData, token) => {
  "use server";
  let data;
  let body = new FormData();
  for (const key in formData) {
    body.append(key, formData[key]);
  }
  try {
    const response = await fetch(endpoints.USER.REMOVE_FROM_CART, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body,
    });

    const res = await response.json();

    data = res;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return data;
};


export const addToCart = async (formData, token) => {
  "use server";
  let data;
  let body = new FormData();
  for (const key in formData) {
    body.append(key, formData[key]);
  }
  try {
    const response = await fetch(endpoints.USER.ADD_TO_CART, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body,
    });

    const res = await response.json();

    data = res;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return data;
};


export const updatePassword = async (formData, token) => {
  "use server";
  let data;
  try {
    let body = new FormData();
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        body.append(key, formData[key]);
      }
    }
    const response = await fetch(endpoints.USER.UPDATE_PASSWORD, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`, // Add the token in the headers
      },
      body: body,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res = await response.json();
    data = res;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
  return data;
};

export const updateAvatar = async (formData, token) => {
  "use server";
  let data;
  try {
    const response = await fetch(endpoints.USER.UPDATE_AVATAR, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`, // Add the token in the headers
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res = await response.json();
    data = res;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
  return data;
};

export const addToFavorites = async (property_id, user_id) => {
  "use server";
  let data;
  try {
    const response = await fetch(
      endpoints.USER.ADD_TO_FAVORITES(property_id, user_id)
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res = await response.json();
    data = res;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
  return data;
};

export const getFavoritesById = async (token) => {
  "use server";
  let data;
  try {
    const response = await fetch(endpoints.USER.GET_FAVORITES, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res = await response.json();

    data = res;
  } catch (error) {
    console.log("error", error);

    console.error("Error fetching data:", error.message);
  }
  return data;
};

export const sendEmail = async (formData) => {
  "use server";
  let data;
  try {
    let body = new FormData();
    for (const key in formData) {
      body.append(key, formData[key]);
    }
    const response = await fetch(endpoints.USER.SEND_EMAIL, {
      method: "POST",
      body: body,
      // headers: {
      //   "Content-Type": "multipart/form-data",
      // },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res = await response.json();
    data = res;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
  return data;
};

export const addProjectToFavorites = async (project_id, user_id) => {
  "use server";
  let data;
  try {
    const response = await fetch(
      endpoints.USER.ADD_PROJECT_TO_FAVORITES(project_id, user_id)
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res = await response.json();
    data = res;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
  return data;
};


export const getCartData = async (token) => {
  "use server";
  let data;
  try {
    const response = await fetch(endpoints.USER.GET_CART_DATA, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res = await response.json();

    data = res;
  } catch (error) {
    console.log("error", error);
    console.error("Error fetching data:", error.message);
  }
  return data;
};

export const addOrder = async (formData, token) => {
  "use server";
  let data;
  let body = new FormData();
  for (const key in formData) {
    body.append(key, formData[key]);
  }
  try {
    const response = await fetch(endpoints.USER.ADD_ORDER, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body,
    });

    const res = await response.json();

    data = res;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return data;
};
