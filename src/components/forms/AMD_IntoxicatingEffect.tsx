import React from "react";
import R_R from "../inputs/R_R";

const AMD_IntoxicatingEffect: React.FC = () => {

  return (
    <>
      <div className="grid grid-cols-2">
        <div></div>
        <div className="grid grid-cols-2">
          <div className="text-sm text-center">Nej</div>
          <div className="text-sm text-center">Ja</div>
        </div>
      </div>
      <R_R label={"Alkohol"} />
      <R_R label={"Opioider"} />
      <R_R label={"kokain"} />
    </>
  );
};

export default AMD_IntoxicatingEffect;
