/* eslint-disable prettier/prettier */
import React from 'react';

const PracticeContext = React.createContext();

const PracticeProvider = ({children}) => {
  const [val, setVal] = React.useState(0);
  const [val1, setVal1] = React.useState(1);
  const [val2, setVal2] = React.useState(2);
  return (
    <PracticeContext.Provider
      value={{
        val,
        setVal,
        val1,
        setVal1,
        val2,
        setVal2,
      }}>
      {children}
    </PracticeContext.Provider>
  );
};
export {PracticeContext, PracticeProvider};
