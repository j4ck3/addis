import React from "react";

interface Props {
  label: string;
}

const R_R_R_R_C_T: React.FC<Props> = ({ label }) => {
  return (
    <>
      <div className="grid grid-cols-2 p-3">
        <div className="normal-case">{label}</div>
        <div className="grid grid-cols-6">
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
          <input type="checkbox"  />
          <input type="text" className="border h-6 p-2 rounded" />
        </div>
      </div>
    </>
  );
};

export default R_R_R_R_C_T;
