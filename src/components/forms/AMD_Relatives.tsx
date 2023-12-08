import React from "react";
import Radio from "../inputs/Radio";
import Text from "../inputs/Text";

const AMD_Relatives:React.FC = () => {
  return (
    <>
      <Radio label={"Nej"} />
      <Radio label={"Ja"} />
      <Text label={"Om ja, vem/vilka, och har de fått hjälp?"} />
    </>
  );
};

export default AMD_Relatives;
