import { useState } from "react"
import Frontyt from "./components/Frontyt"
import Gameplay from "./components/Gameplay"




function App() {


  const [Newgame, setnewgame]= useState(false);

const togglenewgame =()=>{
  setnewgame((prev)=>!prev);
}


  return (
    <>
     { Newgame ? <Gameplay/> : <Frontyt toggle={togglenewgame}/>}   
    </>
  )
}

export default App;
