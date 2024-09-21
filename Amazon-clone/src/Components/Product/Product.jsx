import React, { useEffect, useState } from 'react'
import axios from'axios'
import classes from'./Product.module.css'
import ProductCard from './ProductCard';
import Loader from '../Loader/Loader';
function Product() {
    const[products,setProducts]=useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setLoading(true);
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            setProducts(res.data)
            setLoading(false)
        }).catch((err)=>{
            console.log(err);
            setLoading(false)
        })
    },[])
  return (
    <>
      {loading ? (<Loader />) : (
        <section className={classes.product__container}>
          {products?.map((singleProduct) => {
            return (
              <ProductCard product={singleProduct} key={singleProduct.id} renderAdd={true}/>
            );
          })}
        </section>
      )}
    </>
  );
}

export default Product
