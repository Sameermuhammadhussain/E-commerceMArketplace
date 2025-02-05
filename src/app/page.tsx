import Header from "@/app/components/header";
import Hero from "./components/hero";
import Side from "./components/side";
import Pick from "./components/pick";
import Arrival from "./components/arrival";
import Blog from "./components/blog";
import Follow from "./components/follow";


import React from 'react'

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Side />
      <Pick />
      <Arrival />
      <Blog />
      <Follow />
    </div>
  )
}

export default Home