"use client";
import { useState, useRef, useEffect } from "react";
import Image from "../Image/Image";
import useUserStore from "@/stores/user-store";
import { useRouter } from "next/navigation";
import Link1 from "../Link/Link";
import Button from "../Button/Button";
import Signin from "../UserAuth/Signin";
import Signup from "../UserAuth/Signup";
import OtpVerification from "../UserAuth/OtpVerification";
import ResetPassword from "../UserAuth/ResetPassword";
import SuccessfulPasswordReset from "../UserAuth/SuccessfulPasswordReset";
import NewPassword from "../UserAuth/NewPassword";
import RecoverPassword from "../UserAuth/RecoverPassword";
import ForgotPassword from "../UserAuth/ForgotPassword";
import AppModal from "../Modal/AppModal";
import { Icon } from "@iconify/react";

const AvatarDropdown = ({ isModalOpen, setIsModalOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [formType, setFormType] = useState("signin");
  const [otpEmail, setOtpEmail] = useState(null);
  const router = useRouter();

  let { user, logout } = useUserStore();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleModal = () => setIsModalOpen(true);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const handleLogout = () => {
    logout(router);
    setDropdownOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative group py-2" ref={dropdownRef}>
      {!user ? (
        <div className=" flex gap-2">
          <Button
            variant={`primary`}
            text={`Sign in`}
            onClick={user ? toggleDropdown : handleModal}
            className="lg:flex hidden justify-center items-center text-black transition-all ease-in-out duration-500 rounded-lg"
          />
          <Icon icon="uil:user" 
          width="1.6rem" 
          height="1.6rem" 
          onClick={user ? toggleDropdown : handleModal}
          className="lg:hidden flex justify-center items-center text-white transition-all ease-in-out duration-500 rounded-lg"
          />
          {/* <Button
            variant={`primary`}
            text={`Sign in`}
            onClick={user ? toggleDropdown : handleModal}
            className="lg:hidden flex justify-center items-center text-black transition-all ease-in-out duration-500 rounded-lg"
          /> */}
        </div>
      ) : (
        <>
          <span
            className="flex cursor-pointer items-center justify-center w-10 h-10 rounded-full focus:outline-none "
            onClick={user ? toggleDropdown : handleModal}
          >
            <Image
              src={
                user?.profile_image ||
                `/assets/placeholders/propertify_avatar.jpg`
              }
              alt="Avatar"
              width={30}
              height={30}
              className="rounded-full h-6 w-6 md:h-7 md:w-7"
            />
          </span>
        </>
      )}
      {isModalOpen && (
        <AppModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 h-full">
            <div className="relative border -m-6 lg:block hidden">
              <Image
                src={`/assets/images/car_solution_logo.svg`}
                alt="Elena Petrova"
                width={219}
                height={585}
                className="absolute z-10 object-top-left p-6"
              />
              <Image
                src={`/assets/images/image_70.webp`}
                alt="Elena Petrova"
                width={519}
                height={585}
                className="absolute w-full h-full object-cover object-top-left"
              />
            </div>
            <div className="flex items-center justify-center w-full">
              {formType === "signin" && (
                <Signin
                  setFormType={setFormType}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
              )}
              {formType === "signup" && (
                <Signup
                  setFormType={setFormType}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                  setOtpEmail={setOtpEmail}
                />
              )}
              {formType === "otp" && (
                <OtpVerification
                  email={otpEmail}
                  setFormType={setFormType}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
              )}
              {formType === "succpassword" && (
                <SuccessfulPasswordReset
                  email={otpEmail}
                  setFormType={setFormType}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
              )}
              {formType === "newpassword" && (
                <NewPassword
                  email={otpEmail}
                  setFormType={setFormType}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
              )}
              {formType === "recoverpassword" && (
                <RecoverPassword
                  email={otpEmail}
                  setFormType={setFormType}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
              )}
              {formType === "forgotPassword" && (
                <ForgotPassword
                  setFormType={setFormType}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
              )}
            </div>
          </div>
        </AppModal>
      )}

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-[9999]">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link1
              href="/profile"
              className="px-4 py-2 hover:bg-[#30449b2f] w-full block text-start rounded-none"
              role="menuitem"
            >
              Profile
            </Link1>
            <Link1
              href="/changepassword"
              className="px-4 py-2 hover:bg-[#30449b2f] w-full block text-start rounded-none"
              role="menuitem"
            >
              Change Password
            </Link1>
            <Link1
              href="/myproperties"
              className="px-4 py-2 hover:bg-[#30449b2f] w-full block text-start rounded-none"
              role="menuitem"
            >
              My Properties
            </Link1>
            <Link1
              href="/favourities"
              className="px-4 py-2 hover:bg-[#30449b2f] w-full block text-start rounded-none"
              role="menuitem"
            >
              My Favorites
            </Link1>
            <Button
              className="hover:bg-[#30449b2f] w-full text-start rounded-none border-none"
              role="menuitem"
              onClick={() => handleLogout()}
            >
              Logout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvatarDropdown;
