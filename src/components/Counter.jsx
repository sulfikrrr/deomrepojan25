import { useState } from "react"
function Counter()
{
    //count=state
    //setCount=a fn to modify the state
    const[count,setCount]=useState(0);
 
    return(
    <>
    <h2>Goal : {count}</h2>
    <button onClick={()=>setCount(count+10) }>Goal</button>
    <button onClick={()=>setCount(count-5) }>Penalty</button>
    <button onClick={()=>setCount(0) }>Reset</button>
    </>
    )
}
export default Counter;