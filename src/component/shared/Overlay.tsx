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
                        'fixed inset-0 bg-[#0C0910A6]/65 backdrop-blur-[7px] z-[999]',
                    )}
                />
            )}
        </>
    );
}