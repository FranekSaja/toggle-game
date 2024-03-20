import React from "react";

interface TopLetterProps {
  blur: string;
}

function TopLetter({ blur }: TopLetterProps) {
  return (
    <div
      className={`flex items-center justify-center h-20 text-7xl font-bold text-gray-400 ${blur} `}
    >
      MARK YOURSELF
    </div>
  );
}

export default TopLetter;
