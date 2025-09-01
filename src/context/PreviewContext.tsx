import React, { createContext, useContext, useState } from 'react';

export interface PreviewContextType {
  highlightSection: string;
  isHighlight: boolean;
  setHighlightSection: (section: string) => void;
  setIsHighlight: (highlight: boolean) => void;
}

export const PreviewContext = createContext<PreviewContextType | undefined>(undefined);

export const PreviewProvider = ({ children }: { children: React.ReactNode }) => {
  const [highlightSection, setHighlightSection] = useState('');
  const [isHighlight, setIsHighlight] = useState(false);

  return (
    <PreviewContext.Provider
      value={{
        highlightSection,
        isHighlight,
        setHighlightSection,
        setIsHighlight,
      }}
    >
      {children}
    </PreviewContext.Provider>
  );
};

// export const usePreview = (): PreviewContextType => {
//   const context = useContext(PreviewContext);
//   if (!context) {
//     throw new Error('usePreview must be used within a PreviewProvider');
//   }
//   return context;
// };
