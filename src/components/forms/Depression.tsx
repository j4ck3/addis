import React from "react";
import R_R_C from "../inputs/R_R_C";
import Text from "../inputs/Text";

const Depression: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div></div>
        <div className="grid grid-cols-3">
          <div className="text-sm text-center">Nej</div>
          <div className="text-sm text-center">Ja</div>
          <div className="text-sm text-center">Aktuellt (senaste 2 v.)</div>
        </div>
      </div>
      <R_R_C label={"Nedstämdhet större delen av dagen?"}/>
      <R_R_C label={"Påtagligt minskat intresse för aktiviteter under stora delar av dagen?"}/>
      <Text label={"Hur gammal var du första gången du kände allt det här?"}/>
      <Text label={"Hur gammal var du när du senast kände allt det här?"}/>
    </>
  );
};

export default Depression;
