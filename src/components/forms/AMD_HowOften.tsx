import React from "react";
import S_T_T from "../inputs/S_T_T";

const AMD_HowOften: React.FC = () => {
  const options: string[] = [
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
      <S_T_T options={options} label={"Alkohol"} />
      <S_T_T options={options} label={"Opioider"} />
      <S_T_T options={options} label={"kokain"} />
    </>
  );
};

export default AMD_HowOften;
