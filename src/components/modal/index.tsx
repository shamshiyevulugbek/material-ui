import {Modal,ModalProps,IconButton} from "@mui/material"
import {ReactComponent as CloseIcon} from "../../assets/imges/close-circle.svg"
import style from "./modal.module.scss"

export const DWDModal = ({title,subtitle,closeBtn,...props}:ModalProps & {title:string,subtitle?:string,closeBtn?:()=>void}) => {
  return (
    <Modal sx={{"& .MuiModal-backdrop":{backgroundColor:"rgba(255,255,255,0.1)",backdropFilter: "blur(8px)"}}} {...props}>
      <div className={style.modal}>
        <h3 className={style.title}>{title}</h3>
        {
          subtitle?
          <p className={style.subtitle}>{subtitle}</p>:
          null
        }
        {
          closeBtn? 
          <IconButton onClick={closeBtn} className={style.close}>
            <CloseIcon/>
          </IconButton>:
          null
        }
          {props.children}
      </div>
    </Modal>
  )
}
