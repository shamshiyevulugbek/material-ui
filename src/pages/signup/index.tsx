import React from "react"
import { Container, Grid } from '@mui/material'
import { AuthBottom } from '../../components/authBottom'
import { FormAuth } from '../../components/formAuth'
import { FormCreateAccount } from '../../components/formCreateAccount'
import { FormSMS } from '../../components/formSMS'
import { SignupDetails } from '../../components/signupDetails'
import { FormCreatePassword } from '../../components/formCreatePassword'
import { ReactComponent as Image1 } from '../../assets/imges/signup1.svg'
import { ReactComponent as Image2 } from '../../assets/imges/login1.svg'
import style from "./signup.module.scss"
import {SignupLevels} from "../../assets/types"

export const Signup:React.FC = () => {
  const [level,setLevel] = React.useState<SignupLevels>(SignupLevels.CreateAccount)
  const levelSubtitle = (level:SignupLevels):string=>{
    switch(level){
      case SignupLevels.CreateAccount:
        return "Create account"
      case SignupLevels.EnterSMSCode:
        return "Confirm your phone number"
      case SignupLevels.CreatePassword:
        return "Create password"
      case SignupLevels.EnterDetails:
         return "Enter your detail information"
    }
  }
  return (
    <div className={style.signup}>
      <Container maxWidth={false} sx={{ padding: '20px 0' }} fixed={true}>
        {
          level !== SignupLevels.EnterDetails?
          <Grid className={style.grid} container sx={{ width: '100%' }}>
            <Grid
              sx={{ display: 'flex' }}
              alignItems='center'
              item
              sm={5}
              md={6}
              lg={7}
            >
              <div className={style.imageContainer}>
                {
                  level === SignupLevels.CreatePassword?
                  <Image2 className={style.img} />:  
                  <Image1 className={style.img} />  
                }
              </div>
            </Grid>
            <Grid
              sx={{ display: 'flex' }}
              alignItems='center'
              justifyContent={"flex-end"}
              item
              sm={7}
              md={6}
              lg={5}
            >
              <FormAuth title={true} subtitle={levelSubtitle(level)}>
                {
                  level === SignupLevels.CreateAccount?
                  <FormCreateAccount changeLevel={setLevel}/>:
                  level === SignupLevels.EnterSMSCode?
                  <FormSMS changeLevel={setLevel}/>:
                  level === SignupLevels.CreatePassword?
                  <FormCreatePassword changeLevel={setLevel}/>:
                  null
                }
              </FormAuth>
            </Grid>
          </Grid>:
          <SignupDetails/>
        }
        <AuthBottom />
      </Container>
    </div>
  )
}
