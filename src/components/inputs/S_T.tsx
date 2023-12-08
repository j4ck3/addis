import React from "react";

interface Props {
  label: string;
  options: string[]
}

const S_T: React.FC<Props> = ({ label, options }) => {
  return (
    <>
      <div className="grid grid-cols-2 p-3">
        <div className="normal-case">{label}</div>
        <div className="grid grid-cols-2 space-x-2">
          <select className="p-2">
          {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
          </select>
          <input className="p-2 h-6 border rounded" type="text" name="1" />
        </div>
      </div>
    </>
  );
};

export default S_T;
    