import React from "react";
import Radio from "../inputs/Radio";

const AMD_Alcohol_7:React.FC = () => {
  return (
    <>
      <Radio label={"Senaste veckan"} />
      <Radio label={"Senaste månaden"} />
      <Radio label={"Senaste halvåret"} />
      <Radio label={"Senaste året"} />
      <Radio label={"För mer än ett år sedan"} />
      <Radio label={"Har aldrig varit berusad"} />
    </>
  );
};

export default AMD_Alcohol_7;
