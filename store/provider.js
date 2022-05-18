/* eslint-disable prettier/prettier */
import Context from './context';
import React, {useReducer} from 'react';
import reducer, {initState} from './reducer';
function Provider({children}) {
  const [state, dispatch] = useReducer();
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}
export default Provider;
