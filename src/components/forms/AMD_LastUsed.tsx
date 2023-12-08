import React from "react";
import S_T from "../inputs/S_T";

const AMD_LastUsed: React.FC = () => {
  const opstions: string[] = [
    "Idag",
    "Senaste Veckan",
    "Senaste Månaden",
    "Senaste Halvåret",
    "Senaste Året",
    "För mer än 1 år sedan",
  ];
  return (
    <>
      <div className="grid grid-cols-2">
        <div></div>
        <div className="grid grid-cols-2">
          <div className="text-sm">Kod</div>
          <div className="text-sm">Ålder</div>
        </div>
      </div>
      <S_T options={opstions} label={"Alkohol"} />
      <S_T options={opstions} label={"Opioider"} />
      <S_T options={opstions} label={"kokain"} />
    </>
  );
};

export default AMD_LastUsed;
