import React from "react";
import { Link } from "react-router-dom";

const Colors = (props) => {
  const {
    colors,
    match: {
      params: { color },
    },
  } = props;

  const findColor = colors.find((col) => col.color === color);

  return (
    <>
      {findColor && (
        <div style={{ backgroundColor: findColor.hex }}>
          <h1>THIS IS {color} </h1>
          <h1>ISN'T IT BEAUTIFUL</h1>
          <h1 className="click-back">
            <Link to="/">GO BACK</Link>
          </h1>
        </div>
      )}
    </>
  );
};

export default Colors;
