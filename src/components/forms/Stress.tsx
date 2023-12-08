import React from "react";
import R_R_C from "../inputs/R_R_C";

const G_Stress:React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div></div>
        <div className="grid grid-cols-3">
          <div className="text-sm text-center">Nej</div>
          <div className="text-sm text-center">Ja</div>
          <div className="text-sm text-center">Ja, och jag känner ännu av det som problem</div>
        </div>
      </div>
      <R_R_C label={"Ett nytt jobb eller förändring?"} />
      <R_R_C label={"Förlust av jobbet, friställning eller arbetslöshet?"} />
      <R_R_C label={"Allvarliga ekonomiska problem?"} />
    </>
  );
};

export default G_Stress;
