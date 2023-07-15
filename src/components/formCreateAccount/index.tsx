import React from 'react'
import { useForm, SubmitHandler,Controller } from 'react-hook-form'
import { DWDButton } from '../button'
import style from "./createAccount.module.scss"
import { Link } from 'react-router-dom'
import {CreteateAccountInputs,SignupLevels} from "../../assets/types"
import { useDispatch } from 'react-redux'
import {changeTel} from "../../store/signupSlice"
import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css"
import ru from '../../shared/uz.json'

export const FormCreateAccount = ({
  changeLevel,
}: {
  changeLevel: React.Dispatch<React.SetStateAction<SignupLevels>>;
}) => {
  const { handleSubmit,control,getValues,setValue} = useForm<CreteateAccountInputs>({defaultValues:{
    phoneNumber:""
  }})
  const onSubmit: SubmitHandler<CreteateAccountInputs> = (data) => console.log(data)
  const dispatch = useDispatch()
  return (
    <form className={style.createAccount} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='phoneNumber'
        control={control}
        rules={{ required: true}}
        render={({ field }) => (
          <PhoneInput
            labels={ru}
            {...field}
            international
            countryCallingCodeEditable={false}
            defaultCountry="UZ"
            onChange={(d)=>{
              if(d) setValue("phoneNumber",d)
              else setValue("phoneNumber","")
            }}
            className={style.phone}
          />
        )}
      />

<DWDButton
        type='submit'
        onClick={() =>{
          dispatch(changeTel(getValues("phoneNumber")))
          changeLevel(SignupLevels.EnterSMSCode)
          }
        }
        sx={{ marginBottom: '20px' }}
        fullWidth
        variant={'contained'}
        readyToCLick={true}
      >
        Create
      </DWDButton>

      <div className={style.bottom}>
        Do you have an account? <Link to='/login'>Sign in</Link>
      </div>
    </form>
  )
}
