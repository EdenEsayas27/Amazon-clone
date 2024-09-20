import React from 'react'
import {catagoryInfo} from './catagoryInfo'
import CatagoryCard from './CatagoryCard'
import classes from'./catagory.module.css'

function Catagory() {
  return (
    <div className={classes.catagory__container}>
      {
        catagoryInfo.map((info,index)=>(
            <CatagoryCard  key={index} data={info} />
        ))
      }
    </div>
  )
}

export default Catagory
