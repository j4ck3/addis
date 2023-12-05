import clsx from "clsx";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useHorizontalScroll } from '../components/HorizontalScroll';

const QuestionsMenu: React.FC = () => {
  const params = useParams();
  const { questionId } = params;
  const scrollPosition = useHorizontalScroll();

  useEffect(() => {
    const container = document.getElementById('QuestionsMenu');
    if (container) {
      container.scrollLeft = scrollPosition;
    }
    return () => {
      localStorage.setItem('horizontalScrollPosition', String(scrollPosition));
    };
  }, [scrollPosition]);


  const numberQuestionId = parseInt(questionId as string);
  return (
    <>
      <div className="flex justify-between space-x-2 my-8">
        <Link
          className="w-14 h-14 border rounded-md text-black p-4 inline-flex items-center bg-green-300 hover:bg-green-400 mb-3"
          href={`/interview/id/question/${numberQuestionId - 1}`}
        >
          <i className="bi bi-chevron-left"></i>
        </Link>
        <div id="QuestionsMenu" className="overflow-auto space-x-3 flex items-center w-full">
          {Array.from({ length: 40 }, (_, index) => (
            <Link
              href={`/interview/id/question/${index}`}
              key={index}
              className={clsx(
                "border rounded-md text-black h-14 p-4 inline-flex items-center hover:bg-green-300 mb-3",
                {
                  "bg-green-400": questionId === `${index}`,
                }
              )}
            >
              {index}
            </Link>
          ))}
        </div>
        <Link
          className="w-14 h-14 border rounded-md text-black p-4 inline-flex items-center bg-green-300 hover:bg-green-400 mb-3"
          href={`/interview/id/question/${numberQuestionId + 1}`}
        >
          <i className="bi bi-chevron-right"></i>
        </Link>
      </div>
    </>
  );
};

export default QuestionsMenu;
