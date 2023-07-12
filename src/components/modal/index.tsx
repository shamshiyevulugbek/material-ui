import {Modal,ModalProps} from "@mui/material"
import style from "./modal.module.scss"

export const DWDModal = ({title,subtitle,...props}:ModalProps & {title:string,subtitle:string}) => {
  return (
    <Modal sx={{"& .MuiModal-backdrop":{backgroundColor:"rgba(255,255,255,0.1)",backdropFilter: "blur(8px)"}}} open={props.open} onClose={props.onClose}>
      <div className={style.modal}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.subtitle}>{subtitle}</p>
          {props.children}
      </div>
    </Modal>
  )
}
