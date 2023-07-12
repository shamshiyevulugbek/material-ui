import React from 'react';
import style from './login.module.scss';
import { Container, Grid } from '@mui/material';
import { FormAuth } from '../../components/formAuth';
import { FormLogin } from '../../components/formLogin';
import { FormLogin404 } from '../../components/formLogin404';
import { AuthBottom } from '../../components/authBottom';
import { ReactComponent as Image1 } from '../../assets/imges/login1.svg';
import { ReactComponent as Image2 } from '../../assets/imges/login2.svg';

export const Login: React.FC = () => {
  const [error404, setError404] = React.useState<boolean>(false);
  return (
    <div className={style.login}>
      <Container maxWidth={false} sx={{ padding: '20px 0' }} fixed={true}>
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
              {!error404 ? (
                <Image1 className={style.img} />
              ) : (
                <Image2 className={style.img} />
              )}
            </div>
          </Grid>
          <Grid
            sx={{ display: 'flex' }}
            alignItems='center'
            justifyContent={'flex-end'}
            item
            sm={7}
            md={6}
            lg={5}
          >
            {!error404 ? (
              <FormAuth title={true} subtitle={'Please enter your details'}>
                <FormLogin toButton={setError404} />
              </FormAuth>
            ) : (
              <FormAuth title={true} subtitle={'Something got wrong'}>
                <FormLogin404
                  toButton={setError404}
                  texts={['OOPS:)', '404']}
                />
              </FormAuth>
            )}
          </Grid>
        </Grid>
        <AuthBottom />
      </Container>
    </div>
  );
};
