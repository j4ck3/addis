import React, { ChangeEvent, useState } from "react";
import TwoClickButton from "../TwoClickButton";
import clsx from "clsx";

const AMD_Substances: React.FC = () => {
  const [formData, setFormData] = useState<FormData>();

  interface FormData {
    dominatingSubstances: string;
    favoriteSubstanceMix: string;
    otherSubstances: string;
  }

  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string | null>
  >({
    group1: null,
    group2: null,
  });
  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData!,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="space-x-4">
        <div className="inline">
          <label className="inline-flex items-center cursor-pointer">
            <input
              className="block cursor-pointer"
              type="radio"
              name="group1"
              value={"no"}
              checked={selectedOptions.group1 === "no"}
              onChange={handleOptionChange}
            />
            <span className="ml-2">Nej</span>
          </label>
        </div>
        <div className="inline">
          <label className="inline-flex items-center cursor-pointer">
            <input
              className="block cursor-pointer"
              type="radio"
              name="group1"
              value={"yes"}
              checked={selectedOptions.group1 === "yes"}
              onChange={handleOptionChange}
            />
            <span className="ml-2">Ja</span>
          </label>
        </div>
      </div>

      <p className="text-sm font-bold text-green-500">
        1 klick (personen har använt substansen)
      </p>
      <p className="text-sm font-bold text-purple-500">
        2 klick (substansen har även injicerats)
      </p>

      <fieldset
        disabled={
          selectedOptions.group1 === "no" || selectedOptions.group1 === null
        }
        className={clsx({
          "cursor-not-allowed opacity-60":
            selectedOptions.group1 === "no" || selectedOptions.group1 === null,
        })}
      >
        <div className="my-1 p-2 rounded">
          <div className="font-bold">Sömn-/lugnande</div>
          <TwoClickButton label="Alprazolam" />
          <TwoClickButton label="Alprazolam" />
          <TwoClickButton label="Alprazolam" />
          <TwoClickButton label="Alprazolam" />
          <TwoClickButton label="Alprazolam" />
        </div>
        <div className="my-1 p-2 rounded">
          <div className="font-bold">Cannabinoider</div>
          <TwoClickButton label="Alprazolam" />
          <TwoClickButton label="Alprazolam" />
          <TwoClickButton label="Alprazolam" />
          <TwoClickButton label="Alprazolam" />
          <TwoClickButton label="Alprazolam" />
          <TwoClickButton label="Alprazolam" />
          <TwoClickButton label="Alprazolam" />
          <TwoClickButton label="Alprazolam" />
          <TwoClickButton label="Alprazolam" />
        </div>
        <div className="my-1 p-2 rounded">
          <div className="font-bold">Opioider</div>
          <TwoClickButton label="Kokain" />
          <TwoClickButton label="Kokain" />
          <TwoClickButton label="Kokain" />
          <TwoClickButton label="Kokain" />
          <TwoClickButton label="Kokain" />
        </div>
      </fieldset>

      <p className="mt-4">
        Nedanstående texter/svar följer inte med i de frågor som ställs efter
        ämneslistan, utan sammanställs endast i bakgrundstexten{" "}
      </p>
      <div className="mb-4">
        <label className="text-md">Dominerande preparat</label>
        <input
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full"
          type="text"
          name="dominatingSubstances"
          value={formData?.dominatingSubstances}
          onChange={handleInputChange}
        />
      </div>
      <div className="my-4">
        <label className="text-md">Favoritmix</label>
        <input
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full"
          type="text"
          name="favoriteSubstanceMix"
          value={formData?.favoriteSubstanceMix}
          onChange={handleInputChange}
        />
      </div>

      <div className="my-4">
        <div className="inline">
          <p className="m-0 p-0">
            Har du använt någon/några substanser som inte finns i ämneslistan?
          </p>
          <label className="inline-flex items-center cursor-pointer">
            <input
              className="block cursor-pointer"
              name="group2"
              type="radio"
              value={"no"}
              checked={selectedOptions.group2 === "no"}
              onChange={handleOptionChange}
            />
            <span className="ml-2">Nej</span>
          </label>
        </div>
        <div className="inline ms-4">
          <label className="inline-flex items-center cursor-pointer">
            <input
              className="block cursor-pointer"
              name="group2"
              type="radio"
              value={"yes"}
              checked={selectedOptions.group2 === "yes"}
              onChange={handleOptionChange}
            />
            <span className="ml-2">Ja</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="inline-flex items-center">
          Om ja, vilken/vilka?{" "}
        </label>
        <textarea
          disabled={
            selectedOptions.group2 === "no" || selectedOptions.group2 === null
          }
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          value={formData?.otherSubstances}
          name="otherSubstances"
          onChange={handleInputChange}
        ></textarea>
      </div>
      <button className="py-1 px-4 text-white border rounded bg-green-500">
        Spara
      </button>
    </>
  );
};

export default AMD_Substances;
