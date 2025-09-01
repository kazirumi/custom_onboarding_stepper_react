import React from "react";

import { cn } from "../../utils/cn";
import { usePreview } from "../../hooks/usePreview";

interface HighlightedCardWrapperProps {
  index?: number;
  sectionName: string;
  children: React.ReactNode;
}

const HighlightedCardWrapper = ({
  index,
  sectionName,
  children,
}: HighlightedCardWrapperProps) => {
  const { highlightSection, isHighlight } = usePreview();
  // index === 0 &&

  return (
    <>
      <div
        className={cn(
          "p-0 w-full relative",
          highlightSection === sectionName && isHighlight && "z-[10000]"
        )}
        >
        {highlightSection}
        {isHighlight.toString()}
        <div className="absolute -bottom-9">tooltip</div>
        {children}
      </div>
    </>
  );
};

export default HighlightedCardWrapper;
