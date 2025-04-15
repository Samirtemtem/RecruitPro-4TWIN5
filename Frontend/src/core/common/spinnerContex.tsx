import React, { createContext, useContext, useState, ReactNode } from "react";

interface SpinnerContextType {
  showSpinner: () => void;
  hideSpinner: () => void;
  loading: boolean;
}

const SpinnerContext = createContext<SpinnerContextType | undefined>(undefined);

export const SpinnerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const showSpinner = () => setLoading(true);
  const hideSpinner = () => setLoading(false);

  return (
    <SpinnerContext.Provider value={{ showSpinner, hideSpinner, loading }}>
      {children}
    </SpinnerContext.Provider>
  );
};

export const useSpinner = () => {
  const context = useContext(SpinnerContext);
  if (context === undefined) {
    throw new Error("useSpinner must be used within a SpinnerProvider");
  }
  return context;
};
