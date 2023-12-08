import React from "react";
import Radio from "../inputs/Radio";
import Text from "../inputs/Text";

const G_WorkSituation:React.FC = () => {
  return (
    <>
    <Radio label={"Hemarbetande"} />
    <Radio label={"Studerande"} />
    <Radio label={"Arbetslös"} />
    <Radio label={"Arbetsmarknadsåtgärder"} />
    <Radio label={"Sjukskriven"} />
    <Radio label={"Sjukersättning/Förtidspension"} />
    <Radio label={"Ålderspension"} />
    <Radio label={"Timanställd"} />
    <Radio label={"Deltidsanställd"} />
    <Radio label={"Heltidsanställd"} />
    <Radio label={"Projektanställd"} />
    <Radio label={"Egenföretagare"} />
    <Text label={"Yrke/Sysselsättning?"} />
    </>
  );
};

export default G_WorkSituation;
