import {Link} from 'react-router-dom'
import style from "./authBottom.module.scss"
import {Select,MenuItem} from "@mui/material"
import {ReactComponent as ArrowDown} from "../../assets/imges/arrow-down.svg"
import {ReactComponent as FlagUz} from "../../assets/imges/flag_uz.svg"

export const AuthBottom = () => {
  return (
    <div className={style.authBottom}>
      <div className={style.links}>
        <Link to={"/"}>Пользовательское соглашение</Link>
        <Link to={"/"}>Лицензионное соглашение</Link>
        <Link to={"/"}>Проекты</Link>
        <Select sx={{borderBottom:0,"&.MuiInput-underline:before":{borderBottom:"none"}}} variant={'standard'} id="lang" defaultValue={"uz"} IconComponent={ArrowDown}>
          <MenuItem value={"uz"}><span className={style.lang}><FlagUz/> O'zbekcha</span></MenuItem>
          <MenuItem value={"en"}><span className={style.lang}><FlagUz/> English</span></MenuItem>
          <MenuItem value={"ru"}><span className={style.lang}><FlagUz/> Русский</span></MenuItem>
        </Select>
        
        
      </div>
      <p className={style.text}>
        All right reserved 2023
      </p>
    </div>
  )
}
