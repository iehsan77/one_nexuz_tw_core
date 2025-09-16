import CarBookingsInfo from "@/components/CarBookingsInfo/CarBookingsInfo";
import UserInformation from "@/components/UserInformation/UserInformation";
import { bookings, profileInfo } from "@/mockData/dummyData";
import React from "react";

const ProfileInfo = () => {
  return (
    <>
      <UserInformation />

      <CarBookingsInfo />
    </>
  );
};

export default ProfileInfo;
