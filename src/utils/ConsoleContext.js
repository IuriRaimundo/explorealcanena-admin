import React, { createContext, useContext, useState } from 'react';

const ConsoleContext = createContext();
export const useConsoleContext = () => useContext(ConsoleContext);

export function ConsoleContextProvider({ children }) {
  const [documents, setDocuments] = useState();
  // Definir objeto com id vazio para permitir a verificação
  const [selection, setSelection] = useState({
    id: '',
  });
  const [type, setType] = useState('local'); // Apresentar locais por defeito

  const changeSelection = (s) => {
    if (s === selection) {
      setSelection({
        id: '',
      });
    } else {
      setSelection(s);
    }
  };

  const value = {
    documents,
    setDocuments,
    selection,
    changeSelection,
    type,
    setType,
  };

  return <ConsoleContext.Provider value={value}>{children}</ConsoleContext.Provider>;
}
