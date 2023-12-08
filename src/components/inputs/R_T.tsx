import React from "react";

interface Props {
  label: string;
}

const R_T: React.FC<Props> = ({ label }) => {
  return (
    <>
      <div className="grid grid-cols-2 p-3">
        <div className="normal-case">{label}</div>
        <div className="grid grid-cols-2">
          <div>
            <input className="me-2" type="radio"/>
            <input type="text" className="border h-6 p-2 rounded" />
          </div>
        </div>
      </div>
    </>
  );
};

export default R_T;
