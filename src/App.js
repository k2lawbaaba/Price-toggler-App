import "./style.css"
import Price from "./components/Price";
import {Switch} from '@mui/material/';
import { useState } from "react";


function App() {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  

  const [toggle, setToggle]= useState(false);
  const toggler=()=>{
    setToggle(!toggle)
  }
  
  return (
    <div className="App">
     <h2 className="priceHeader">Our Pricing</h2>
    <div className="types">
      <p >Annually</p>
      <Switch {...label} defaultChecked  onChange={toggler}/>
      <p>Monthly</p>

    7    </div>
    <div className="priceDiv">
      <Price 
      cardID='basicMaster'
      title="Basic"
      price={(!toggle)?  "N19.99" : "N199.99"}
      size="50 GB Stroage"
      noUsers="2 Users Allowed"
      gigSize='Send up to 3 GB'
      btnID="basicMasterBTN"
      />
       <Price 
      cardID='professional'
      title="Professional"
      price={(!toggle)?  "N24.99" : "N249.99"}
      size="1 TB Stroage"
      noUsers="5 Users Allowed"
      gigSize='Send up to 10 GB'
      btnID="professionalBTN"
      />
       <Price 
      cardID='basicMaster'
      title="Master"
      price={(!toggle)?  "N39.99" : "N399.99."}
      size="2 TB GB Stroage"
      noUsers="10 Users Allowed"
      gigSize='Send up to 20 GB'
      btnID="basicMasterBTN"
      />
    </div>
    </div>
  );
}

export default App;
