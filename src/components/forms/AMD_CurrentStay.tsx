import React from "react";
import Radio from "../inputs/Radio";
import R_T from "../inputs/R_T";

const AMD_CurrentStay:React.FC = () => {
  return (
    <>
      <Radio label={"Hemmet"} />
      <Radio label={"Behandlingshem/Institution"} />
      <Radio label={"Fängelse"} />
      <R_T label={"Annat"} />
    </>
  );
};

export default AMD_CurrentStay;
