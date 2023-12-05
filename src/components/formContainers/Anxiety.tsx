import React from "react";
import R_R_R_R from "../forms/R_R_R_R";

const A_Anxiety:React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div></div>
        <div className="grid grid-cols-4">
          <div className="text-sm text-center">Inte alls</div>
          <div className="text-sm text-center">Flera dagar</div>
          <div className="text-sm text-center">Flertalet dagar</div>
          <div className="text-sm text-center">Dagligen</div>
        </div>
      </div>
      <R_R_R_R label={"Känt dig nervös, orolig, spänd?"} />
      <R_R_R_R label={"Inte kunnat låta bli att ängslas?"} />
      <R_R_R_R label={"Ängslats för mycket om olika saker?"} />
    </>
  );
};

export default A_Anxiety;
