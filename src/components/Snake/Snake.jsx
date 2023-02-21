import React from 'react';
import "./Snake.css";

const Snake = (props) => {
  return (
    <div>
      {props.segments.map((segment, i) => (
        <div key={i} className='snake-segment'/>
      ))}
    </div>
  );
}

export default Snake;
