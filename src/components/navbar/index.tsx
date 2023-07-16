import React from 'react'
import { NavLink } from 'react-router-dom'
import { IconButton,Badge,Avatar } from '@mui/material'
import {ReactComponent as ChatIcon} from "../../assets/imges/navbarIcons/messenger.svg"
import {ReactComponent as LentaIcon} from "../../assets/imges/navbarIcons/lenta.svg"
import {ReactComponent as QuizIcon} from "../../assets/imges/navbarIcons/message-question.svg"
import {ReactComponent as OffersIcon} from "../../assets/imges/navbarIcons/box.svg"
import {ReactComponent as CompanyIcon} from "../../assets/imges/navbarIcons/buildings-2.svg"
import {ReactComponent as UsersIcon} from "../../assets/imges/navbarIcons/profile-2user.svg"
import {ReactComponent as StreamIcon} from "../../assets/imges/navbarIcons/play.svg"
import {ReactComponent as CardIcon} from "../../assets/imges/navbarIcons/bag-2.svg"
import {ReactComponent as NotificationIcon} from "../../assets/imges/navbarIcons/notification.svg"
import profile from "../../assets/imges/navbarIcons/profile.png"
import style from "./navbar.module.scss"

export const Navbar = ({show=true}:{show?:boolean}) => {
  return (
    <div className={style.navbar} style={{display:(!show?"none":"flex")}}>
      <div className={style.left}>
        <IconButton className={style.button+" "+style.popup}>
          <Badge color="error" max={99} variant={"dot"} 
            sx={{'& .MuiBadge-badge':{right: 5,top:7,border:"1px solid var(--white)"}}}
          > 
            <ChatIcon/>
          </Badge>
          <span>Chat</span>
        </IconButton>
        <IconButton className={style.button}>
          <NavLink to="/lenta">
            <LentaIcon/>
            <span>Lenta</span>
          </NavLink>
        </IconButton>
      </div>
      <div className={style.middle}>
      <IconButton className={style.button}>
          <NavLink to="/quiz">
            <QuizIcon/>
            <span>Quiz</span>
          </NavLink>
        </IconButton>
        <IconButton className={style.button}>
          <NavLink to="/offers">
            <OffersIcon/>
            <span>Offers</span>
          </NavLink>
        </IconButton><IconButton className={style.button}>
          <NavLink to="/company">
            <CompanyIcon/>
            <span>Company</span>
          </NavLink>
        </IconButton>
        <IconButton className={style.button}>
          <NavLink to="/users">
            <UsersIcon/>
            <span>Users</span>
          </NavLink>
        </IconButton>
        <IconButton className={style.button}>
          <NavLink to="/stream">
            <StreamIcon/>
            <span>Stream</span>
          </NavLink>
        </IconButton>
      </div>
      <div className={style.right}>
        <IconButton className={style.button}>
          <NavLink to="/card">
            <CardIcon/>
            <span>Card</span>
          </NavLink>
        </IconButton>
        <IconButton className={style.button+" "+style.popup}>
          <Badge color="error" variant="dot"
            sx={{'& .MuiBadge-badge':{right:10,top:7,border:"1px solid var(--white)"}}}
          >
            <NotificationIcon/>
          </Badge>
          <span>Notification</span>
        </IconButton>
        <IconButton className={style.button}>
          <NavLink to="/profile">
            <Avatar src={profile} sx={{width:32,height:32}}/>
            <span>Profile</span>
          </NavLink>
        </IconButton>
      </div>
    </div>
  )
}
