import React, { ReactNode } from "react";

interface Profile {
  text: ReactNode;
  exit: () => void;
}

function Profile({ text, exit }: Profile) {
  return (
    <div
      className="z-10 flex items-start justify-start w-96 p-6 bg-gray-300 rounded-lg border-2 border-gray-600 text-2xl font-bold flex-col gap-10"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="flex items-center justify-center flex-row gap-28">
        <div className="text-3xl font-extrabold">Your Profile:</div>
        <button
          className="w-8 h-8 bg-slate-500 text-sm font-bold rounded-xl transition-all hover:bg-red-500 hover:rounded-3xl"
          onClick={() => {
            exit();
          }}
        >
          X
        </button>
      </div>

      <>{text}</>

      <>
        <div className="flex items-center justify-center text-xl font-bold">
          You can't cheat toggle game
        </div>
      </>
    </div>
  );
}

export default Profile;
