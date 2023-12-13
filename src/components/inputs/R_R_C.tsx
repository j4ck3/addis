import clsx from "clsx";
import React, { ChangeEvent, useState } from "react";

interface Props {
  label: string;
}

const R_R_C: React.FC<Props> = ({ label }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className="grid grid-cols-2 p-3">
        <div className="normal-case">{label}</div>
        <div className="grid grid-cols-3">
          <input
            type="radio"
            className="h-6"
            value="no"
            checked={selectedOption === "no"}
            onChange={handleOptionChange}
          />
          <input
            type="radio"
            className="h-6"
            value="yes"
            checked={selectedOption === "yes"}
            onChange={handleOptionChange}
          />
          <input
            type="checkbox"
            className={clsx("h-6", {
              "cursor-not-allowed":
                selectedOption === "no" || selectedOption === null,
            })}
            disabled={selectedOption === "no" || selectedOption === null}
          />
        </div>
      </div>
    </>
  );
};

export default R_R_C;
