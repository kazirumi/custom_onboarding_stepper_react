import React, { useEffect, useRef } from "react";
import { cn } from "../../utils/cn";
import { usePreview } from "../../hooks/usePreview";

type TooltipPosition =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

interface TooltipProps {
  title: string;
  message: string;
  buttonText?: string;
  position?: TooltipPosition;
  onButtonClick?: () => void;
  className?: string;
  showArrow?: boolean;
  containerClassName?: string;
  arrowClassName?: string;
  footerSection?: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({
  title,
  message,
  buttonText = "Got it",
  position = "bottom",
  onButtonClick,
  className,
  showArrow = true,
  containerClassName,
  arrowClassName,
  footerSection,
}) => {
  const tooltipSectionRef = useRef<HTMLDivElement>(null);

  const getPositionClasses = (pos: TooltipPosition) => {
    const positions = {
      top: "bottom-full left-1/2 -translate-x-1/2 mb-4",
      bottom: "top-full left-1/2 -translate-x-1/2 mt-4",
      left: "right-full top-1/2 -translate-y-1/2 mr-6",
      right: "left-full top-1/2 -translate-y-1/2 ml-6",
      "top-left": "bottom-full right-0 mb-4",
      "top-right": "bottom-full left-0 mb-4",
      "bottom-left": "top-full right-0 mt-4",
      "bottom-right": "top-full left-0 mt-4",
    };
    return positions[pos];
  };

  const getArrowClasses = (pos: TooltipPosition) => {
    const arrows = {
      top: "top-full left-1/2 -translate-x-1/2",
      bottom: "bottom-full left-1/2 -translate-x-1/2 rotate-180",
      left: "left-full top-1/2 -translate-y-1/2 -translate-x-[2.5px] -rotate-90",
      right: "right-full top-1/2 -translate-y-1/2 translate-x-[2.5px]  rotate-90",
      "top-left": "top-full right-6",
      "top-right": "top-full left-6",
      "bottom-left": "bottom-full right-6 rotate-180",
      "bottom-right": "bottom-full left-6 rotate-180",
    };
    return arrows[pos];
  };

  const { highlightSection } = usePreview();

  useEffect(() => {
    if (
      tooltipSectionRef.current &&
      (position === "bottom" ||
        position === "bottom-left" ||
        position === "bottom-right")
    ) {
      tooltipSectionRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    } else {
      tooltipSectionRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [highlightSection]);

  return (
    <div
      className={cn(
        "absolute z-[10001] w-fit",
        getPositionClasses(position),
        className
      )}
    >
      {/* Tooltip Container */}
      <div
        ref={tooltipSectionRef}
        className={cn(
          "relative md:w-[375px] w-[327px] h-fit flex flex-col gap-6 p-6 rounded-[24px] bg-[#AA9CFC]/[0.12] backdrop-blur-[32px]",
          containerClassName
        )}
      >
        {/* Modern Arrow - Rotated Square */}
        {showArrow && (
          <div
            className={cn(
              "absolute",
              getArrowClasses(position),
              arrowClassName
            )}
            style={{
              width: 0,
              height: 0,
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderTop: `15px solid rgba(170, 156, 252, 0.12)`, // Matches your container
            }}
          />
        )}

        {/* Content */}
        <div className="flex flex-col gap-y-6 text-left">
          <section className="flex flex-col gap-y-2 text-left">
            {/* Title */}
            <h3 className="md:text-[36px] text-[30px] md:leading-[44px] leading-[40px] font-medium text-white">
              {title}
            </h3>

            {/* Message */}
            <p className="text-[16px] leading-[22px] font-normal text-white">
              {message}
            </p>
          </section>

          {/* Button */}
          {buttonText && (
            <div className="flex justify-start pt-2">
              <button
                onClick={onButtonClick}
                className="inline-flex items-center gap-4 px-5 py-3 min-h-[48px] rounded-[12px] !bg-[#A6F20D] border border-[#6633CC]/0 text-[16px] leading-[24px] font-medium tracking-[0.48px] text-[#020203]"
              >
                {buttonText}
              </button>
            </div>
          )}
        </div>

        {/* Footer Section */}
        {footerSection && <div className="mt-4">{footerSection}</div>}
      </div>
    </div>
  );
};

export default Tooltip;
