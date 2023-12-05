"use client";
import React, { FC } from "react";
import { useParams } from "next/navigation";
import { Question } from "@/interfaces/Question";
import QuestionInfoHead from "@/components/QuestionInfoHead";
import interview from "@/interfaces/something";
import G_MaterialStatus from "@/components/formContainers/G_MaritalStatus";
import G_Kids from "@/components/formContainers/G_Kids";
import G_KidsWithYou from "@/components/formContainers/G_KidsWithYou";
import G_Education from "@/components/formContainers/G_Education";
import G_WorkSituation from "@/components/formContainers/G_WorkSituation";
import Stress from "@/components/formContainers/Stress";
import Anxiety from "@/components/formContainers/Anxiety";
import PTSD from "@/components/formContainers/PTSD";
import Depression from "@/components/formContainers/Depression";
import KNFG_Quantity from "@/components/formContainers/KNFG_Quantity";
import KNFG_Smoking from "@/components/formContainers/KNFG_Smoking";
import KNFG_Nicotine from "@/components/formContainers/KNFG_Nicotine_1";
import KNFG_Food_1 from "@/components/formContainers/KNFG_Food_1";
import KNFG_Nicotine_2 from "@/components/formContainers/KNFG_Nicotine_2";
import KNFG_Games_1 from "@/components/formContainers/KNFG_Games_1";
import AMD_Alcohol_1 from "@/components/formContainers/AMD_Alcohol_1";
import AMD_Alcohol_3 from "@/components/formContainers/AMD_Alcohol_3";
import AMD_Alcohol_2 from "@/components/formContainers/AMD_Alcohol_2";
import AMD_Alcohol_4 from "@/components/formContainers/AMD_Alcohol_4";
export default function Question() {
  const params = useParams();
  const { questionId } = params;
  const numberQuestionId = parseInt(questionId as string);
  const q = interview.Questions.find(
    (question) => question.questionId === numberQuestionId
  );
  const formComponents: Record<string, FC<{}>> = {
    "1": G_MaterialStatus,
    "2": G_Kids,
    "3": G_KidsWithYou,
    "4": G_Education,
    "5": G_WorkSituation,
    "6": Stress,
    "7": Anxiety,
    "8": PTSD,
    "9": Depression,
    "10": KNFG_Quantity,
    "11": KNFG_Smoking,
    "12": KNFG_Nicotine,
    "13": KNFG_Nicotine_2,
    "14": KNFG_Food_1,
    "15": KNFG_Nicotine_2,
    "16": KNFG_Games_1,
    "17": AMD_Alcohol_1,
    "18": AMD_Alcohol_2,
    "19": AMD_Alcohol_3,
    "20": AMD_Alcohol_4,
  };

  const SelectedFormComponent =
    formComponents[questionId as keyof typeof formComponents];
  return (
    <>
      <div className="container">
        <div className="shadow-md rounded p-4 my-7 mb-4">
          {q !== undefined ? (
            <>
              <QuestionInfoHead question={q} />
              {SelectedFormComponent ? (
                <SelectedFormComponent />
              ) : (
                <p className="text-center">
                  404 - Inget formulär med id {questionId} hittades.
                </p>
              )}
            </>
          ) : (
            <>
              <p className="text-center">
                404 - Ingen fråga med id {questionId} hittades.
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
