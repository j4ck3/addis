"use client";
import clsx from "clsx";
import Link from "next/link";
import { useParams, useRouter, usePathname } from "next/navigation";
import React, { useEffect } from "react";

const QuestionsMenu: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const isOnEndPage = pathname.endsWith("end");
  const { questionId } = params;
  const numberQuestionId = parseInt(questionId as string);

  useEffect(() => {
    const container = document.getElementById("QuestionsMenu");
    const handleScroll = () => {
      if (container) {
        localStorage.setItem(
          "horizontalScrollPosition",
          String(container.scrollLeft)
        );
      }
    };
    if (container) {
      container.addEventListener("scroll", handleScroll);
      const storedScrollPosition = localStorage.getItem(
        "horizontalScrollPosition"
      );
      if (storedScrollPosition) {
        container.scrollLeft = parseInt(storedScrollPosition, 10);
      }
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleNextButtonClick = () => {
    if (numberQuestionId === 83 - 1) {
      router.push("/interview/id/question/end");
    } else {
      router.push(`/interview/id/question/${numberQuestionId + 1}`);
    }
  };

  return (
    <>
      <div className="flex justify-between space-x-2 my-8">
        <Link
          className="w-14 h-14 border rounded-md text-black p-4 inline-flex items-center bg-green-300 hover:bg-green-400 mb-3"
          href={`/interview/id/question/${numberQuestionId - 1}`}
        >
          <i className="bi bi-chevron-left"></i>
        </Link>
        <div
          id="QuestionsMenu"
          className="overflow-auto space-x-3 flex items-center w-full"
        >
          {Array.from({ length: 83 }, (_, index) => (
            <Link
              href={`/interview/id/question/${index}`}
              key={index}
              className={clsx(
                "border rounded-md text-black h-14 p-4 inline-flex items-center no-underline hover:bg-green-300 mb-3",
                {
                  "bg-green-400": questionId === `${index}`,
                }
              )}
            >
              {index}
            </Link>
          ))}
          <Link
            className={clsx(
              "border rounded-md text-black h-14 p-4 inline-flex items-center no-underline hover:bg-green-300 mb-3",
              {
                "bg-green-400": isOnEndPage,
              }
            )}
            href={`/interview/id/question/end`}
          >
            Avsluta
          </Link>
        </div>
        <button
          onClick={handleNextButtonClick}
          className="w-14 h-14 border rounded-md text-black p-4 inline-flex items-center bg-green-300 hover:bg-green-400 mb-3"
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </>
  );
};

export default QuestionsMenu;
