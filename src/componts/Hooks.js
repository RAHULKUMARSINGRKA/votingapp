import React,{useState, useEffect} from 'react'
import ReactDOM from "react-dom/client";

function Timer() {

    const[count,setcount]=useState(0)
    useEffect(()=>{
        setTimeout(() => {
            setcount((count)=> count + 1);
            
        },1000);
    })



  return (
    <div><h1>{count}</h1></div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);

export default Timer; 