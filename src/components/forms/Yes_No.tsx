import React, { ChangeEvent, useState } from "react";

const Yes_No: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className="grid grid-cols-2">
        <label className="inline-flex items-center cursor-pointer">
          <input
            className="block cursor-pointer"
            type="radio"
            value="no"
            checked={selectedOption === "no"}
            onChange={handleOptionChange}
          />
          <span className="ml-2">Nej</span>
        </label>
        <label className="inline-flex items-center cursor-pointer">
          <input
            className="block cursor-pointer"
            type="radio"
            value="yes"
            checked={selectedOption === "yes"}
            onChange={handleOptionChange}
          />
          <span className="ml-2">Ja</span>
        </label>
      </div>
    </>
  );
};

export default Yes_No;
