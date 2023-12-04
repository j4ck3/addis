"use client";
import React, { useState } from "react";
import { NextPage } from "next";
interface Props {
  visible: boolean;
  onClose: () => void;
}

const QuestionComment: NextPage<Props> = ({ visible, onClose }) => {
  const [comment, setComment] = useState("");
  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setComment(event.target.value);
  };
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex items-center justify-center z-20">
      <div className="bg-theme w-[600px] p-6 rounded-lg shadow-lg">
        <div className="flex justify-between flex-row mb-4">
          <h2 className="text-base text-white font-medium">Lägg till en Kommentar</h2>
        </div>
        <div>
          <textarea
            placeholder="Kommentar"
            value={comment}
            onChange={handleChange}
            className="w-full mt-4 p-2 bg-white text-black rounded option-input"
          ></textarea>
          <div className="grid grid-cols-2 gap-3 mt-2">
            <button
            type="button"
            className="rounded-md py-1 bg-red-700 text-white"
            onClick={onClose}
          >
            Avbryt
          </button>
          <button
              type="button"
              className="rounded-md bg-white text-green-600"
            >
              Spara
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionComment;
