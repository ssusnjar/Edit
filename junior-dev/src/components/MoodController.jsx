import { useState } from "react";
import MoodDisplay from "./MoodDisplay";


function MoodController() {
    const [count, setCount] = useState(0);
    const [mood, setMood] = useState("Neutralno");


    const moodChange= (newMood) =>{
        setMood(newMood);
        setCount(count+1);
    }

    const reset = () =>{
        setCount(0)
    }

    return(
        <>
           <MoodDisplay mood={mood}/>
           <button  onClick={() => moodChange("Sretno")}>Sretno</button>
           <button onClick={() => moodChange("Neutralno")}>Neutralno</button>
           <button onClick={() => moodChange("Tuzno")}>Tuzno</button>
           <div>Broj promjena: {count}</div>
            {count >=10 && <button onClick={reset}> Reset</button> }
        </>
    )
   }
  
  
  
  
export default MoodController
   