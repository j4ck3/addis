import React from "react";
import Text from "../inputs/Text";

const AMD_Treatment:React.FC = () => {
  return (
    <>
      <Text label={"Senaste veckan"} />
      <Text label={"Senaste månaden"} />
      <Text label={"Senaste halvåret"} />
      <Text label={"Senaste året"} />
      <Text label={"Mer än ett år sedan"} />
    </>
  );
};

export default AMD_Treatment;
