import React from "react";
import Radio from "../forms/Radio";
import Text from "../forms/Text";

const KNFG_Smoking:React.FC = () => {
  return (
    <>
      <Radio label={"Ja"} />
      <Radio label={"Nej"} />
      <Text label={"Debutålder"} />
    </>
  );
};

export default KNFG_Smoking;
