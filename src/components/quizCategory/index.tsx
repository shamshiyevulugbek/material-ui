import React from 'react'
import {Link} from "react-router-dom"
import {
  Button,
  TextField,
  InputAdornment,
  Tabs,
  Tab,
  IconButton,
  FormControlLabel
} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import {DWDModal} from "../modal"
import {DWDButton} from "../button"
import {DWDSwitch} from "../switch"
import {ReactComponent as MagnifierIcon} from "../../assets/imges/quizIcons/search.svg"
import {ReactComponent as FilterIcon} from "../../assets/imges/quizIcons/filter.svg"
import style from "./quizCategory.module.scss"

//fake categories 
import categories from "./categories.json"

export const QuizCategory = () => {
  const[value,setValue] = React.useState<number>(0)
  const[openCategory,setOpenCategory] = React.useState<boolean>(false)
  const[openFilter,setOpenFilter] = React.useState<boolean>(false)
  return (
    <div className={style.quizCategory}>
      <div className={style.categories}>
        <Tabs className={style.tabs} sx={{"& .MuiTabs-indicator":{backgroundColor:"transparent"},"& .MuiButtonBase-root.Mui-selected":{color:"var(--white)"}}} value={value} onChange={(_,v)=>setValue(v)}>
          <Tab className={style.tab} label={"All quizes"} value={0}/>
          {
            categories.map((v,i)=><Tab key={i+1} className={style.tab} label={v.name.split(" ")[0]} value={i+1}/>)
          }
        </Tabs>
        <Button className={style.showCategories} onClick={()=>setOpenCategory(true)}>Show all</Button>
      </div>
      <div className={style.sort}>
        <Button variant='contained' onClick={()=>setOpenFilter(true)} className={style.filter}>
          <FilterIcon/>&nbsp;Filter
        </Button>
        <TextField
          sx={{
            "&.MuiFormControl-root":{backgroundColor:"var(--button-primary)",padding:"7px 0 7px 12px",borderRadius:20,overflow:"hidden"},
            "& .MuiFilledInput-root:before":{border:"none"},
            "& .MuiFilledInput-root:after":{border:"none"},
            "& .MuiInputBase-root":{backgroundColor:"var(--button-primary)",paddingRight:0},
            "& .MuiInputBase-root:hover":{backgroundColor:"var(--button-primary)"},
            "& .MuiInputBase-input::placeholder":{color:"var(--white)",opacity:1},
            "& .MuiFilledInput-root.MuiInputBase-root:hover:before":{borderBottom:"none"},
            "& .MuiInputBase-input":{color:"var(--white)",padding:0,backgroundColor:"var(--button-primary)"},
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
      <DWDModal open={openCategory} onClose={()=>setOpenCategory(false)} title='ALL CATEGORIES' closeBtn={()=>{setOpenCategory(false)}}>
        <Grid sx={{maxHeight:"50vh",overflowY:"auto"}} container rowSpacing={2} columnSpacing={1}>
          {
            categories.map((v,i)=>(
            <Grid key={i} sm={6}>
              <div onClick={()=>{
                setValue(i+1)
                setOpenCategory(false)
              }} className={style.categoryBox}>
                <img src={v.img} alt={v.name} />
                <div className={style.categoryDescription}>
                  <p className={style.categoryName}>
                    {v.name}
                  </p>
                  <p className={style.categoryStream}>
                    {v.streams} Streams
                  </p>
                </div>
              </div>
            </Grid>
            ))
          }
        </Grid>
      </DWDModal>
      <DWDModal open={openFilter} onClose={()=>setOpenFilter(false)} title='Filter' closeBtn={()=>{setOpenFilter(false)}}>
        <div>
          <FormControlLabel
            sx={{display:"flex",width:300,alignItems:"center",justifyContent:"space-between",margin:"0 0 24px"}}
            control={<DWDSwitch/>}
            label="Автоигры"
            labelPlacement="start"
          />
          <FormControlLabel
            sx={{display:"flex",width:300,alignItems:"center",justifyContent:"space-between",margin:"0 0 24px"}}
            control={<DWDSwitch/>}
            label="Платный вход"
            labelPlacement="start"
          />
          <DWDButton variant='contained' style={{padding:12}} readyToCLick={true} fullWidth>Accept</DWDButton>
        </div>
      </DWDModal>
    </div>
  )
}
