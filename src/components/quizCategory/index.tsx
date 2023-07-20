import React from 'react'
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
import categories_fake from "./categories_fake.json"

export const QuizCategory = () => {
  const[value,setValue] = React.useState<number>(0)
  const[openCategory,setOpenCategory] = React.useState<boolean>(false)
  const[openFilter,setOpenFilter] = React.useState<boolean>(false)
  const allCounter = categories_fake.results.reduce((p,n)=>({id:0,name:"all",image:"img",status:1,counter:(p.counter + n.counter)}))
  return (
    <div className={style.quizCategory}>
      <div className={style.categories}>
        <Tabs className={style.tabs} sx={{"& .MuiTabs-indicator":{backgroundColor:"transparent"},"& .MuiButtonBase-root.Mui-selected":{color:"var(--white)"}}} value={value} onChange={(_,v)=>setValue(v)}>
          <Tab className={style.tab} label={"All quizes"} value={0}/>
          {
            categories_fake.results.map(v => <Tab key={v.id} className={style.tab} label={v.name.split(" ")[0]} value={v.id}/>)
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
          <Grid sm={6}>
              <div onClick={()=>{
                setValue(0)
                setOpenCategory(false)
              }} className={style.categoryBox}>
                <div className={style.allImage}>A</div>
                <div className={style.categoryDescription}>
                  <p className={style.categoryName}>
                    All Categories
                  </p>
                  <p className={style.categoryStream}>
                    {allCounter.counter} Streams
                  </p>
                </div>
              </div>
          </Grid>
          {
            categories_fake.results.map(v => (
            <Grid key={v.id} sm={6}>
              <div onClick={()=>{
                setValue(v.id)
                setOpenCategory(false)
              }} className={style.categoryBox}>
                <img src={v.image} alt={v.name} />
                <div className={style.categoryDescription}>
                  <p className={style.categoryName}>
                    {v.name}
                  </p>
                  <p className={style.categoryStream}>
                    {v.counter} Streams
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
