import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import Navbar  from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";


const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
};

export default Home;