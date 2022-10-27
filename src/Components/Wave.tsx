import React from "react";

interface IWave{
  backgroundColor:string
}

export function Wave({backgroundColor}:IWave) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="240" viewBox="0 0 1440 240" preserveAspectRatio="none">
      <path
        fill={backgroundColor}
        d="M0 96l60 5.3c60 5.7 180 15.7 300 21.4C480 128 600 128 720 112s240-48 360-64 240-16 300-16h60v288H0z"
      ></path>
    </svg>
  );
}
