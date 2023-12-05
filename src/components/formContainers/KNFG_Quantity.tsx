import React from "react";
import R_R from "../forms/R_R";
import Radio from "../forms/Radio";

const KNFG_Quantity:React.FC = () => {
  return (
    <>
      <Radio label={"Ingen"} />
      <Radio label={"1 -3"} />
      <Radio label={"4 -6"} />
      <Radio label={"7 - 9"} />
      <Radio label={"10 +"} />
    </>
  );
};

export default KNFG_Quantity;
