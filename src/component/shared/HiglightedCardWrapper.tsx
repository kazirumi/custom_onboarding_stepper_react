import React, { useEffect, useRef } from "react";

import { cn } from "../../utils/cn";
import { usePreview } from "../../hooks/usePreview";

interface HighlightedCardWrapperProps {
  index?: number;
  sectionName: string;
  children: React.ReactNode;
  tooltip?: React.ReactNode; // Add tooltip prop
}

const HighlightedCardWrapper = ({
  sectionName,
  children,
  tooltip,
}: HighlightedCardWrapperProps) => {
  const { highlightSection, isHighlight } = usePreview();
  // index === 0 &&

  const highlightedSectionRef = useRef<HTMLDivElement>(undefined);

  useEffect(() => {
    if (highlightSection === sectionName) {
      if (highlightedSectionRef.current) {
        highlightedSectionRef.current.scrollIntoView(
          { behavior: "smooth", block: "end", inline: "nearest" }
        );
      }
    }
  }, [highlightSection]);

  return (
    <>
      <div
        ref={highlightedSectionRef}
        className={cn(
          "p-0 w-full relative",
          highlightSection === sectionName && isHighlight && "z-[10000]"
        )}
      >
        {/* {highlightSection}
        {isHighlight.toString()}
        <div className="absolute -bottom-9">tooltip</div> */}
        {children}
        {/* Render tooltip only when this section is highlighted */}
        {highlightSection === sectionName && isHighlight && tooltip}
      </div>
    </>
  );
};

export default HighlightedCardWrapper;
