import React from "react";
import Debut from "../forms/Debut";
import Radio from "../forms/Radio";
import Text from "../forms/Text";

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
