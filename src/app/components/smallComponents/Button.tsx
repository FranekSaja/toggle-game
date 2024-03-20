import React from "react";

interface Button {
  click: () => void;
  text: string;
  blur: string;
}

function Button({ click, text, blur }: Button) {
  return (
    <button
      className={`w-56 h-20 text-xl font-bold bg-gray-400 border-[8px] border-white rounded-2xl hover:bg-green-500 hover:rounded-3xl transition-all ${blur}`}
      onClick={() => {
        click();
      }}
    >
      {text}
    </button>
  );
}

export default Button;
