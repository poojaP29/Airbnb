import React from "react";
import Card from "./card.js";
import data from "./data.js";
import Navbar from "./navbar.js";
import './App.css';
export default function App()
{
const cards = data.map(item => {
return (
  <Card 
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
      
      
  />
)
})        
return (
  <div>
    
      <Navbar />
      <section className="con">
      {cards}
      </section>
  </div>
)
}