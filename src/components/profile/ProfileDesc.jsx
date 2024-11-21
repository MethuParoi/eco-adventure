import React from "react";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const ProfileDesc = ({ name, mail }) => {
  const navigate = useNavigate();
  return (
    <div className="pl-64 sm:pl-56  text-gray-600 font-semibold">
      <div className="pb-3 sm:border-b-2 border-primary">
        <h1 className="text-md sm:text-xl lg:text-3xl ">{`User Name: ${name}`}</h1>
      </div>

      <div className="pt-5 pb-3 sm:border-b-2 border-primary">
        <h1 className="text-md sm:text-xl lg:text-3xl">{`User Email: ${mail}`}</h1>
      </div>

      <div className="mt-10">
        <Button
          label={"Update Profile"}
          onClick={() => navigate("/profile/update-profile")}
          type={"standard"}
        />
      </div>
    </div>
  );
};

export default ProfileDesc;
