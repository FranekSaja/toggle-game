import React, { ReactNode } from "react";

interface Profile {
  text: ReactNode;
  exit: () => void;
}

function Profile({ text, exit }: Profile) {
  return (
    <div className="flex items-start justify-start w-96 p-6 bg-gray-300 rounded-lg border-2 border-gray-600 text-2xl font-bold flex-col gap-10 absolute top-[280px] left-[730px]">
      <div className="text-3xl font-extrabold">Your Profile:</div>
      <>{text}</>

      <>
        <div className="flex items-center justify-center text-xl font-bold">
          You can't cheat toggle game
        </div>
        <button
          className="w-8 h-8 bg-slate-500 text-sm font-bold rounded-xl transition-all hover:bg-red-500 hover:rounded-3xl"
          onClick={() => {
            exit();
          }}
        >
          X
        </button>
      </>
    </div>
  );
}

export default Profile;
