import React from "react";

interface Props {
  label: string;
}

const RadioDaily: React.FC<Props> = ({ label }) => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="capitalize">{label}</div>
        <div className="grid grid-cols-4">
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
        </div>
      </div>
    </>
  );
};

export default RadioDaily;
