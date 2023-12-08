import React from "react";

interface Props {
  label: string;
}

const R_R_E_C: React.FC<Props> = ({ label }) => {
  return (
    <>
      <div className="grid grid-cols-2 p-3">
        <div className="normal-case">{label}</div>
        <div className="grid grid-cols-4">
          <input type="radio" name="1" />
          <input type="radio" name="1" />
          <div></div>
          <input type="checkbox" name="1" />
        </div>
      </div>
    </>
  );
};

export default R_R_E_C;
