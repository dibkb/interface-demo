import React, { useState } from "react";
import CardLayout from "./CardLayout";
import SmallButton from "./SmallButton";
import { TextInput } from "./TextInput";
import { DropdownInput } from "./DropDownInput";

const tz = [
  "(GMT+05:30) Kolkata",
  "(GMT-08:00) Los Angeles",
  "(GMT+00:00) London",
  "(GMT+09:00) Tokyo",
  "(GMT+01:00) Berlin",
];
const ProfileDetails = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [timezone, setTimezone] = useState<string>("");
  const buttonGroup = (
    <div className="flex gap-3">
      <SmallButton text="Undo Changes" variant="secondary" />
      <SmallButton text={"Save Changes"} />
    </div>
  );
  return (
    <CardLayout text="Profile Details" asideNode={buttonGroup}>
      <section className="grid grid-cols-12 gap-2">
        <TextInput
          state={firstName}
          setState={setFirstName}
          title="First Name"
          className="col-span-6"
        />
        <TextInput
          state={lastName}
          setState={setLastName}
          title="Last Name"
          className="col-span-6"
        />
        <TextInput
          state={email}
          setState={setEmail}
          title="Email ID"
          className="col-span-6"
        />
        <TextInput
          state={password}
          setState={setPassword}
          title="Password"
          className="col-span-6"
          type="password"
        />
        <TextInput
          state={company}
          setState={setCompany}
          title="Company"
          className="col-span-6"
        />
        <DropdownInput
          state={timezone}
          setState={setTimezone}
          title="Time Zone"
          className="col-span-6"
          list={tz}
        />
      </section>
    </CardLayout>
  );
};

export default ProfileDetails;
