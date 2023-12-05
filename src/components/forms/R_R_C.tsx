import React from "react";

interface Props {
  label: string;
}

const R_R_C: React.FC<Props> = ({ label }) => {
  return (
    <>
      <div className="grid grid-cols-2 p-3">
        <div className="normal-case">{label}</div>
        <div className="grid grid-cols-3">
          <input type="radio" name="1" />
          <input type="radio" name="1" />
          <input type="checkbox" />
        </div>
      </div>
    </>
  );
};

export default R_R_C;
