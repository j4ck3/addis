import React, { ChangeEvent, useState } from "react";

interface Props {
  label: string;
}

const R_R: React.FC<Props> = ({ label }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="grid grid-cols-2 p-3">
      <div className="normal-case">{label}</div>
      <div className="grid grid-cols-2">
        <input
          type="radio"
          value="yes"
          checked={selectedOption === "yes"}
          onChange={handleOptionChange}
          className="h-6"
        />

        <input
          type="radio"
          value="no"
          checked={selectedOption === "no"}
          onChange={handleOptionChange}
          className="h-6"
        />
      </div>
    </div>
  );
};

export default R_R;
