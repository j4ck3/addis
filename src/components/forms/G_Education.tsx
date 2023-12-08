import React from "react";
import Radio from "../inputs/Radio";

const G_Education:React.FC = () => {
  return (
    <>
    <Radio label={"Folkskola/Grundskola/Realex"} />
    <Radio label={"Yrkesskola"} />
    <Radio label={"Gymnasieskola (2-4 årig)"} />
    <Radio label={"Folkhögskola"} />
    <Radio label={"Högskola/Universitet"} />
    <Radio label={"Annat"} />
    <Radio label={"Ingen avslutad utbildning"} />
    </>
  );
};

export default G_Education;