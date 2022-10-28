import React from 'react'
import Header from '../components/Header'
import Footer from "../components/Footer";
import AllProductsGrid from '../components/AllProducts/AllProductsGrid';


function AllProducts() {
  return (
    <div>
      <Header />
      <AllProductsGrid />
      <Footer />
    </div>
  )
}

export default AllProducts