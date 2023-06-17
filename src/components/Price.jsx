import React from "react";

const Price= (prop)=>{
    return<div className="price" id={prop.cardID}>
    <div id={prop.cardID}>
        <p className="title">{prop.title}</p>
        <h1>{prop.price}</h1>
        <hr/>
        <p className="innerPara">{prop.size}</p>
        <hr />
        <p className="innerPara">{prop.noUsers}</p>
        <hr />
        <p className="innerPara">{prop.gigSize}</p>
        <hr />
        <button onClick={prop.click} id={prop.btnID}>LEARN MORE</button>
        </div>
    </div>
}

export default Price;