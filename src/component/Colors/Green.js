import React from "react";

const Green = (props) => {
  const {
    history: { goBack },
  } = props;

  return (
    <div className="Green">
      <h1>THIS IS RED</h1>
      <h1>ISN'T IT BEAUTIFUL</h1>
      <h1 onClick={() => goBack()} className="click-back">GO BACK</h1>
    </div>
  );
};

export default Green;