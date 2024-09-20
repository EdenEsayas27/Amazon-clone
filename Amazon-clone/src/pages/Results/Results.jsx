import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoint';
import classes from'./results.module.css'
import ProductCard from '../../Components/Product/ProductCard';
import Loader from '../../Components/Loader/Loader';
function Results() {
   const[results,setResults] =useState([]);
   const {categoryName} = useParams();
   const [loading, setLoading] = useState(true);
   useEffect(()=>{
    setLoading(true);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setLoading(false)
        console.log(categoryName);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false)
      });
   },[categoryName])
  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>category / {categoryName}</p>
          <hr />
          <div className={classes.products__container}>
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
}

export default Results
