import { useContext } from "react";
import { PreviewContext, type PreviewContextType } from "../context/PreviewContext";

export const usePreview = (): PreviewContextType => {
  const context = useContext(PreviewContext);
  if (!context) {
    throw new Error('usePreview must be used within a PreviewProvider');
  }
  return context;
};