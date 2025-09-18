"use client";
import React, { useMemo, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/Button/Button";
import FormProvider from "@/components/FormFields/FormProvider";
import RHFSelect from "@/components/FormFields/RHFSelect";
import RHFTextField from "@/components/FormFields/RHFTextField";
import { useForm } from "react-hook-form";
import { z } from "zod";
import RHFCheckbox from "@/components/FormFields/RHFCheckBox";
import { useRouter } from "next/navigation";
import Alert from "@/components/Alert/Alert";
import { updatePassword, updateProfile } from "@/actions/user_actions";
import { getToken } from "@/lib/auth";
import useUserStore from "@/stores/user-store";
import RHFPhoneInput from "@/components/FormFields/RHFPhoneInput";
import useVendorStore from "@/stores/vendor-store";
import { Icon } from "@iconify/react";

const Signup = ({
  isProfileUpdate,
  isPasswordUpdate,
  setFormType,
  isModalOpen,
  setIsModalOpen
}) => {
  const { user, signup, setUser } = useUserStore();
  const { vendor } = useVendorStore();

  const [alert, setAlert] = useState(null);
  const router = useRouter();
  const formSchema = z
    .object({
      id: z.number(),
      first_name: !isPasswordUpdate
        ? z.string().min(1, {
            message: "First Name is required."
          })
        : z.string(),
      last_name: !isPasswordUpdate
        ? z.string().min(1, {
            message: "Last Name is required."
          })
        : z.string(),
      email: !isPasswordUpdate
        ? z.string().email().min(1, {
            message: "Email is required and must be a valid email address."
          })
        : z.string(),
      telephone: !isPasswordUpdate
        ? z
            .string()
            .min(1, {
              message: "Phone Number is required."
            })
            .max(15, {
              message: "Phone Number should not exceed 15 character."
            })
        : z.string(),
      phone_number: !isPasswordUpdate
        ? z
            .string()
            .min(1, {
              message: "Phone Number is required."
            })
            .max(15, {
              message: "Phone Number should not exceed 15 character."
            })
        : z.string(),
      mobile: !isPasswordUpdate ? z.string() : z.string(),
      whatsapp: !isPasswordUpdate ? z.string() : z.string(),
      role: !isPasswordUpdate
        ? z.object({
            label: z.string(),
            value: z.string()
          })
        : z.object({
            label: z.string(),
            value: z.string()
          }),
      password: !isProfileUpdate
        ? z.string().min(8, {
            message: "Password must be at least 8 characters long."
          })
        : z.string(),
      confirmPassword: !isProfileUpdate
        ? z.string().min(8, {
            message: "Confirm Password must be at least 8 characters long."
          })
        : z.string(),
      full_host_name: !isPasswordUpdate
        ? z.string().min(1, {
            message: "Full Host Name is required."
          })
        : z.string(),
      vendor_website_id: !isPasswordUpdate
        ? z.number().min(1, {
            message: "Vendor Website ID is required."
          })
        : z.number(),
      host_name: !isPasswordUpdate
        ? z.string().min(1, {
            message: "Host Name is required."
          })
        : z.string(),
      agreed: !isPasswordUpdate
        ? z.boolean().refine((val) => val === true, {
            message: "You must agree to the terms and conditions"
          })
        : z.boolean(),
      profile_image: z.string()
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"]
    });

  const userCityOptions = [
    { label: "Dubai", value: "1" },
    { label: "Abu Dhabi", value: "2" },
    { label: "Sharjah", value: "3" },
    { label: "Ajman", value: "4" },
    { label: "Ras Al Khaimah", value: "5" },
    { label: "Fujairah", value: "6" },
    { label: "Umm Al Quwain", value: "7" },
    { label: "Al Ain", value: "8" }
  ];

  const userTypeOptions = [{ label: "User", value: "5" }];

  const defaultValues = useMemo(
    () => ({
      id: 0,
      first_name: user?.first_name || "",
      last_name: user?.last_name || "",
      email: user?.email || "",
      phone_number: user?.phone_number || "",
      mobile: user?.mobile || "",
      whatsapp: user?.whatsapp || "",
      role: userTypeOptions.find((u) => u.value == user?.role) || {
        label: "",
        value: ""
      },
      password: "",
      confirmPassword: "",
      full_host_name: "propertify.businessesify.com",
      vendor_website_id: vendor?.vendor_website_id,
      host_name: "Eliterealestate.ae",
      agreed: user ? true : false,
      profile_image: ""
    }),
    []
  );

  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues
  });

  const {
    setError,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = methods;

  console.log("errors", errors);
  const onSubmit = async (body) => {
    if (!user) {
      const data = { ...body, role: body.role.value };
      console.log("data", data);
      const res = await signup(data);
      console.log("res pes", res);
      if (res.status === 200) {
        setAlert({ type: "success", message: res.message });
        // setTimeout(() => router.push(`/verify/${res?.user_id}`), 2000);
      }
      if (res.status === 401) {
        setAlert({ type: "info", message: res.message });
        // setTimeout(() => router.push(`/verify/${res?.user_id}`), 2000);
      }
      if (res.status === 404) {
        setError("email", { message: res.message });
      }
    } else {
      const data = {
        ...body,
        role: body.role.value,
        user_id: user?.id,
        id: user?.id
      };
      delete data.agreed;
      delete data.confirmPassword;
      delete data.full_host_name;
      delete data.host_name;
      delete data.role;
      if (isProfileUpdate) {
        delete data.id;
        const res = await updateProfile(data, getToken());
        if (res.status === 200) {
          setAlert({ type: "success", message: res.message });
          setUser(res?.profile_info);
        }
      }
      if (isPasswordUpdate) {
        delete data.email;
        delete data.first_name;
        delete data.last_name;
        delete data.mobile;
        delete data.whatsapp;
        delete data.phone_number;
        delete data.profile_image;
        delete data.vendor_website_id;
        const res = await updatePassword(data, getToken());
        if (res.status === 200) {
          setAlert({ type: "success", message: res.message });
        }
      }
    }
  };

  return (
    <div>
      <div className="absolute right-4 top-4">
        {isModalOpen && (
          <Icon
            icon="mdi:close"
            width="1.6rem"
            height="1.6rem"
            className="cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          />
        )}
      </div>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} className={`w-full mt-6 px-4`}>
        {alert && <Alert type={alert.type} message={alert.message} />}
        <h2 className="mb-4 lg:mt-auto display4 text-center">
          {user
            ? "Update Profile"
            : "Create Your Account To Start The Journey!"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {!isPasswordUpdate && (
            <>
              <RHFTextField
                name="first_name"
                type="text"
                placeholder="Mike"
                className="grow"
                variant="outlined"
              />
              <RHFTextField
                name="last_name"
                type="text"
                placeholder="Andrew"
                className="grow"
                variant="outlined"
              />
              <RHFTextField
                name="email"
                type="text"
                placeholder="Email"
                className="grow"
                variant="outlined"
              />
              <div className=" pt-[10px]">
                <RHFPhoneInput
                  name="phone_number"
                  placeholder="Phone"
                  type="number"
                  className="grow"
                  variant="outlined"
                />
              </div>
            </>
          )}

          <RHFTextField
            name="telephone"
            placeholder="Telephone"
            type="number"
            className="grow"
            variant="outlined"
          />
          <div className="">
            <RHFSelect
              name="emirates"
              type="text"
              placeholder="Emirates"
              options={userCityOptions}
              className="border-b rounded"
              isMulti={false}
            />
          </div>
          {!isProfileUpdate && (
            <>
              <RHFTextField
                name="password"
                type="password"
                placeholder="******"
                className="grow"
                variant="outlined"
              />
              <RHFTextField
                name="confirmPassword"
                type="password"
                placeholder="******"
                className="grow"
                variant="outlined"
              />
            </>
          )}

          {!user && (
            <>
              <div className="sm:col-span-2">
                <RHFSelect
                  name="role"
                  type="text"
                  placeholder="I am"
                  options={userTypeOptions}
                  className="border-b rounded"
                  isMulti={false}
                />
              </div>
              <div className="sm:col-span-2">
                <RHFCheckbox
                  name="agreed"
                  label={
                    "I have read and I agree to the Terms of use and Privacy Notice"
                  }
                />
              </div>
            </>
          )}
          <div className="sm:col-span-2">
            <div className="flex justify-center mb-4">
              <Button
                type="submit"
                // onClick={() => setFormType("otp")}
                disabled={isSubmitting}
                loading={isSubmitting}
                variant={`primary`}
                className="mb-4 !rounded-lg !py-2"
                arrow
                text={user ? "Update" : "Sign Up"}
              />
            </div>
            <div className="flex flex-col items-center">
              <p className="displayAnchor">Already have an account?</p>
              <p
                onClick={() => setFormType("signin")}
                className="underline cursor-pointer displayAnchor"
              >
                Sign in
              </p>
            </div>
          </div>
        </div>
      </FormProvider>
    </div>
  );
};

export default Signup;
