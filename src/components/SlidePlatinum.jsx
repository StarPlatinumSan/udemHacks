import React, { useState } from "react";
import { useCollapse } from "react-collapsed";

const SlidePlatinum = ({ question, duration = 300, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { getToggleProps, getCollapseProps } = useCollapse({
    isExpanded: isOpen,
  });

  return (
    <div className="question">
      <div
        className="question-trigger"
        {...getToggleProps({
          onClick: () => setIsOpen((prev) => !prev),
        })}
      >
        {question}
      </div>

      <div {...getCollapseProps()}>{children}</div>
    </div>
  );
};

export default SlidePlatinum;
