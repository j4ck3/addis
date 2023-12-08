"use client";
import React, { FC } from "react";
import { useParams } from "next/navigation";
import { Question } from "@/models/interfaces/Question";
import QuestionInfoHead from "@/components/QuestionInfoHead";
import interview from "@/models/interfaces/something";
import G_MaterialStatus from "@/components/forms/G_MaritalStatus";
import G_Kids from "@/components/forms/G_Kids";
import G_KidsWithYou from "@/components/forms/G_KidsWithYou";
import G_Education from "@/components/forms/G_Education";
import G_WorkSituation from "@/components/forms/G_WorkSituation";
import Stress from "@/components/forms/Stress";
import Anxiety from "@/components/forms/Anxiety";
import PTSD from "@/components/forms/PTSD";
import Depression from "@/components/forms/Depression";
import KNFG_Quantity from "@/components/forms/KNFG_Quantity";
import KNFG_Smoking from "@/components/forms/KNFG_Smoking";
import KNFG_Nicotine from "@/components/forms/KNFG_Nicotine_1";
import KNFG_Food_1 from "@/components/forms/KNFG_Food_1";
import KNFG_Nicotine_2 from "@/components/forms/KNFG_Nicotine_2";
import KNFG_Games_1 from "@/components/forms/KNFG_Games_1";
import AMD_Alcohol_1 from "@/components/forms/AMD_Alcohol_1";
import AMD_Alcohol_3 from "@/components/forms/AMD_Alcohol_3";
import AMD_Alcohol_2 from "@/components/forms/AMD_Alcohol_2";
import AMD_Alcohol_4 from "@/components/forms/AMD_Alcohol_4";
import AMD_Alcohol_5 from "@/components/forms/AMD_Alcohol_5";
import AMD_Alcohol_6 from "@/components/forms/AMD_Alcohol_6";
import AMD_Alcohol_7 from "@/components/forms/AMD_Alcohol_7";
import AMD_Debut from "@/components/forms/AMD_Debut";
import AMD_Substances from "@/components/forms/AMD_Substances";
import AMD_LastUsed from "@/components/forms/AMD_LastUsed";
import AMD_HowOften from "@/components/forms/AMD_HowOften";
import AMD_IntoxicatingEffect from "@/components/forms/AMD_IntoxicatingEffect";
import AMD_Overdosed from "@/components/forms/AMD_Overdosed";
import AMD_StrongerDoses from "@/components/forms/AMD_StrongerDoses";
import AMD_Debut_v2 from "@/components/forms/AMD_Debut_v2";
import AMD_Treatment from "@/components/forms/AMD_Treatment";
import AMD_CurrentStay from "@/components/forms/AMD_CurrentStay";
import AMD_Relatives from "@/components/forms/AMD_Relatives";

export default function Question() {
  const params = useParams();
  const { questionId } = params;
  const numberQuestionId = parseInt(questionId as string);
  const q = interview.Questions.find(
    (question) => question.id === numberQuestionId
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
    "21": AMD_Alcohol_5,
    "22": AMD_Alcohol_6,
    "23": AMD_Alcohol_7,
    "24": AMD_Debut,
    "25": AMD_Substances,
    "26": AMD_HowOften,
    "27": AMD_LastUsed,
    "28": AMD_IntoxicatingEffect,
    "29": AMD_Debut,
    "30": AMD_Debut,
    "31": AMD_Overdosed,
    "32": AMD_Overdosed,
    "33": AMD_Debut,
    "34": AMD_Debut,
    "35": AMD_Debut,
    "36": AMD_Debut,
    "37": AMD_StrongerDoses,
    "38": AMD_Debut,
    "39": KNFG_Nicotine_2,
    "40": AMD_Debut,
    "41": AMD_Debut,
    "42": AMD_Debut,
    "43": AMD_Debut,
    "44": AMD_Debut,
    "45": AMD_Debut,
    "46": AMD_Debut,
    "47": AMD_Debut,
    "48": AMD_Debut,
    "49": AMD_Debut,
    "50": AMD_Debut,
    "51": AMD_Debut,
    "52": AMD_Debut,
    "53": AMD_Debut,
    "54": AMD_Debut,
    "55": AMD_Debut,
    "56": AMD_Debut,
    "57": AMD_Debut_v2,
    "58": AMD_Debut,
    "59": AMD_Debut_v2,
    "60": AMD_Debut,
    "61": AMD_Debut, 
    "62": AMD_Debut_v2, 
    "63": AMD_Debut_v2, 
    "64": AMD_Debut_v2, 
    "65": AMD_Debut_v2, 
    "66": AMD_Debut_v2, 
    "67": AMD_Debut_v2, 
    "68": AMD_Debut_v2, 
    "69": AMD_Debut, 
    "70": AMD_Debut,
    "71": AMD_Debut,
    "72": AMD_Debut,
    "73": AMD_Debut,
    "74": AMD_Debut,
    "75": AMD_Debut,
    "76": AMD_Debut,
    "77": AMD_Debut,
    "78": KNFG_Nicotine_2,
    "79": AMD_Treatment,
    "80": AMD_CurrentStay,
    "81": AMD_Relatives,
    "82": KNFG_Nicotine_2,
  };

  const SelectedFormComponent =
    formComponents[questionId as keyof typeof formComponents];
  return (
    <>
      <div className="container">
        <div className="shadow-md rounded p-4 my-4">
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
