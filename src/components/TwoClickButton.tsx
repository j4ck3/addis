import clsx from 'clsx';
import React, { useState } from 'react';

interface Props {
    label: string,
}

const TwoClickButton:React.FC<Props> = ({label}) => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prevCount) => (prevCount + 1) % 3);
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        "inline px-2 py-1 m-1 border rounded-md mb-3",
        {
          "bg-green-500": clickCount === 1,
          "bg-purple-500": clickCount === 2,
        }
      )}
    >
      {label}
    </button>
  );
};

export default TwoClickButton;
