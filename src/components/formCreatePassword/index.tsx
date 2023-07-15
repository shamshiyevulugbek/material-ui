import React from "react"
import {SignupLevels} from "../../assets/types"
import {DWDButton} from "../button"
import {ErrorBox} from "../errorBox"
import {Controller,useForm,SubmitHandler} from "react-hook-form"
import { Link } from "react-router-dom"
import {FormCreatePasswordInput} from "../../assets/types"
import {
  InputLabel,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton
} from "@mui/material"
import { ReactComponent as Hide } from '../../assets/imges/Hide.svg';
import { ReactComponent as Eye } from '../../assets/imges/eye.svg';
import style from "./formCreatePassword.module.scss"

export const FormCreatePassword = ({changeLevel}:{changeLevel:React.Dispatch<React.SetStateAction<SignupLevels>>}) => {
  const [showPassword1, setShowPassword1] = React.useState<boolean>(false)
  const [showPassword2, setShowPassword2] = React.useState<boolean>(false)
  const [error, setError] = React.useState<boolean>(false)
  const {
    handleSubmit,
    control
  } = useForm<FormCreatePasswordInput>()
  const handleClickShowPassword1 = () => setShowPassword1((show) => !show)
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show)

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  }
  const onSubmit: SubmitHandler<FormCreatePasswordInput> = (data) => console.log(data)
  return (
    <form className={style.formCreatePassword} onSubmit={handleSubmit(onSubmit)}>
      <p className={style.text}></p>
      <FormControl
        sx={{
          width: '100%',
          '& .MuiInputBase-input': { color: 'var(--white)' },
          "& .MuiInputBase-root":{borderRadius:"6px"},
          '& .MuiOutlinedInput-notchedOutline': { borderColor: 'var(--gray)' },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--gray)',
          },
        }}
        variant='outlined'
      >
        <InputLabel
          style={{ color: 'var(--white)',fontFamily:"Golos Text",fontWeight:"400",fontSize:16 }}
          htmlFor='outlined-adornment-password'
        >
          Password
        </InputLabel>
        <Controller
          name='password1'
          control={control}
          rules={{ required: true,pattern:/^(([A-Z]+)|(\d+)|(\S)){8,32}$/}}
          render={({ field }) => (
            <OutlinedInput
              sx={{marginBottom: !error ? '24px' : '6px'}}
              {...field}
              error={error}
              id='outlined-adornment-password'
              type={showPassword1 ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword1}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {showPassword1 ? <Eye /> : <Hide />}
                  </IconButton>
                </InputAdornment>
              }
              label='Password1'
            />
          )}
        />
      </FormControl>
      {
        error ? (
        <>
          <div style={{width:"100%",marginBottom:10}} className={style.error}>Password not same</div>
          <ErrorBox text={'Password not same'} />
        </>
        ) : null
      }
      <FormControl
        sx={{
          width: '100%',
          '& .MuiInputBase-input': { color: 'var(--white)' },
          "& .MuiInputBase-root":{borderRadius:"6px"},
          '& .MuiOutlinedInput-notchedOutline': { borderColor: 'var(--gray)' },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--gray)',
          },
        }}
        variant='outlined'
      >
        <InputLabel
          style={{ color: 'var(--white)',fontFamily:"Golos Text",fontWeight:"400",fontSize:16 }}
          htmlFor='outlined-adornment-password2'
        >
          Repeat Password
        </InputLabel>
        <Controller
          name='password2'
          control={control}
          rules={{ required: true,pattern:/^(([A-Z]+)|(\d+)|(\S)){8,32}$/}}
          render={({ field }) => (
            <OutlinedInput
              sx={{marginBottom: !error ? '24px' : '6px'}}
              {...field}
              error={error}
              id='outlined-adornment-password2'
              type={showPassword2 ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword2}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {showPassword2 ? <Eye /> : <Hide />}
                  </IconButton>
                </InputAdornment>
              }
              label='Repeat Passwordw'
            />
          )}
        />
      </FormControl>
      {error ? (
        <>
          <div style={{width:"100%",marginBottom:24}} className={style.error}>Password not same</div>
        </>
      ) : null}
      <DWDButton sx={{marginBottom:"24px"}} type="submit" variant="contained" fullWidth readyToCLick={false} onClick={()=>{  
        setError(p=>!p)
        changeLevel(SignupLevels.EnterDetails)
      }}>Enter Password</DWDButton>
      <div className={style.bottom}>
        Do you have an account? <Link to='/login'>Sign in</Link>
      </div>
    </form>
  )
}
