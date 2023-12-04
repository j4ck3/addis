import React from "react";

interface Props {
  label: string;
}

const Debut: React.FC<Props> = ({ label }) => {
  return (
    <>
      <div className="grid grid-cols-2 p-3">
        <div className="capitalize">{label}</div>
        <div className="grid grid-cols-5">
          <input type="radio" name="1" />
          <input type="radio" name="1" />
          <input type="checkbox" name="lastYear" />
          <input type="checkbox" name="lastMonth" />
          <input type="text" name="debut" className="border" />
        </div>
      </div>
    </>
  );
};

export default Debut;
