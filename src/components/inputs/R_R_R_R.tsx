import React, { ChangeEvent, useState } from "react";

interface Props {
  label: string;
}

const R_R_R_R: React.FC<Props> = ({ label }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className="grid grid-cols-2 p-3">
        <div className="normal-case">{label}</div>
        <div className="grid grid-cols-4">
          <input
            type="radio"
            className="h-6"
            value="never"
            checked={selectedOption === "never"}
            onChange={handleOptionChange}
          />
          <input
            type="radio"
            className="h-6"
            value="couple_of_days"
            checked={selectedOption === "couple_of_days"}
            onChange={handleOptionChange}
          />
          <input
            type="radio"
            className="h-6"
            value="several_days"
            checked={selectedOption === "several_days"}
            onChange={handleOptionChange}
          />
          <input
            type="radio"
            className="h-6"
            value="daily"
            checked={selectedOption === "daily"}
            onChange={handleOptionChange}
          />
        </div>
      </div>
    </>
  );
};

export default R_R_R_R;
