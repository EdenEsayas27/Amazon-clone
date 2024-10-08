import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../Components/Product/ProductCard";
import { productUrl } from "../../Api/endPoint";
import Loader from "../../Components/Loader/Loader";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null); // Initialize as null
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Set loading to true before the request
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((err) => {
        console.error(err);
        setLoading(false); // Set loading to false if there's an error
      });
  }, [productId]);

  return (
    <Layout>
      {loading ? ( // Show loading message while fetching
       <Loader />
      ) : product ? ( // Check if product data exists
        <ProductCard product={product} flex={true} renderDesc={true} renderAdd={true}/>
      ) : (
        <p>Product not found.</p> // Handle case where product is not found
      )}
    </Layout>
  );
}

export default ProductDetail;
