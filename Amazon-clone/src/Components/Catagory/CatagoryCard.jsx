import React from 'react'
import classes from './catagory.module.css'
import { Link } from 'react-router-dom';


function CatagoryCard({data}) {
 
  return (
    <div className={classes.catagory}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h3>{data.title}</h3>
        </span>
        <img src={data.imageLink} alt="image" />
        <p>shop now</p>
      </Link>
    </div>
  );
}

export default CatagoryCard
