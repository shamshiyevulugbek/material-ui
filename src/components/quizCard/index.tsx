import React from 'react'
import {DWDButton} from "../button"
import {ReactComponent as ClockIcon} from "../../assets/imges/quizIcons/clock.svg"
import {ReactComponent as UsersIcon} from "../../assets/imges/quizIcons/profile-2user.svg"
import style from "./quizCard.module.scss"

export const QuizCard = ({img,title,subtitle,type,questions,time,users,bookName,fee}:{img:string,title:string,subtitle:string,type:string,questions:number,time:string,users:string,bookName:string,fee:string}) => {
  console.log(img)
  return (
    <div className={style.quizCard}>
      <div className={style.top}>
        <img src={img} alt={title} />
        <div className={style.info}>
          <h3 className={style.title}>{title}</h3>
          <h4 className={style.subtitle}>{subtitle}</h4>
          <p className={style.type}>{type} <span style={{fontWeight:"900"}}>&#183;</span> {questions} questions</p>
          <p className={style.timeAndUsers}>
            <ClockIcon/> {time} <UsersIcon/> {users}
          </p>
        </div>
      </div>
      <div className={style.bottom}>
        <div>
          <p className={style.fee}>Entrance fee</p>
          <h3 className={style.bookName}>{bookName}</h3>
        </div>
        <DWDButton style={{padding:"10px 16px"}} readyToCLick={true}>
          Join Room {fee}
        </DWDButton>
      </div>
    </div>
  )
}
