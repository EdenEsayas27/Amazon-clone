import React from 'react'
import classes from './catagory.module.css'
function CatagoryCard({data}) {
  return (
    <div className={classes.catagory}>
      <a href="#">
        <span>
          <h3>{data.title}</h3>
        </span>
        <img src={data.imageLink} alt="image" />
        <p>shop now</p>
      </a>
    </div>
  );
}

export default CatagoryCard
