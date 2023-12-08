import React from "react";
import R_R from "../inputs/R_R";
import Radio from "../inputs/Radio";

const AMD_Alcohol_2:React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div></div>
        <div className="grid grid-cols-2">
          <div className="text-sm text-center">Senaste året</div>
          <div className="text-sm text-center">Senaste månaden</div>
        </div>
      </div>
      <R_R label={"6 - 12 cl sprit"} />
      <R_R label={"13 - 19 cl sprit"} />
      <R_R label={"*20 - 37 cl sprit"} />
      <R_R label={"*38 eller fler cl sprit"} />
      <Radio label={"Inget senaste året"} />
    </>
  );
};

export default AMD_Alcohol_2;
