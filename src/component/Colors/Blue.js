import React from "react";

const Blue = (props) => {
  const {
    history: { goBack },
  } = props;

  return (
    <div className="Blue">
      <h1>THIS IS RED</h1>
      <h1>ISN'T IT BEAUTIFUL</h1>
      <h1 onClick={() => goBack()} className="click-back">GO BACK</h1>
    </div>
  );
};

export default Blue;