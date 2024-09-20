import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoint';
import classes from'./results.module.css'
import ProductCard from '../../Components/Product/ProductCard';
function Results() {
   const[results,setResults] =useState([]);
   const {categoryName} = useParams();
   useEffect(()=>{
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        console.log(categoryName);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
   },[categoryName])
  return (
    <Layout>
      <section>
        <h1 style={{padding:"30px"}}>Results</h1>
        <p style={{padding:"30px"}}>category / {categoryName}</p>
        <hr/>
        <div className={classes.products__container}>
          {results.map((product)=>(
            <ProductCard key={product.id}
             product={product} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Results
