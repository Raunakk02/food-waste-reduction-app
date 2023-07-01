import React, { createContext, useContext, useReducer } from 'react';

const CardPairContext = createContext();
export const useCardPairContext = () => useContext(CardPairContext);

const actionTypes = {
  toggleIndex: 'toggleIndex',
  onIndex: 'on',
  offIndex: 'off'
};

const reducer = (openIndexes, action) => {
  switch (action.type) {
    case actionTypes.toggleIndex: {
      const closing = openIndexes.includes(action.index);
      return closing
        ? openIndexes.filter((i) => i !== action.index)
        : [...openIndexes, action.index];
    }
    case actionTypes.onIndex: {
      const closing = openIndexes.includes(action.index);
      return closing ? openIndexes : [...openIndexes, action.index];
    }
    case actionTypes.offIndex: {
      return openIndexes.filter((i) => i !== action.index);
    }
  }
};

const useCardPair = () => {
  const [openIndexes, dispatch] = useReducer(reducer, [0]);
  const toggleIndex = (index, type = 'toggleIndex') =>
    dispatch({ type, index });
  return [openIndexes, toggleIndex];
};

const CardPairProvider = ({ children }) => {
  const [openIndex, toggleIndex] = useCardPair();
  return (
    <CardPairContext.Provider value={[openIndex, toggleIndex]}>
      {children}
    </CardPairContext.Provider>
  );
};

export default CardPairProvider;
