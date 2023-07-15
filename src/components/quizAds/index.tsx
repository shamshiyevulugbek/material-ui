import React from 'react'
import {Link} from "react-router-dom"
import Grid from "@mui/material/Unstable_Grid2"
import style from "./quizAds.module.scss"

export const QuizAds = ({ads}:{ads:{link:string,imgUrl:string}[]}) => {
  return (
    <div className={style.quizAds}>
      <Grid container columnSpacing={{sm:2,md:3}} sx={{marginBottom:"25px"}}>  
        <Grid sm={6}>
          <Link to={ads[0].link}>
            <img src={ads[0].imgUrl} alt="Ads" />
          </Link>
        </Grid>
        <Grid sm={6}>
          <Link to={ads[1].link}>
            <img src={ads[1].imgUrl} alt="Ads" />
          </Link>
        </Grid>
      </Grid>
      <Grid container columns={20} columnSpacing={{sm:1,md:2}} sx={{marginBottom:"25px"}} >
        {
          Array.from(Array(5)).map((_,i)=>(
            <Grid key={i} sm={4}>
              <Link to={ads[i+2].link}>
                <img src={ads[i+2].imgUrl} alt="Ads" />
              </Link>
            </Grid>
          ))
        }
      </Grid>
    </div>
  )
}
