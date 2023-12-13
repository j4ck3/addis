import React from "react";
import Text from "../inputs/Text";
import Yes_No from "./Yes_No";

const AMD_Overdosed: React.FC = () => {
  return (
    <>
        <Yes_No />
        <Text label={"Vilken/Vilka preparat"} />
        <Text label={"Antal ggr"} />
    </>
  );
};

export default AMD_Overdosed;
