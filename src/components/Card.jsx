import React from 'react';
function Card(props){
    return(
      <div>
      <div className="header">
        {props.CardHeader}
        {props.CardBody}
        {props.CardFooter}
      </div>
      </div>
    )
}
export default Card;