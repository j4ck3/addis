import React, { ChangeEvent, useState } from "react";

interface Props {
  label: string;
}

const Debut: React.FC<Props> = ({ label }) => {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [checkedOption, setCheckedOption] = useState<string | null>(null);

  const handleCheckboxChange = (checkboxNumber: number) => {
    if(selectedOption == "no"){
      setCheckbox1(false);
      setCheckbox2(false);
      setCheckedOption(null);
    }
    
    if (checkboxNumber === 2) {
      setCheckbox1(true);
      setCheckbox2(false);
    }
    if (checkboxNumber === 1) {
      if (checkbox2) {
        setCheckbox2(false);
      }
    }
    if (checkboxNumber === 2) {
      if (checkbox1) {
        setCheckbox1(true);
      }
    }
    if (checkboxNumber === 1) {
      setCheckbox1(!checkbox1);
      if (checkbox1 === false) {
        setCheckedOption("last_year");
      } else {
        setCheckedOption("");
      }
    } else if (checkboxNumber === 2) {
      setCheckbox2(!checkbox2);
      setCheckedOption("last_month");
      if (checkbox2 === false) {
        setCheckedOption("last_month");
      } else {
        setCheckedOption("last_year");
      }
    }
  };

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className="grid grid-cols-2 p-3">
        <div className="normal-case">
          {label}
          {selectedOption}
          {checkedOption}
        </div>
        <div className="grid grid-cols-5">
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
            className="h-6"
            checked={checkbox1}
            onChange={() => handleCheckboxChange(1)}

            disabled={selectedOption === "no" || selectedOption === null}
          />
          <input
            type="checkbox"
            className="h-6"
            checked={checkbox2}
            onChange={() => handleCheckboxChange(2)}
            disabled={selectedOption === "no" || selectedOption === null}
          />
          <input
            type="text"
            className="border h-6 p-2 rounded"
            disabled={selectedOption === "no" || selectedOption === null}
          />
        </div>
      </div>
    </>
  );
};

export default Debut;
