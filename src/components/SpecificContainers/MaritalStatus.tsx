import React from "react";
import Radio from "../forms/Radio";

const MaritalStatus = () => {
  return (
    <>
        <Radio label="Ensamstående"/>
        <Radio label="Gift/Sambo"/>
        <Radio label="Särbo"/>
        <Radio label="Frånskild/Separerad"/>
        <Radio label="Änka/Änkling"/>
    </>
  );
};

export default MaritalStatus;
