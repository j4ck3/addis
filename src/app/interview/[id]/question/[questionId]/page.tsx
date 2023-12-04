"use client";
import QuestionInfoHead from "@/components/QuestionInfoHead";
import DebutContainer from "@/components/formContainers/DebutContainer";
import MaterialStatus from "@/components/SpecificContainers/MaritalStatus";
import React from "react";
import interview from "@/interfaces/something";
import { Question } from "@/interfaces/Question";
export default function Question() {
  const q = interview.Questions.find((question) => question.questionId === "1");

  const formComponents = {
    1: DebutContainer,
    2: MaterialStatus,
  };

  const FormComponent = formComponents[2];

  return (
    <>
      <div className="container">
        <div className="shadow-md rounded p-4 my-7 mb-4">
          {q?.questionText !== undefined ? (
            <>
              <QuestionInfoHead question={q as Question} />
              {FormComponent ? (
                <FormComponent />
              ) : (
                <p>404 - Inget formulär med id .. hittades.</p>
              )}
            </>
          ) : (
            <>
              <h2>404 - Ingen fråga med id .. hittades.</h2>
            </>
          )}
        </div>
      </div>
    </>
  );
}
