import React, { useState } from "react";
import QuestionsMenu from "./QuestionsMenu";
import QuestionComment from "./QuestionComment";
import { Question } from "@/models/interfaces/Question";

interface Props {
  question: Question;
}

const QuestionInfoHead: React.FC<Props> = ({ question }) => {
  const [isCollapsed, setCollapsed] = useState(true);
  const handleToggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };
  const [showQuestionCommentForm, setShowQuestionCommentFrom] = useState(false);
  const handleOnClose = () => setShowQuestionCommentFrom(false);
  return (
    <>
      <a className="btn-theme" href="/client/22">
        <i className="bi bi-chevron-left me-1"></i>Tillbaka till klientsidan
      </a>
      <QuestionsMenu />
      <h1 className="text-base font-bold text-green-600">
        {question.category}
      </h1>
      <div className="text-2xl flex justify-between">
        <div className="inline-flex text-xl space-x-3 mb-3">
          {question.text}
          <button className="ms-2" type="button" onClick={handleToggleCollapse}>
            <i
              className={`bi bi-info-circle-fill text-3xl ${
                !isCollapsed ? "text-green-400" : "text-green-600"
              }`}
            ></i>
            <div className="sr-only">info</div>
          </button>
          <button
            className="text-xs"
            onClick={() => setShowQuestionCommentFrom(true)}
          >
            <i className="bi bi-chat-text-fill text-green-600 text-3xl"></i>
          </button>
        </div>
      </div>
      <p>{question.info}</p>
      <div
        className={`mt-2 transition-all duration-500 ease-in-out grid grid-cols-2 ${
          isCollapsed ? "h-0 overflow-hidden" : "h-auto"
        }`}
      >
        <div className="bg-gray-200 p-2 rounded">
          Minnesluckor/blackouts. Koda ”ja” om personen tappat minnet för en del
          av tiden då hen använt drogen och inte kommer ihåg vad hen gjort eller
          sagt, <strong>trots påminnelser efteråt.</strong> Frågan gäller
          "blackouts", inte sk. "greyouts", då diffusa minnesbilder finns kvar.
        </div>
      </div>
      <QuestionComment
        onClose={handleOnClose}
        visible={showQuestionCommentForm}
      />
    </>
  );
};

export default QuestionInfoHead;
