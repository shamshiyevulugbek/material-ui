import React from 'react';
import { DWDButton } from '../button';
import { Link } from 'react-router-dom';
import { BlockCode, isNumeric } from 'block-code';
import { useForm,Controller } from 'react-hook-form';
import Countdown from 'react-countdown';
import { useSelector } from 'react-redux';
import { Storage,SMSInputs,SignupLevels } from '../../assets/types';
import style from './formSMS.module.scss';
import 'block-code/style.css';

export const FormSMS = ({
  changeLevel,
}: {
  changeLevel: React.Dispatch<React.SetStateAction<SignupLevels>>;
}) => {
  const {handleSubmit,setValue,control} = useForm({defaultValues:{
    sms:""
  }})
  const[overTime,setOverTime] = React.useState<boolean>(false)
  const[time,setTime] = React.useState<number>(Date.now()+59000)
  const countdown = React.useRef<any>(null)
  const [readyButton,setReadyButton] = React.useState<boolean>(false)
  const tel = useSelector<Storage, string>((state) => state.signup.tel)

  const onSubmit = (data:SMSInputs) => console.log(data);

  React.useEffect(()=>{
    if(!overTime) countdown.current.api.start()
  },[overTime])
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.formSMS}>
      <p className={style.text}>
        Enter the 6-digit confirmation code
        <br /> that we sent you by SMS.
      </p>
      <Controller
        name="sms"
        control={control}
        rules={{required:true,minLength:6}}
        render={({field})=>(
          <BlockCode
            {...field}
            inputProps={{type:'tel',maxLength:1}}
            onValidateBeforeChange={async (d) => (isNumeric(d.value) && d.value.length === 1)}
            className={'block-code-underline' + ' ' + style.blockCode}
            onValuesChange={(data)=>{
            const sms = data.join("")
            setValue("sms",sms)
            if(sms.length === 6 ) setReadyButton(true)
            else setReadyButton(false)
            }}
          />
        )}
      />
      
      <p className={style.textWithCountDown}>
        You can resend confirmation code to <br /> number 
        <span
          onClick={() => changeLevel(SignupLevels.CreateAccount)}
          className={style.tel}
        > 
          &nbsp;**{tel.length > 4 ? tel.slice(-4) : '0000'}&nbsp;
        </span> 
        after 00:
        <Countdown
          ref={countdown}
          date={time}
          onComplete={()=>setOverTime(true)}
          renderer={({ seconds, completed }) => {
            if (completed) {
              return <span>00</span>
            } else {
              return (
                <span style={{width:"15px",display:"inline-block"}}>
                  {overTime?"00":seconds}
                </span>
              );
            }
          }}
        />
      </p>
      {
        !overTime?
        <DWDButton
          type="submit"
          variant={'contained'}
          sx={{ marginBottom: '20px' }}
          onClick={() => changeLevel(SignupLevels.CreatePassword)}
          fullWidth
          readyToCLick={readyButton}
        >
          Enter PVC code
        </DWDButton>:
        <DWDButton
          variant={'contained'}
          sx={{ marginBottom: '20px' }}
          onClick={() => {
            //resending sms 
            setTime(Date.now()+59000)
            setOverTime(false)
          }}
          fullWidth
          readyToCLick={true}
        >
          Resent PVC code
        </DWDButton>
      }
      <div className={style.bottom}>
        Do you have an account? <Link to='/login'>Sign in</Link>
      </div>
    </form>
  );
};
