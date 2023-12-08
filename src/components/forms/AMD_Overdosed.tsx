import React from "react";
import Radio from "../inputs/Radio";
import Text from "../inputs/Text";

const AMD_Overdosed: React.FC = () => {
  return (
    <>
        <Radio label={"Nej"} />
        <Radio label={"Ja"} />
        <Text label={"Vilken/Vilka preparat"} />
        <Text label={"Antal ggr"} />
    </>
  );
};

export default AMD_Overdosed;
