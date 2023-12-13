import React, { ChangeEvent, useState } from "react";

interface Props {
  label: string;
}

const R_T: React.FC<Props> = ({ label }) => {
  const [formData, setFormData] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData(event.target.value);
  };
  return (
    <>
      <div className="grid grid-cols-2 p-3">
        <div className="normal-case">{label}</div>
        <div className="grid grid-cols-2">
          <div>
            <input className="me-2" type="radio" />
            <input
              type="text"
              className="border h-6 p-2 rounded"
              onChange={handleInputChange}
              value={formData}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default R_T;
