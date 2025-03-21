function MoodDisplay({mood}) {
    return(
        <div style={{
            backgroundColor: mood === "Sretno" ? "#FFFF8F" :
                             mood === "Neutralno" ? "#A7C7E7" :
                             mood === "Tuzno" ? "#BEBEBE" : "" , padding: "20px"}}>
            <div>Trenutno raspoloženje je: {mood}  {mood === "Sretno" ? "😊" :
         mood === "Neutralno" ? "😐" :
         mood === "Tuzno" ? "😒" : ""}</div>
        </div>
    )
   }
//TODO dodat da se minja background color i ikona da se doda
export default MoodDisplay
   