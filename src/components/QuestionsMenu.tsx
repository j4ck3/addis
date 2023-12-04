import clsx from "clsx";
import Link from "next/link";
import React, { FunctionComponent } from "react";

const QuestionsMenu: FunctionComponent = () => {
  return (
    <>
      <div className="overflow-auto space-x-3 my-14 flex items-center w-full">
        {/* <div
          className={clsx(
            "base-class",
            { "active-class": isActive, "inactive-class": !isActive },
            "extra-class",
            { "highlight-class": isHighlighted }
          )}
        >
          Content here
        </div> */}
        
        {Array.from({ length: 40 }, (_, index) => (
          <Link
            href=""
            key={index}
            className="border rounded-md text-black h-14 p-4 inline-flex items-center hover:bg-green-300 mb-3"
          >
            {index}
          </Link>
        ))}
      </div>
    </>
  );
};

export default QuestionsMenu;
