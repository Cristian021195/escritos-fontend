import React from 'react'

interface ITopAlert {
  children:React.ReactNode,
  online:boolean,
  setNetStat:(a:boolean)=>void
}

export const TopAlert = ({children, online, setNetStat}:ITopAlert) => {
  return (
    <div className={`top-alert rojo top-alert-show d-${online === true ? 'none' : 'block'}`} onClick={()=>{setNetStat(true)}}>
        {children}
    </div>
  )
}