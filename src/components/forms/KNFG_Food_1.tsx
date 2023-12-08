import React from "react";
import R_R from "../inputs/R_R";

const KNFG_Food_1:React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div></div>
        <div className="grid grid-cols-2">
          <div className="text-sm text-center">Nej</div>
          <div className="text-sm text-center">Ja</div>
        </div>
      </div>
      <R_R label={"Har du ändrat dina matvanor?"} />
      <R_R label={"Är du orolig att du tappat kontrollen över hur mycket/hur lite du äter?"} />
    </>
  );
};

export default KNFG_Food_1;
