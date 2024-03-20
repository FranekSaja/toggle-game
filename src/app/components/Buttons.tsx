import React from "react";
import Button from "./smallComponents/Button";
import { usePerson } from "../hooks/usePerson";

interface ButtonsProps {
  modal: boolean;
  setModal: any;
}

function TopButtons({ modal, setModal }: ButtonsProps) {
  const { disableAll } = usePerson();
  return (
    <div className="flex flex-row gap-10">
      <Button
        blur={`${modal ? "blur" : ""}`}
        click={() => {
          setModal(true);
        }}
        text="See your Profile"
      />
      <Button
        blur={`${modal ? "blur" : ""}`}
        click={() => {
          disableAll();
        }}
        text="Disable all"
      />
    </div>
  );
}

export default TopButtons;
