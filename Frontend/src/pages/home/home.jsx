import React, {useState} from "react";
import './home.css';
import Header from "../../components/header/header";
import ExploreMenu from "../../components/exploreMenu/exploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

const home = () => {
 
  
const [category,setCategory]=useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/> 
      <FoodDisplay category={category}/>

    </div>
  );
};

export default home;