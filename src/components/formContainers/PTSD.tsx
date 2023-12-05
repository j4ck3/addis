import React from "react";
import R_R from "../forms/R_R";

const PTSD:React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div></div>
        <div className="grid grid-cols-2">
          <div className="text-sm text-center">Nej</div>
          <div className="text-sm text-center">Ja</div>
        </div>
      </div>
      <R_R label={"Haft mardrömmar om det, eller tänkt på det när du inte ville?"} />
      <R_R label={"Ihärdigt försökt att inte tänka på det, eller gjort allt du kunnat för att undvika situationer som påminde dig om detta?"} />
      <R_R label={"Allvarliga ekonomiska problem?"} />
      <R_R label={"Varit konstant vaksam eller lättskrämd?"} />
      <R_R label={"Känt likgiltighet eller ett främlingsskap inför andra människor, aktiviteter eller din omgivning??"} />
    </>
  );
};

export default PTSD;
