import style from './errorBox.module.scss'

export const ErrorBox = ({text}:{text:string}) => {
  return (
    <div className={style.errorBox}>{text}</div>
  )
}
