import React from "react";

function ProfileEl({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center text-xl font-bold">
      {text}
    </div>
  );
}

export default ProfileEl;
