import React from "react";
import Radio from "../inputs/Radio";

const KNFG_Nicotine:React.FC = () => {
  return (
    <>
      <Radio label={"Inte alls?"} />
      <Radio label={"Då och då - ej dagligen"} />
      <Radio label={"Upp till 1 pkt/dosa/dag"} />
      <Radio label={"Mer än 1 pkt/dosa/dag"} />
      <Radio label={"Mer än 2 pkt/dosa/dag"} />
    </>
  );
};

export default KNFG_Nicotine;
