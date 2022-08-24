import React from 'react'
import HomeStyles from "./home.module.css"
import Hero from "../component/Hero/Hero"
import Banner from "../component/Banner/Banner"
import Card from "../component/Card/Card"

export default function home() {
  return (
    <div className={HomeStyles.container}>
     <Hero/>
     <Banner/>
    <Card/>
      </div>
  )
}
