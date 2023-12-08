import React from "react";
import Radio from "../inputs/Radio";
import Text from "../inputs/Text";

const G_Kids:React.FC = () => {
  return (
    <>
    <Radio label={"Ja"} />
    <Radio label={"Nej"} />

    <Text label={"Hur Många?"} />
    <Text label={"Ålder"} />
    </>
  );
};

export default G_Kids;
