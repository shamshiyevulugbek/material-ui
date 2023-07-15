import React from "react"
import Grid from '@mui/material/Unstable_Grid2'
import {Container,Tab,Tabs} from '@mui/material'
import s from "./home.module.scss"

export const Home = () => {
  const[value,setValue] = React.useState<string>("one")
  return (
    <div className={s.home}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, odio!</p>
      <div style={{backgroundColor:"red",marginTop:"10px"}}>
        <Container sx={{backgroundColor:"green"}}>
        <Grid sx={{backgrounColor:"cyan"}} container columnSpacing={2} rowSpacing={2}>
          <Grid xsOffset={4} xs={8}>
            <span className={s.item}>xs=8</span>
          </Grid>
          <Grid xs={4}>
            <span className={s.item}>xs=4</span>
          </Grid>
          <Grid xs={4}>
            <span className={s.item}>xs=4</span>
          </Grid>
          <Grid xs={8}>
            <span className={s.item}>xs=8</span>
          </Grid>
        </Grid>
        </Container>
        
      </div>
      <div>
        <Tabs value={value} onChange={(_,v)=>setValue(v)}>            
          <Tab  value={"one"} label="Bir"/>
          <Tab value={"two"} label="Ikki"/>
          <Tab value={"three"} label="Uch"/>
          <Tab value={"four"} label="To'rt"/>
          <Tab value={"five"} label="Besh"/>
          <Tab value={"six"} label="Olti"/>
          <Tab value={"seven"} label="Yetti"/>
          <Tab value={"eight"} label="Sakkiz"/>
          <Tab value={"nine"} label="To'qqiz"/>
          <Tab value={"ten"} label="O'n"/>
          <Tab value={"eleven"} label="O'nbir"/>
          <Tab value={"twelve"} label="O'nikki"/>
          <Tab value={"thirdteen"} label="O'nuch"/>
          <Tab value={"fourteen"} label="O'nto'rtsaaada"/>
          <Tab value={"fifteen"} label="Odasddada"/>
          <Tab value={"sixteen"} label="O'nolti"/>
          <Tab value={"seventeen"} label="O'nyetti"/>
          <Tab value={"eighteen"} label="O'nsakkiz"/>
          <Tab value={"nineteen"} label="O'nto'qqiz"/>
          <Tab value={"twenty"} label="Yigirma"/>
        </Tabs>
      </div>
    </div>
  )  

}

