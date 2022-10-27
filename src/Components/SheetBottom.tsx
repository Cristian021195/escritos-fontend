import React from 'react'
interface ISheetBottom{
  props?:any
}
export const SheetBottom = (props:ISheetBottom) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" {...props}>
        <path
          fill="#3a3a3a"
          d="m0 128 60 16c60 16 180 48 300 37.3C480 171 600 117 720 90.7 840 64 960 64 1080 69.3c120 5.7 240 15.7 300 21.4l60 5.3V0H0Z"
        />
    </svg>
  )
}