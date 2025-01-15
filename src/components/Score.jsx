import { useState } from "react";
import { useEffect } from "react";
function Score()
{
    const[score,setScore]=useState(0);
    useEffect(()=>{console.log ("Score has been changed",score);},[score]) 
    return(
        <>
        <br /><br /><br />
    <h1>⚽ScoreBoard⚽</h1>
    <h2>SCORE : {score}</h2>
    <button onClick={()=>setScore(score+10) }>Goal</button>
    <button onClick={()=>setScore(score-5) }>Penalty</button>
    <button onClick={()=>setScore(0) }>Reset</button>
    </>
    )
}
export default Score