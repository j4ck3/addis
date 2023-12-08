import React from "react";
import Text from "../inputs/Text";
import Checkbox from "../inputs/Checkbox";

const AMD_Alcohol_5:React.FC = () => {
  return (
    <>
      <Text label={"Mängd (cl)"} />
      <Text label={"Ålder"}  />
      <Checkbox label={"Har aldrig blivit berusad"} /> 
    </>
  );
};

export default AMD_Alcohol_5;
