import React from 'react'
import {
  Button,
  TextField,
  InputAdornment,
  Tabs,
  Tab,
  IconButton
} from "@mui/material"
import {ReactComponent as MagnifierIcon} from "../../assets/imges/quizIcons/search.svg"
import {ReactComponent as FilterIcon} from "../../assets/imges/quizIcons/filter.svg"
import style from "./quizCategory.module.scss"

//fake categories 
import categories from "./categories.json"

export const QuizCategory = () => {
  const[value,setValue] = React.useState<number>(0)
  return (
    <div className={style.quizCategory}>
      <div className={style.categories}>
        <Tabs className={style.tabs} sx={{"& .MuiTabs-indicator":{backgroundColor:"transparent"},"& .MuiButtonBase-root.Mui-selected":{color:"var(--white)"}}} value={value} onChange={(_,v)=>setValue(v)}>
          <Tab className={style.tab} label={"All quizes"} value={0}/>
          {
            categories.map((v,i)=><Tab key={i+1} className={style.tab} label={v.name.split(" ")[0]} value={i+1}/>)
          }
        </Tabs>
        <Button className={style.showCategories}>Show all</Button>
      </div>
      <div className={style.sort}>
        <Button variant='contained' className={style.filter}>
          <FilterIcon/>&nbsp;Filter
        </Button>
        <TextField
          sx={{
            "&.MuiFormControl-root":{backgroundColor:"var(--button-primary)",padding:"7px 0 7px 12px",borderRadius:20,overflow:"hidden"},
            "& .MuiFilledInput-root:before":{border:"none"},
            "& .MuiFilledInput-root:after":{border:"none"},
            "& .MuiInputBase-root":{backgroundColor:"var(--button-primary)",paddingRight:0},
            "& .MuiInputBase-root:hover:before":{borderBottom:"none"},
            "& .MuiInputBase-input":{color:"#fff",padding:0,backgroundColor:"var(--button-primary)"},
            " .MuiInputBase-input:hover":{border:"none"}
          }} 
          InputProps={{
            placeholder:"Search",
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <MagnifierIcon/>
                </IconButton>
              </InputAdornment>
            ),
          }} 
          variant={"filled"} 
          size={"small"}
        />
      </div>
    </div>
  )
}
