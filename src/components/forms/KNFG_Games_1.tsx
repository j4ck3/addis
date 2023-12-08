import React from "react";
import R_R_R_R from "../inputs/R_R_R_R";

const KNFG_Games_1:React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div></div>
        <div className="grid grid-cols-4">
          <div className="text-sm text-center">Aldrig</div>
          <div className="text-sm text-center">Ibland</div>
          <div className="text-sm text-center">Ofta</div>
          <div className="text-sm text-center">Nästan Alltid</div>
        </div>
      </div>
      <R_R_R_R label={"Spelat för mer än du verkligen haft råd att förlora?"} />
      <R_R_R_R label={"Har du behövt spela med större summor för att få samma känsla av spänning?"} />
    </>
  );
};

export default KNFG_Games_1;
