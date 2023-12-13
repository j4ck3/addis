import React from "react";
import R_R_R_R_C_T from "../inputs/R_R_R_R_C_T";

const AMD_Debut_v2: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div></div>
        <div className="grid grid-cols-6">
          <div className="text-sm text-center w-20">Nej</div>
          <div className="text-sm text-center  w-20">Ja</div>
          <div className="col-span-2">
            <div className="grid grid-cols-2">
              <div className="col-span-2 text-sm text-center">
                Antal gånger senaste året
              </div>
              <div className="text-sm text-center mt-2 w-20">1</div>
              <div className="text-sm text-center mt-2 w-20">2+</div>
            </div>
          </div>
          <div className="text-sm text-center w-20">Senaste månaden</div>
          <div className="text-sm text-center w-20">Debut</div>
        </div>
      </div>
      <R_R_R_R_C_T label={"Alkohol"} />
      <R_R_R_R_C_T label={"Opioider"} />
      <R_R_R_R_C_T label={"kokain"} />
    </>
  );
};

export default AMD_Debut_v2;
