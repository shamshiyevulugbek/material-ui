import React from 'react'
import {Container,useMediaQuery} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import {Header} from "../../components/header"
import {IconInfo} from "../../components/iconInfo"
import {ReactComponent as GiftBackground} from "../../assets/imges/gift-bg.svg"
import {ReactComponent as MetaIcon} from "../../assets/imges/meta.svg"
import {ReactComponent as ClockIcon} from "../../assets/imges/clock.svg"
import {ReactComponent as CalendarIcon} from "../../assets/imges/calendar.svg"
import {ReactComponent as CupIcon} from "../../assets/imges/cup.svg"
import {ReactComponent as ReceiptIcon} from "../../assets/imges/receipt.svg"
import {ReactComponent as PeopleIcon} from "../../assets/imges/people.svg"
import style from "./detail.module.scss"

// session
import session_fake from "./session_fake.json"


export const Detail = () => {
  const matches = useMediaQuery('(min-width:600px)')
  const date = new Date(session_fake.expected_date)
  const icons_data = [
    {icon:<ClockIcon/>,text:`${date.getHours()}:${date.getMinutes()}`},
    {icon:<CalendarIcon/>,text:`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`},
    {icon:<CupIcon/>,text:`${session_fake.winner_number} места`},
    {icon:<ReceiptIcon/>,text:`Room #${session_fake.id}`}
  ]
  return (
    <div className={style.detail}>
      <Container maxWidth={false} fixed={!matches}>
        <Header/>
        <GiftBackground className={style.giftBackground}/>
        <div className={style.company}>
          <MetaIcon/>
          <div>
            <h5>Company</h5>
            <p>Company</p>
          </div> 
        </div>

        <div className={style.icons}>
          {
            icons_data.map((v,i)=><IconInfo key={i} {...v}/>)
          }
        </div>
        <Grid container columns={13} spacing={2}>
          <Grid sm={7}>
            <div className={style.card}>
              <h3 className={style.cardTitle}>
                { session_fake.quiz.name }
              </h3>
              <p className={style.description}>{ session_fake.quiz.description }</p>
              <h4 className={style.conditions}>
                Условия
              </h4>
              <ul>
                <li>
                  Start:{`${date.getDate()}.${date.getMonth()}.${date.getFullYear()} at ${date.getHours()}.${date.getMinutes()}`}
                </li>
                <li>
                  Answer time: {"40"} seconds
                </li>
                <li>
                  Game mode:{"Autogame"}
                </li>
                <li>
                  Participiant:{2000} maximum
                </li>
                <li>
                  Win place: {3}
                </li>
                <li>
                  Game type:{"For money"}
                </li>
              </ul>
            </div>
          </Grid>
          <Grid sm={6}>
            <div className={style.card}>
              <h3 className={style.cardTitle}>My friends</h3>
              <div className={style.friends}>
                <PeopleIcon/> 
                <p>No one friend game this game</p>
              </div>
            </div>
          </Grid>
          <Grid sm={7}>
            <div className={style.card}>
              <h3 className={style.cardTitle}>Quiz name</h3>
            </div>
          </Grid>
          <Grid sm={6}>
            <div className={style.card}>
              <h3 className={style.cardTitle}>Start game</h3>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
