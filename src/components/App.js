import React,{useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [eatenSushi, setEaten]=useState([])

  function handleEatSushi (id) {
    if(!eatenSushi.includes(id)) {
      const newEaten=[...eatenSushi,id]
      setEaten(newEaten)
    }
  }
  console.log(eatenSushi)


  return (
    <div className="app">
      <SushiContainer handleEatSushi={handleEatSushi} eatenSushi={eatenSushi}/>
      <Table plates={eatenSushi}/>
    </div>
  );
}

export default App;
