import React from "react";
import ToggleButton from "./ToggleButton";
import LogoutButton from "./LogoutButton";
import ProfileDetails from "./ProfileDetails";
function ProfileCard() {
  return (
    <div className="flex gap-2">
      <ProfileDetails />
      <ToggleButton />
      <LogoutButton />
    </div>
  );
}

export default ProfileCard;
