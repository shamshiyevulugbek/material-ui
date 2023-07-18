import React from 'react'
import style from "./quiz.module.scss"
import {Container,useMediaQuery} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import {Header} from "../../components/header"
import {DWDButton} from "../../components/button"
import {Navbar} from "../../components/navbar"
import {QuizAds} from "../../components/quizAds"
import {QuizCard} from "../../components/quizCard"
import {QuizCategory} from "../../components/quizCategory"
import {ReactComponent as GiftBackground} from "../../assets/imges/gift-bg.svg"
import {ReactComponent as Gift} from "../../assets/imges/gift.svg"

// Quises
import quizes from "./quizes.json"
import quizImage from "../../assets/imges/Image.png"

// Ads images urls
import quiz1 from "../../assets/imges/quiz1.png" 
import quiz2 from "../../assets/imges/quiz2.png" 
import quiz3 from "../../assets/imges/quiz3.png" 

// Ads
const ads = [{link:"/quiz1",imgUrl:quiz1},{link:"/quiz2",imgUrl:quiz2},{link:"/quiz3",imgUrl:quiz3},{link:"/quiz4",imgUrl:quiz3},{link:"/quiz5",imgUrl:quiz3},{link:"/quiz6",imgUrl:quiz3},{link:"/quiz7",imgUrl:quiz3}]

export const Quiz = () => {
  const matches = useMediaQuery('(min-width:600px)')
  return (
    <div className={style.quiz}>
      <Container maxWidth={false} fixed={!matches}>
        <Header links={[
            {
              name:"My rating",path:"/myRating"
            },
            {
              name:"My Quizes",path:"/myQuizes"
            }
          ]}
          button={<DWDButton style={{padding:"12px 28px"}} readyToCLick={true} variant='contained'>Create new Quiz</DWDButton>}
        />
        <GiftBackground className={style.giftBackground}/>
        <h2 className={style.title}>play and <span>win</span> <Gift/></h2>

        <QuizAds ads={ads}/>

        <QuizCategory/>

        <div className={style.quizCards}>
          <Grid container spacing={2}>
            {
              quizes.map((v,i)=>(
                <Grid md={6} lg={4} xl={3}>
                  <QuizCard key={i} img={quizImage} {...v}/>
                </Grid>
              ))
            }
          </Grid>
        </div>

        <Navbar show={true}/>
      </Container>
    </div>
  )
}
