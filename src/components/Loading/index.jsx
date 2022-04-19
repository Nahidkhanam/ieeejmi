import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Loading({ className }) {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full flex justify-center items-center bg-white font-body ${className}`}
      style={{
        zIndex: 9999,
      }}
    >
      <AiOutlineLoading3Quarters className="w-20 h-auto animate-spin" />
    </div>
  );
}

export default Loading;
