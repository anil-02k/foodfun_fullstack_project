import React, {useState} from "react";
import './home.css';
import Header from "../../components/header/header";
import ExploreMenu from "../../components/exploreMenu/exploreMenu";

const home = () => {
 
  
const [category,setCategory]=useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/> 
      

    </div>
  );
};

export default home;
