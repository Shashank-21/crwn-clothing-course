import { createContext, useState, useEffect } from "react";

export const DropdownContext = createContext({
  visible: false,
  setVisible: () => {},
});

export const DropdownProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const value = { visible, setVisible };

  useEffect(() => {
    setVisible(false);
  }, []);

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};
