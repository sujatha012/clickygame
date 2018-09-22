import React from "react";


const ImgCard = props => (
    <div role="img" aria-label="click item" className="click-item" id={props.id}
         style={props.image} onClick={() => props.handleClick(props.id)}/>


);

export default ImgCard;