import React, {useState} from 'react'

function Counter(){
const[count,setCount]  = useState(0);

const handleClick =()=>{
    setCount(count + 1);
}
    return(
    <>
    <p>count : {count}</p>
     <button onClick = {handleClick}>Increment</button>   
    </>
    );
}
export default Counter;