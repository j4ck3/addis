import React from "react";
import R_R_E_C from "../inputs/R_R_E_C";

const AMD_StrongerDoses:React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div></div>
        <div className="grid grid-cols-4">
          <div className="text-sm text-center">Nej</div>
          <div className="text-sm text-center">Ja</div>
          <div className="text-sm text-center"><i className="bi bi-arrow-right"></i></div>
          <div className="text-sm text-center">Senaste året</div>
        </div>
      </div>
      <R_R_E_C label={"Alkohol"} />
      <R_R_E_C label={"Opioider"} />
      <R_R_E_C label={"Cannabinoider"} />
    </>
  );
};

export default AMD_StrongerDoses;
