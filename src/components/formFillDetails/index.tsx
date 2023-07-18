import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { TextField, Grid,InputAdornment } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DWDButton } from '../button';
import { DWDModal } from '../modal';
import { FormDetailsInput } from '../../assets/types';
import { ReactComponent as ArrowIcon } from '../../assets/imges/arrow-down.svg';
import { ReactComponent as CalendarIcon } from '../../assets/imges/calendar-edit.svg';
import { ReactComponent as WarningIcon } from '../../assets/imges/warning.svg';
import { ReactComponent as TickIcon } from '../../assets/imges/tick-circle.svg';
import style from './formFillDetails.module.scss';

export const FormFillDetails = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [userError, setUserError] = React.useState<null | boolean>(null);
  const { control, handleSubmit, setValue, watch, getValues } =
    useForm<FormDetailsInput>();
  const onSubmit: SubmitHandler<FormDetailsInput> = (data) => console.log(data);
  const selectDate = (date: Dayjs | null) => {
    if (date) setValue('date', date?.toDate());
  };
  const gender = watch('gender');
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.formFillDetails}>
      <Grid container columns={19}>
        <Grid item sm={9} sx={{ marginBottom: '24px' }}>
          <Controller
            name='name'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                label={<span style={{ color: 'var(--white)' }}>Name</span>}
                sx={{
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'var(--gray)',
                  },
                  '& .MuiInputBase-input': {
                    color: 'var(--white)',
                  },
                  '& .MuiInputBase-root': { borderRadius: '6px' },
                }}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item sm={9} sx={{ marginLeft: 'auto', marginBottom: '24px' }}>
          <Controller
            name='surname'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                label={<span style={{ color: 'var(--white)' }}>Surname</span>}
                sx={{
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'var(--gray)',
                  },
                  '& .MuiInputBase-input': {
                    color: 'var(--white)',
                  },
                  '& .MuiInputBase-root': { borderRadius: '6px' },
                }}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item sm={9} sx={{ marginBottom: '24px' }}>
          <Controller
            name='thirdname'
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label={
                  <span style={{ color: 'var(--white)' }}>
                    Thirdname(Optional)
                  </span>
                }
                sx={{
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'var(--gray)',
                  },
                  '& .MuiInputBase-input': {
                    color: 'var(--white)',
                  },
                  '& .MuiInputBase-root': { borderRadius: '6px' },
                }}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item sm={9} sx={{ marginLeft: 'auto', marginBottom: '24px' }}>
          <Controller
            name='username'
            control={control}
            rules={{ required: true, pattern: /^[a-z0-9\.]+$/,onChange:(e)=>{
              if(/^[a-zA-Z0-9\.]+$/.test(e.target.value)) {
                setValue("username",e.target.value.toLowerCase())
                setUserError(false)
              }
              else setUserError(true)
        
            } }}
            render={({ field }) => (
              <TextField
                {...field}
                label={<span style={{ color: 'var(--white)' }}>Username</span>}
                sx={{
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'var(--gray)',
                  },
                  '& .MuiInputBase-input': {
                    color: 'var(--white)',
                  },
                  '& .MuiInputBase-root': { borderRadius: '6px' },
                }}
                fullWidth
                InputProps={{
                  endAdornment: <InputAdornment position="end">{userError ===null?null:userError?<WarningIcon/>:<TickIcon/>}</InputAdornment>
                }}
              />
            )}
          />
        </Grid>
        <Grid item sm={9} sx={{ marginBottom: '24px' }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label={<span style={{color:"var(--white)"}}>Date birth</span>}
              slots={{
                openPickerIcon: CalendarIcon,
              }}
              onChange={selectDate}
              sx={{
                width: '100%',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'var(--gray)',
                },
                '& .MuiInputBase-input': {
                  color: 'var(--white)',
                },
                '& .MuiInputBase-root': { borderRadius: '6px' },
              }}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item sm={9} sx={{ marginLeft: 'auto', marginBottom: '24px' }}>
          <div onClick={() => setOpen(true)} className={style.popup}>
            <span>{gender ? gender : 'Gender'}</span>
            <ArrowIcon />
          </div>
        </Grid>
        <Grid item sm={9} sx={{ marginBottom: '24px' }}>
          <div className={style.popup}>
            <span>Profession</span>
            <ArrowIcon />
          </div>
        </Grid>
        <Grid item sm={9} sx={{ marginLeft: 'auto', marginBottom: '24px' }}>
          <div className={style.popup}>
            <span>Region</span>
            <ArrowIcon />
          </div>
        </Grid>
      </Grid>
      <DWDButton
        type='submit'
        variant='contained'
        fullWidth
        readyToCLick={false}
      >
        Finish
      </DWDButton>
      <DWDModal
        title='GENDER'
        subtitle='Select your gender'
        open={open}
        onClose={() => setOpen(false)}
      >
        <>
          <div
            onClick={() => {
              setValue('gender', 'Man');
              setOpen(false);
            }}
            className={style.genderOption}
          >
            Man
          </div>
          <div
            onClick={() => {
              setValue('gender', 'Woman');
              setOpen(false);
            }}
            className={style.genderOption}
          >
            Woman
          </div>
        </>
      </DWDModal>
    </form>
  );
};
