import React from "react";

const Red = (props) => {

  const {
    history: { goBack },
  } = props;

  return (
    <div className="Red">
      <h1>THIS IS RED</h1>
      <h1>ISN'T IT BEAUTIFUL</h1>
      <h1 onClick={() => goBack()} className="click-back">GO BACK</h1>
    </div>
  );
};

export default Red;
