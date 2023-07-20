import React from 'react'
import { Grid } from '@mui/material'
import {ReactComponent as Space} from "../../assets/imges/auth/g8.svg"
import {ReactComponent as Star} from "../../assets/imges/auth/star.svg"
import {FormAuth} from "../formAuth"
import {FormFillDetails} from "../formFillDetails"
import style from "./signupDetails.module.scss"

export const SignupDetails = () => {
  return (
    <Grid className={style.signupDetails} container>
      <Grid item sm={2} md={3} lg={3} xl={3} sx={{position:"relative"}}>
        <Space className={style.space}/>
      </Grid>
      <Grid item sm={9} md={7} lg={7} xl={7}  sx={{position:"relative",zIndex:1}}>
        <FormAuth fullWidth={true} title={true} subtitle={"Enter your detail information"}>
          <FormFillDetails/>
        </FormAuth>
      </Grid>
      <Grid item sm={1} md={2} lg={2} xl={2} sx={{position:"relative"}}>
        <Star className={style.star}/>
      </Grid>
    </Grid>
  )
}
