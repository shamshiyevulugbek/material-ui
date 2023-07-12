import React from 'react';
import style from './formAuth.module.scss';

import { ReactComponent as ReactLogo } from '../../assets/imges/logo.svg';

export const FormAuth = ({title=true,subtitle,children,fullWidth}:{title:boolean,subtitle:string,children:React.ReactNode,fullWidth?:boolean}) => {

  return (
    <div style={{width:fullWidth?"100%":undefined}} className={style.formAuth}>
      <div className={style.logoContainer}>
        <ReactLogo className={style.logo} />
      </div>
      {title?<h3 className={style.heading}>WELCOME TO DWED</h3>:null}
      {<p className={style.text}>{subtitle}</p>}

      {children}
    </div>
  );
};
