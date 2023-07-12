import React from "react"
import style from './formLogin404.module.scss'
import {DWDButton} from "../button"
export const FormLogin404 = ({texts,toButton}:{texts:string[],toButton:React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <div className={style.formLogin404}>
      {texts.map((v,i)=><p className={style.text} key={i}>{v}</p>)}
      <DWDButton variant={'contained'} fullWidth onClick={()=>toButton(false)} readyToCLick={true}>
        Reload page
      </DWDButton>
    </div>
  )
}
