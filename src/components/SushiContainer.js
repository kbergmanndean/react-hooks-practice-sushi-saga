import React, {useEffect} from "react";
import MoreButton from "./MoreButton";
import { useState } from "react";
import Sushi from "./Sushi"

function SushiContainer(props) {
  const [sushiList, setSushiList]=useState([])
  const [i, setterI]=useState(0)

  useEffect(()=>{
    fetch("http://localhost:3001/sushis")
    .then(resp=>resp.json())
    .then(data=>setSushiList(data));
  },[])

  return (
    <div className="belt">
      {sushiList.slice(i,i+4).map(sushi=><Sushi 
      key={sushi.id} 
      handleEatSushi={props.handleEatSushi}
      eatenSushi={props.eatenSushi}
      sushi={sushi}/>)}
      <MoreButton sushiList={sushiList} i={i} setterI={setterI}/>
    </div>
  );
}

export default SushiContainer;
