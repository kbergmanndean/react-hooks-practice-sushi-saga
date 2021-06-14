import React from "react";

function MoreButton({i, setterI}) {

  function nextSushis(){
    setterI(i+4)
  }

  return <button onClick={nextSushis}>More sushi!</button>;
}

export default MoreButton;
