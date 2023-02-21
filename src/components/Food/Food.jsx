import React from 'react';
import './Food.css';

const Food = (props) => {
  return (
    <div className="food" style={{ top: props.position.y * 10, left: props.position.x * 10 }}></div>
  );
}

export default Food;
