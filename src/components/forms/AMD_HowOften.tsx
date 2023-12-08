import React from "react";
import D_D_T from "../inputs/S_T_T";

const AMD_HowOften: React.FC = () => {
  const opstions: string[] = [
    "*5-7 dagar/vecka",
    "3-4 dagar/vecka",
    "1-2 dagar/vecka",
    "Minst 12ggr/år",
    "Mindre än 12ggr/år",
    "Inte under senaste året",
  ];
  return (
    <>
      <div className="grid grid-cols-2">
        <div></div>
        <div className="grid grid-cols-3">
          <div className="text-sm">Kod</div>
          <div className="text-sm">Debut</div>
          <div className="text-sm">Ålder reg.bruk</div>
        </div>
      </div>
      <D_D_T options={opstions} label={"Alkohol"} />
      <D_D_T options={opstions} label={"Opioider"} />
      <D_D_T options={opstions} label={"kokain"} />
    </>
  );
};

export default AMD_HowOften;
