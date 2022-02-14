import { useState } from "react";
import {Link,useParams} from  "react-router-dom";


function TourDetails (props){
 
    
const [isClick,setClichk]=useState(false);

const handeldetail=()=>
{
    setClichk(!isClick);
}

let {id} = useParams();




let cdata= props.cityinf.filter(val=>{
    if (val.id==id)
    return val;
})

if (isClick){
    return (
        <>
        <h2>
            name : {cdata[0].name} 
            price : {cdata[0].price}
        </h2>
        <img className="App-logo" src={cdata[0].image} alt={cdata[0].name}></img>
        

        <p>
            {cdata[0].info}
         </p>  
        <button onClick={handeldetail}>
            liss
        </button>
        </>
        );
}else {
    return (
        <>
        <h2>
            name : {cdata[0].name} 
            price : {cdata[0].price}
        </h2>
        <img className="App-logo" src={cdata[0].image} alt={cdata[0].name}></img>
        

        <p>
            {cdata[0].info.substring(0,50)}
         </p>  
        <button onClick={handeldetail}>
            More
        </button>
        </>
        );

}



}














export default TourDetails;


///

