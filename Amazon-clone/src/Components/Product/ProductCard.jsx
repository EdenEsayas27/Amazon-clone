import React from 'react'
import Rating from "@mui/material/Rating";
import CurrencyFormater from '../CurrencyFormater/CurrencyFormater';
import classes from'./Product.module.css';

function ProductCard({product}) {
    const {image,title,id,rating,price} = product;
  return (
    <div className={classes.card__container}>
        <a href="#">
            <img src={image} alt="proimage" />
        </a>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
            <Rating value={rating.rate} precision={0.1} />
            <small>{rating.count}</small>
        </div>
        <div>
            <CurrencyFormater amount={price} />

        </div>
        <button className={classes.button}>add to cart</button>
      </div>
    </div>
  )
}

export default ProductCard
