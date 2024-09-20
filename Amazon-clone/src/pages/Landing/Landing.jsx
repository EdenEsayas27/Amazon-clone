import React from 'react'
import Layout from '../../Components/Layout/Layout'
import CarouselEffect from '../../Components/Carousel/CarouselEffect'
import Catagory from'../../Components/Catagory/Catagory'
function Landing() {
  return (
    <div>
      <Layout >
        <CarouselEffect />
        <Catagory />
      </Layout>
    </div>
  )
}

export default Landing
