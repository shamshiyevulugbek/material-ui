import React from 'react'
import style from "./iconInfo.module.scss"

export const IconInfo = ({icon,text}:{icon:React.ReactElement,text:string}) => {
  return (
    <div className={style.iconInfo}>
      {icon} {text}
    </div>
  )
}
