"use client";
import React, { useState } from "react";
import ToggleConfigMap from "./ToggleConfigMap";
import TopButtons from "./Buttons";
import ModalWindowProfileText from "./smallComponents/ProfileComponents/ProfileText";
import TopLetter from "./smallComponents/TopLetter";

function UserInterface() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-start w-screen h-screen flex-col gap-10">
        <ModalWindowProfileText modal={isModalOpen} setModal={setIsModalOpen} />
        <TopLetter blur={`${isModalOpen ? "blur" : ""}`} />
        <TopButtons modal={isModalOpen} setModal={setIsModalOpen} />
        <ToggleConfigMap modal={isModalOpen} />
      </div>
    </>
  );
}

export default UserInterface;
