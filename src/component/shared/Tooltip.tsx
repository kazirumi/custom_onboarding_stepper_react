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
}

const Tooltip: React.FC<TooltipProps> = ({
  title,
  message,
  buttonText = "Got it",
  position = "bottom",
  onButtonClick,
  className,
  showArrow = true,
}) => {
  const tooltipSectionRef = useRef<null | HTMLElement>(null);

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
      left: "left-full top-1/2 -translate-y-1/2 translate-x-1/2",
      right: "right-full top-1/2 -translate-y-1/2 -translate-x-1/2",
      "top-left": "top-full right-3 -translate-y-1/2",
      "top-right": "top-full left-3 -translate-y-1/2",
      "bottom-left": "bottom-full right-3 translate-y-1/2",
      "bottom-right": "bottom-full left-3 translate-y-1/2",
    };
    return arrows[pos];
  };

  useEffect(() => {
   
      if (tooltipSectionRef.current) {
        tooltipSectionRef.current.scrollIntoView(
          { behavior: "smooth", block: "end", inline: "nearest" }
        );
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
        className="relative bg-white/10 backdrop-blur-[15px] rounded-lg p-4 border border-white/20 shadow-lg"
      >
        {/* Modern Arrow - Rotated Square */}
        {showArrow && (
          <div
            className={cn(
              "absolute w-3 h-3 bg-white/10 backdrop-blur-[15px] border border-white/20 rotate-45",
              getArrowClasses(position)
            )}
          />
        )}

        {/* Content */}
        <div className="space-y-3">
          {/* Title */}
          <h3 className="text-lg font-semibold text-slate-500">{title}</h3>

          {/* Message */}
          <p className="text-sm text-slate-500 leading-relaxed">{message}</p>

          {/* Button */}
          {buttonText && (
            <div className="flex justify-end pt-2">
              <button
                onClick={onButtonClick}
                className="px-4 py-2 !bg-green-300 hover:bg-green-500 text-white text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent"
              >
                {buttonText}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
