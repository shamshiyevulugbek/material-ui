import React from "react"
import {NavLink} from "react-router-dom"
import {ReactComponent as Logo} from "../../assets/imges/logo.svg"
import style from './header.module.scss'

export const Header = ({links,button}:{links?:{name:string,path:string}[],button?:React.ReactElement}) => {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <NavLink to="/home">
          <Logo/>
        </NavLink>
      </div>
      <div className={style.actions}>
        {
          links?.map((v,i)=><NavLink key={i} to={v.path}>{v.name}</NavLink>)
        }
        {button??null}
      </div>
    </div>
  )
}
