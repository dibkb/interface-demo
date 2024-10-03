import React from "react";
import CardLayout from "./CardLayout";
import SmallButton from "./SmallButton";

const ProfileDetails = () => {
  const buttonGroup = (
    <div className="flex gap-3">
      <SmallButton text="Undo Changes" variant="secondary" />
      <SmallButton text={"Save Changes"} />
    </div>
  );
  return (
    <CardLayout text="Profile Details" asideNode={buttonGroup}>
      sfs
    </CardLayout>
  );
};

export default ProfileDetails;
