import React from 'react'
import Layout from '../../Components/Layout/Layout'
import CarouselEffect from '../../Components/Carousel/CarouselEffect'
import Catagory from'../../Components/Catagory/Catagory'
import Product from '../../Components/Product/Product'
function Landing() {
  return (
    <div>
      <Layout >
        <CarouselEffect />
        <Catagory />
        <Product />
      </Layout>
    </div>
  )
}

export default Landing
