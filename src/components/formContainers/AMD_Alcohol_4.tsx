import React from "react";
import Radio from "../forms/Radio";
import Text from "../forms/Text";

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
