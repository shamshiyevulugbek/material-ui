import React from "react"
import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css"
import s from "./home.module.scss"

export const Home = () => {
  const [value,setValue] = React.useState<string>("")
  return (
    <div className={s.home}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, odio!</p>
      <div style={{width:400,height:400,margin:"0 auto",backgroundColor:"green"}}>
        <PhoneInput
          international
          countryCallingCodeEditable={false}
          defaultCountry="UZ"
          onChange={(d)=>console.log(d)}
          className={s.phone}
        />
      </div>
    </div>
  )  

}

