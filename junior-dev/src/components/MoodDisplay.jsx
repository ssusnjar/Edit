function MoodDisplay({mood}) {
    return(
        <div style={{
            backgroundColor: mood === "Sretno" ? "yellow" :
                             mood === "Neutralno" ? "blue" :
                             mood === "Tužno" ? "gray" : "gray"}}>
            <div>Trenutno raspoloženje je: {mood}  {mood === "Sretno" ? "😊" :
         mood === "Neutralno" ? "😐" :
         mood === "Tuzno" ? "😒" : ""}</div>
        </div>
    )
   }
//TODO dodat da se minja background color i ikona da se doda
export default MoodDisplay
   