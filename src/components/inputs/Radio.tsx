import React, { ChangeEvent, useState } from "react";

interface Props {
  label: string;
}

const Radio: React.FC<Props> = ({ label }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  
  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className="grid grid-cols-2 p-3">
        <label>{label}</label>
        <input
          type="radio"
          value={"yes"}
          checked={selectedOption === "yes"}
          onChange={handleOptionChange}
        />
      </div>
    </>
  );
};
export default Radio;
