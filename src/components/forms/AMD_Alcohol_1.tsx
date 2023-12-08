import React from "react";
import R_R from "../inputs/R_R";
import Radio from "../inputs/Radio";

const AMD_Alcohol_1:React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div></div>
        <div className="grid grid-cols-2">
          <div className="text-sm text-center">Senaste året</div>
          <div className="text-sm text-center">Senaste månaden</div>
        </div>
      </div>
      <R_R label={"*Dagligen 6-7 dagar/vecka"} />
      <R_R label={"*Varje vecka 4-5 dagar/vecka"} />
      <R_R label={"Varje vecka 1-3 dagar/vecka"} />
      <R_R label={"1-2 ggr/månad"} />
      <R_R label={"Minde än 1gg/månad"} />
      <Radio label={"Inget senaste året"} />
      <Radio label={"Har aldrig druckit alkohol"} />
    </>
  );
};

export default AMD_Alcohol_1;
