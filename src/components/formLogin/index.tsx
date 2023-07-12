import React from 'react';
import style from './formLogin.module.scss';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { ReactComponent as Circle } from '../../assets/imges/record.svg';
import { ReactComponent as TickCircle } from '../../assets/imges/tick-circle.svg';
import { ReactComponent as Hide } from '../../assets/imges/Hide.svg';
import { ReactComponent as Eye } from '../../assets/imges/eye.svg';
import { Link } from 'react-router-dom';
import {
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { DWDButton } from '../button';
import { ErrorBox } from '../errorBox';
import {FormLoginInputs} from "../../assets/types"


export const FormLogin = ({
  toButton,
}: {
  toButton: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [buttonReady, setButtonReady] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const { handleSubmit, control, watch,setValue } = useForm<FormLoginInputs>({defaultValues:{
    remember:false
  }});

  const onSubmit: SubmitHandler<FormLoginInputs> = (data) => console.log(data);

  React.useEffect(() => {
    const subscription = watch(({ password, phoneOrUsername }) => {
      if (
        !!password &&
        password !== '' &&
        !!phoneOrUsername &&
        phoneOrUsername !== ''
      ) {
        setButtonReady(true);
      } else setButtonReady(false);
    });
    return () => subscription.unsubscribe();
  }, [watch]);
  return (
    <form className={style.formLogin} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='phoneOrUsername'
        control={control}
        rules={{ required: true,onChange:(e)=>setValue("phoneOrUsername",e.target.value.toLowerCase()) }}
        render={({ field }) => (
          <TextField
            {...field}
            error={error}
            helperText={error && <span style={{fontSize:10,fontFamily:"var(--font-family)"}}>Wrong username or password</span>}
            sx={{
              width: '100%',
              marginBottom: !error ? '24px' : '6px',
              '& .MuiInputBase-input': {
                color: 'var(--white)',
              },"& .MuiInputBase-root":{borderRadius:"6px"},
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'var(--gray)',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'var(--gray)',
              },
            }}
            label={
              <span style={{ color: 'var(--white)',fontFamily:"Golos Text",fontWeight:"400" }}>Phone or username</span>
            }
          />
        )}
      />

      <FormControl
        sx={{
          width: '100%',
          marginBottom: !error ? '13px' : '6px',
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
          name='password'
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <OutlinedInput
              {...field}
              error={error}
              id='outlined-adornment-password'
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {showPassword ? <Eye /> : <Hide />}
                  </IconButton>
                </InputAdornment>
              }
              label='Password'
            />
          )}
        />
      </FormControl>
      {error ? (
        <>
          <div className={style.error}>Wrong username or password</div>
          <ErrorBox text={'Wrong username or password'} />
        </>
      ) : null}
      <div className={style.extra}>
        <FormControlLabel
          control={
            <Controller
              name='remember'
              control={control}
              render={({ field }) => (
                <Checkbox
                  icon={<Circle />}
                  {...field}
                  checkedIcon={<TickCircle />}
                />
              )}
            />
          }
          label={<span className={style.remember}>Remember me</span>}
        />
        <Link to='/login'>Forget password?</Link>
      </div>
      <DWDButton
        type='submit'
        onClick={() =>
          setError((p) => {
            switch (p) {
              case false:
                return true;
              case true:
                toButton(true);
                return true;
            }
          })
        }
        sx={{ marginBottom: '20px' }}
        fullWidth
        variant={'contained'}
        readyToCLick={buttonReady}
      >
        Login
      </DWDButton>
      <div className={style.bottom}>
        Don't have an account? <Link to='/signup'>Sign up for free!</Link>
      </div>
    </form>
  );
};
