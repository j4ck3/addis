import React from "react";
import Debut from "../inputs/R_R_C_C_T";

const DebutContainer:React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div></div>
        <div className="grid grid-cols-5">
          <div className="text-sm text-center">Nej</div>
          <div className="text-sm text-center">Ja</div>
          <div className="text-sm text-center">Senaste året</div>
          <div className="text-sm text-center">Senaste månaden</div>
          <div className="text-sm text-center">Debut</div>
        </div>
      </div>
      <Debut label={"Alkohol"} /> 
      <Debut label={"Opioider"} />
      <Debut label={"kokain"} />
    </>
  );
};

export default DebutContainer;
