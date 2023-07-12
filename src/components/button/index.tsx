import {Button,ButtonProps} from '@mui/material'
import style from "./button.module.scss"
import {DWDOwnButtonProps} from "../../assets/types"

export const DWDButton = ({readyToCLick,...buttonProps}:ButtonProps & DWDOwnButtonProps) => {
  return (
    <Button className={readyToCLick?style.buttonReadyToClick:style.buttonNotReadyToClick} {...buttonProps}>
      <span style={{fontSize:18,lineHeight:"24px",fontWeight:"510"}}>{buttonProps.children}</span>
    </Button>
  )
}
