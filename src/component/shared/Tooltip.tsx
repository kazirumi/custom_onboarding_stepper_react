import React, { useEffect, useRef } from "react";
import { cn } from "../../utils/cn";

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
      top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
      bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
      left: "right-full top-1/2 -translate-y-1/2 mr-2",
      right: "left-full top-1/2 -translate-y-1/2 ml-2",
      "top-left": "bottom-full right-0 mb-2",
      "top-right": "bottom-full left-0 mb-2",
      "bottom-left": "top-full right-0 mt-2",
      "bottom-right": "top-full left-0 mt-2",
    };
    return positions[pos];
  };

  const getArrowClasses = (pos: TooltipPosition) => {
    const arrows = {
      top: "top-full left-1/2 -translate-x-1/2 -translate-y-1/2",
      bottom: "bottom-full left-1/2 -translate-x-1/2 translate-y-1/2",
      left: "left-full top-1/2 -translate-y-1/2 -translate-x-1/2",
      right: "right-full top-1/2 -translate-y-1/2 translate-x-1/2",
      "top-left": "top-full right-3 -translate-y-1/2",
      "top-right": "top-full left-3 -translate-y-1/2",
      "bottom-left": "bottom-full right-3 translate-y-1/2",
      "bottom-right": "bottom-full left-3 translate-y-1/2",
    };
    return arrows[pos];
  };

  useEffect(() => {
    if (tooltipSectionRef.current) {
      tooltipSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, []);

  return (
    <div
      className={cn(
        "absolute z-[10001] w-72 max-w-sm",
        getPositionClasses(position),
        className
      )}
    >
      {/* Tooltip Container */}
      <div
        ref={tooltipSectionRef}
        className={cn(
          "relative w-[375px] h-fit flex flex-col gap-6 p-6 rounded-[24px] bg-[#AA9CFC]/[0.12] backdrop-blur-[32px]",
          containerClassName
        )}
      >
        {/* Modern Arrow - Rotated Square */}
        {showArrow && (
          <div
            className={cn(
              "absolute w-4 h-4 backdrop-blur-[32px] border-0 bg-[#AA9CFC]/[0.12] rotate-45",
              getArrowClasses(position),
              arrowClassName
            )}
          />
        )}

        {/* Content */}
        <div className="space-y-3 text-left">
          {/* Title */}
          <h3 className="text-[36px] leading-[44px] font-medium text-white">
            {title}
          </h3>

          {/* Message */}
          <p className="text-[16px] leading-[22px] font-normal text-white">
            {message}
          </p>

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
        {footerSection && (
          <div className="mt-4">
            {footerSection}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tooltip;