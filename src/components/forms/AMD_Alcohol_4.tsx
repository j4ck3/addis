import React from "react";
import Radio from "../inputs/Radio";
import Text from "../inputs/Text";

const AMD_Alcohol_4:React.FC = () => {
  return (
    <>
      <Radio label={"Senaste veckan"} />
      <Radio label={"Senaste månaden"} />
      <Radio label={"Senaste halvåret"} />
      <Radio label={"Senaste året"} />
      <Text label={"Ålder"} />
    </>
  );
};

export default AMD_Alcohol_4;
