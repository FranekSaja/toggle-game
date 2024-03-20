import React from "react";
import Toggle from "./Toggle";
import { useTogglePerson } from "../hooks/useTogglePerson";

interface MapProps {
  modal: boolean;
}

function ToggleConfigMap({ modal }: MapProps) {
  const { toggleConfig } = useTogglePerson();
  return (
    <div
      className={`grid grid-flow-col grid-rows-8 gap-10 ${modal ? "blur" : ""}`}
    >
      {toggleConfig.map((el) => {
        return (
          <div
            key={el.name}
            className="flex items-center justify-start w-[350px] h-10"
          >
            <Toggle text={el.name} isEnabled={el.stateKey} change={el.action} />
          </div>
        );
      })}
    </div>
  );
}

export default ToggleConfigMap;
