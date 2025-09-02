import { cn } from "../../utils/cn";

interface OverlayProps {
    isHighlight: boolean;
    // setIsHighlight: (value: boolean) => void;
}
export default function Overlay({ isHighlight = false  }: OverlayProps) {

    return (
        <>
            {isHighlight && (
                <div
                    className={cn(
                        'fixed inset-0 bg-[#DCC7FF33] backdrop-blur-[7px] z-[999]',
                    )}
                />
            )}
        </>
    );
}