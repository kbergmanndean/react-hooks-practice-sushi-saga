import React,{useState} from "react";

function Sushi(props) {
  // const [sushiEaten, setSushiEaten]=useState(false)

  // function handleSushi(){
  //   setSushiEaten(true)
  // }

  return (
    <div className="sushi">
      <div className="plate" onClick={()=>props.handleEatSushi(props.sushi.id)}>
        {props.eatenSushi.includes(props.sushi.id)? null : (
          <img
            src={props.sushi.img_url}
            alt={props.sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
